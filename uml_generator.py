"""
Galaxy Weather - UML Diagram Generator
Generates UML diagrams for the project using graphviz and plantuml-like syntax.
Run this script to generate all UML diagrams in the /diagrams folder.
"""

import os
from pathlib import Path

# Graphviz rendering requires graphviz executable to be installed
# We'll use PlantUML text files which can be rendered online or with VS Code extension
GRAPHVIZ_AVAILABLE = False

# Create diagrams directory
DIAGRAMS_DIR = Path(__file__).parent / 'diagrams'
DIAGRAMS_DIR.mkdir(exist_ok=True)


def create_use_case_diagram():
    """
    1️⃣ Use Case Diagram
    Actor: User
    Use Cases: Enter location, Upload JSON data, Request forecast, 
               View forecast result, View forecast history
    """
    if not GRAPHVIZ_AVAILABLE:
        return create_use_case_plantuml()
    
    dot = Digraph('UseCase', comment='Galaxy Weather Use Case Diagram')
    dot.attr(rankdir='LR', bgcolor='white')
    dot.attr('node', shape='ellipse', style='filled', fillcolor='lightblue')
    
    # Actor
    dot.node('user', 'User', shape='box', fillcolor='lightyellow')
    
    # System boundary
    with dot.subgraph(name='cluster_system') as c:
        c.attr(label='Galaxy Weather System', style='dashed')
        
        # Use cases
        c.node('uc1', 'Enter Location')
        c.node('uc2', 'Upload JSON Data')
        c.node('uc3', 'Request Forecast')
        c.node('uc4', 'View Forecast Result')
        c.node('uc5', 'View Forecast History')
    
    # Relationships
    dot.edge('user', 'uc1')
    dot.edge('user', 'uc2')
    dot.edge('user', 'uc3')
    dot.edge('user', 'uc4')
    dot.edge('user', 'uc5')
    
    # Include relationships
    dot.edge('uc3', 'uc1', style='dashed', label='<<include>>')
    dot.edge('uc3', 'uc4', style='dashed', label='<<include>>')
    
    output_path = DIAGRAMS_DIR / '01_use_case_diagram'
    dot.render(output_path, format='png', cleanup=True)
    print(f"✓ Use Case Diagram saved to {output_path}.png")
    return str(output_path) + '.png'


def create_use_case_plantuml():
    """Create PlantUML text for Use Case diagram."""
    plantuml = """
@startuml UseCase
!theme plain

left to right direction
skinparam packageStyle rectangle

actor User

rectangle "Galaxy Weather System" {
    usecase "Enter Location" as UC1
    usecase "Upload JSON Data" as UC2
    usecase "Request Forecast" as UC3
    usecase "View Forecast Result" as UC4
    usecase "View Forecast History" as UC5
}

User --> UC1
User --> UC2
User --> UC3
User --> UC4
User --> UC5

UC3 ..> UC1 : <<include>>
UC3 ..> UC4 : <<include>>

@enduml
"""
    output_path = DIAGRAMS_DIR / '01_use_case_diagram.puml'
    with open(output_path, 'w') as f:
        f.write(plantuml)
    print(f"✓ Use Case Diagram (PlantUML) saved to {output_path}")
    return str(output_path)


def create_class_diagram():
    """
    2️⃣ Class Diagram
    Classes: WeatherRequest, WeatherDataFetcher, ForecastEngine, ForecastResult
    """
    if not GRAPHVIZ_AVAILABLE:
        return create_class_plantuml()
    
    dot = Digraph('ClassDiagram', comment='Galaxy Weather Class Diagram')
    dot.attr(rankdir='TB', bgcolor='white')
    dot.attr('node', shape='record', style='filled', fillcolor='lightyellow')
    
    # WeatherRequest class
    dot.node('WeatherRequest', '''
{WeatherRequest|
- id: int\\l
- query: str\\l
- query_type: str\\l
- range_days: int\\l
- created_at: datetime\\l
- status: str\\l
|
+ save()\\l
+ update_status(status)\\l
+ get_by_id(id): WeatherRequest\\l
+ get_all(limit): List[WeatherRequest]\\l
}''')
    
    # WeatherDataFetcher class
    dot.node('WeatherDataFetcher', '''
{WeatherDataFetcher|
- api_key: str\\l
|
+ get_current(query): dict\\l
+ get_forecast(query, days): dict\\l
+ get_history(query, date): dict\\l
+ get_history_range(query, days_back): list\\l
}''')
    
    # ForecastEngine class
    dot.node('ForecastEngine', '''
{ForecastEngine|
- fetcher: WeatherDataFetcher\\l
|
+ analyze_history(data): dict\\l
+ generate_forecast(query, days): dict\\l
+ process_json_upload(json_data): dict\\l
- _calculate_trend(values): float\\l
- _moving_average(values, window): list\\l
}''')
    
    # ForecastResult class
    dot.node('ForecastResult', '''
{ForecastResult|
- id: int\\l
- request_id: int\\l
- location_name: str\\l
- country: str\\l
- latitude: float\\l
- longitude: float\\l
- forecast_data: str\\l
- current_temp: float\\l
- current_humidity: float\\l
- current_condition: str\\l
|
+ save()\\l
+ get_forecast_data(): dict\\l
+ get_by_request_id(id): ForecastResult\\l
}''')
    
    # Relationships
    dot.edge('ForecastEngine', 'WeatherDataFetcher', label='uses', arrowhead='open')
    dot.edge('ForecastResult', 'WeatherRequest', label='belongs to', arrowhead='open')
    
    output_path = DIAGRAMS_DIR / '02_class_diagram'
    dot.render(output_path, format='png', cleanup=True)
    print(f"✓ Class Diagram saved to {output_path}.png")
    return str(output_path) + '.png'


def create_class_plantuml():
    """Create PlantUML text for Class diagram."""
    plantuml = """
@startuml ClassDiagram
!theme plain

class WeatherRequest {
    - id: int
    - query: str
    - query_type: str
    - range_days: int
    - created_at: datetime
    - status: str
    --
    + save()
    + update_status(status)
    + {static} get_by_id(id): WeatherRequest
    + {static} get_all(limit): List[WeatherRequest]
}

class WeatherDataFetcher {
    - api_key: str
    --
    + get_current(query): dict
    + get_forecast(query, days): dict
    + get_history(query, date): dict
    + get_history_range(query, days_back): list
}

class ForecastEngine {
    - fetcher: WeatherDataFetcher
    --
    + analyze_history(data): dict
    + generate_forecast(query, days): dict
    + process_json_upload(json_data): dict
    - _calculate_trend(values): float
    - _moving_average(values, window): list
}

class ForecastResult {
    - id: int
    - request_id: int
    - location_name: str
    - country: str
    - latitude: float
    - longitude: float
    - forecast_data: str
    - current_temp: float
    - current_humidity: float
    - current_condition: str
    --
    + save()
    + get_forecast_data(): dict
    + {static} get_by_request_id(id): ForecastResult
}

ForecastEngine --> WeatherDataFetcher : uses
ForecastResult --> WeatherRequest : belongs to

@enduml
"""
    output_path = DIAGRAMS_DIR / '02_class_diagram.puml'
    with open(output_path, 'w') as f:
        f.write(plantuml)
    print(f"✓ Class Diagram (PlantUML) saved to {output_path}")
    return str(output_path)


def create_sequence_diagram():
    """
    3️⃣ Sequence Diagram
    Scenario: User requests forecast
    User → Browser → Flask → WeatherAPI → ForecastEngine → Database → UI
    """
    if not GRAPHVIZ_AVAILABLE:
        return create_sequence_plantuml()
    
    # Sequence diagrams are better in PlantUML format
    return create_sequence_plantuml()


def create_sequence_plantuml():
    """Create PlantUML text for Sequence diagram."""
    plantuml = """
@startuml SequenceDiagram
!theme plain

actor User
participant Browser
participant "Flask App" as Flask
participant "WeatherAPI" as API
participant "ForecastEngine" as Engine
database "SQLite DB" as DB

User -> Browser: Enter location & days
activate Browser

Browser -> Flask: POST /forecast
activate Flask

Flask -> DB: Create WeatherRequest
activate DB
DB --> Flask: request_id
deactivate DB

Flask --> Browser: Redirect to /loading
deactivate Flask

Browser -> Flask: POST /process/{id}
activate Flask

Flask -> Engine: generate_forecast(query, days)
activate Engine

Engine -> API: GET /current.json
activate API
API --> Engine: current weather data
deactivate API

Engine -> API: GET /forecast.json
activate API
API --> Engine: forecast data
deactivate API

Engine -> API: GET /history.json (x7)
activate API
API --> Engine: historical data
deactivate API

Engine -> Engine: analyze_history()
Engine -> Engine: apply_trend_adjustments()

Engine --> Flask: forecast_result
deactivate Engine

Flask -> DB: Save ForecastResult
activate DB
DB --> Flask: result_id
deactivate DB

Flask -> DB: Update request status
activate DB
DB --> Flask: OK
deactivate DB

Flask --> Browser: JSON {redirect: /forecast/{id}}
deactivate Flask

Browser -> Flask: GET /forecast/{id}
activate Flask

Flask -> DB: Get ForecastResult
activate DB
DB --> Flask: result data
deactivate DB

Flask --> Browser: Render forecast.html
deactivate Flask

Browser --> User: Display forecast
deactivate Browser

@enduml
"""
    output_path = DIAGRAMS_DIR / '03_sequence_diagram.puml'
    with open(output_path, 'w') as f:
        f.write(plantuml)
    print(f"✓ Sequence Diagram (PlantUML) saved to {output_path}")
    return str(output_path)


def create_activity_diagram():
    """
    4️⃣ Activity Diagram
    Forecast flow: Start → Input → Validate → Fetch Data → Forecast → Store → Display → End
    """
    if not GRAPHVIZ_AVAILABLE:
        return create_activity_plantuml()
    
    dot = Digraph('ActivityDiagram', comment='Galaxy Weather Activity Diagram')
    dot.attr(rankdir='TB', bgcolor='white')
    
    # Start node
    dot.node('start', '', shape='circle', style='filled', fillcolor='black', width='0.3')
    
    # Activity nodes
    dot.attr('node', shape='box', style='rounded,filled', fillcolor='lightblue')
    dot.node('a1', 'User Enters Location\nor Uploads JSON')
    dot.node('a2', 'Validate Input')
    dot.node('a3', 'Fetch Current Weather')
    dot.node('a4', 'Fetch Historical Data')
    dot.node('a5', 'Analyze Trends')
    dot.node('a6', 'Generate Forecast')
    dot.node('a7', 'Store Results in DB')
    dot.node('a8', 'Display Forecast')
    
    # Decision node
    dot.node('d1', 'Valid?', shape='diamond', style='filled', fillcolor='lightyellow')
    
    # Error handling
    dot.node('err', 'Show Error Message', style='rounded,filled', fillcolor='lightcoral')
    
    # End node
    dot.node('end', '', shape='doublecircle', style='filled', fillcolor='black', width='0.3')
    
    # Edges
    dot.edge('start', 'a1')
    dot.edge('a1', 'a2')
    dot.edge('a2', 'd1')
    dot.edge('d1', 'a3', label='Yes')
    dot.edge('d1', 'err', label='No')
    dot.edge('err', 'a1')
    dot.edge('a3', 'a4')
    dot.edge('a4', 'a5')
    dot.edge('a5', 'a6')
    dot.edge('a6', 'a7')
    dot.edge('a7', 'a8')
    dot.edge('a8', 'end')
    
    output_path = DIAGRAMS_DIR / '04_activity_diagram'
    dot.render(output_path, format='png', cleanup=True)
    print(f"✓ Activity Diagram saved to {output_path}.png")
    return str(output_path) + '.png'


def create_activity_plantuml():
    """Create PlantUML text for Activity diagram."""
    plantuml = """
@startuml ActivityDiagram
!theme plain

start

:User Enters Location
or Uploads JSON;

:Validate Input;

if (Valid?) then (yes)
    :Fetch Current Weather;
    :Fetch Historical Data;
    :Analyze Trends;
    :Generate Forecast;
    :Store Results in DB;
    :Display Forecast;
else (no)
    :Show Error Message;
    backward:User Enters Location
    or Uploads JSON;
endif

stop

@enduml
"""
    output_path = DIAGRAMS_DIR / '04_activity_diagram.puml'
    with open(output_path, 'w') as f:
        f.write(plantuml)
    print(f"✓ Activity Diagram (PlantUML) saved to {output_path}")
    return str(output_path)


def create_state_diagram():
    """
    5️⃣ State Diagram
    Forecast states: Created → Processing → Completed → Archived
    """
    if not GRAPHVIZ_AVAILABLE:
        return create_state_plantuml()
    
    dot = Digraph('StateDiagram', comment='Galaxy Weather State Diagram')
    dot.attr(rankdir='LR', bgcolor='white')
    
    # Start state
    dot.node('start', '', shape='point', width='0.2')
    
    # States
    dot.attr('node', shape='box', style='rounded,filled', fillcolor='lightgreen')
    dot.node('created', 'Created')
    dot.node('processing', 'Processing', fillcolor='lightyellow')
    dot.node('completed', 'Completed', fillcolor='lightblue')
    dot.node('failed', 'Failed', fillcolor='lightcoral')
    dot.node('archived', 'Archived', fillcolor='lightgray')
    
    # End state
    dot.node('end', '', shape='doublecircle', width='0.2', style='filled', fillcolor='black')
    
    # Transitions
    dot.edge('start', 'created', label='Request submitted')
    dot.edge('created', 'processing', label='Start processing')
    dot.edge('processing', 'completed', label='Success')
    dot.edge('processing', 'failed', label='Error')
    dot.edge('completed', 'archived', label='After 30 days')
    dot.edge('failed', 'created', label='Retry')
    dot.edge('archived', 'end', label='Cleanup')
    
    output_path = DIAGRAMS_DIR / '05_state_diagram'
    dot.render(output_path, format='png', cleanup=True)
    print(f"✓ State Diagram saved to {output_path}.png")
    return str(output_path) + '.png'


def create_state_plantuml():
    """Create PlantUML text for State diagram."""
    plantuml = """
@startuml StateDiagram
!theme plain

[*] --> Created : Request submitted

Created --> Processing : Start processing
Processing --> Completed : Success
Processing --> Failed : Error

Failed --> Created : Retry

Completed --> Archived : After 30 days

Archived --> [*] : Cleanup

state Created {
    [*] --> WaitingForProcess
}

state Processing {
    [*] --> FetchingData
    FetchingData --> AnalyzingTrends
    AnalyzingTrends --> GeneratingForecast
    GeneratingForecast --> SavingResults
    SavingResults --> [*]
}

state Completed {
    [*] --> DisplayingResults
}

@enduml
"""
    output_path = DIAGRAMS_DIR / '05_state_diagram.puml'
    with open(output_path, 'w') as f:
        f.write(plantuml)
    print(f"✓ State Diagram (PlantUML) saved to {output_path}")
    return str(output_path)


def create_component_diagram():
    """
    Bonus: Component Diagram showing system architecture
    """
    plantuml = """
@startuml ComponentDiagram
!theme plain

package "Galaxy Weather Application" {
    
    package "Frontend (Jinja2 Templates)" {
        [index.html] as Index
        [loading.html] as Loading
        [forecast.html] as Forecast
        [base.html] as Base
    }
    
    package "Static Assets" {
        [style.css] as CSS
        [galaxy.css] as GalaxyCSS
        [galaxy.js] as GalaxyJS
    }
    
    package "Backend (Flask)" {
        [app.py] as App
        [forecast.py] as ForecastModule
        [models.py] as Models
    }
    
    database "SQLite" as DB
    
    cloud "WeatherAPI" as API
}

Index --> Base
Loading --> Base
Forecast --> Base

Index --> CSS
Index --> GalaxyCSS
Index --> GalaxyJS

App --> ForecastModule
App --> Models
ForecastModule --> API
Models --> DB

@enduml
"""
    output_path = DIAGRAMS_DIR / '06_component_diagram.puml'
    with open(output_path, 'w') as f:
        f.write(plantuml)
    print(f"✓ Component Diagram (PlantUML) saved to {output_path}")
    return str(output_path)


def create_er_diagram():
    """
    Bonus: Entity-Relationship Diagram for database
    """
    plantuml = """
@startuml ERDiagram
!theme plain

entity "weather_request" as WR {
    * id : INTEGER <<PK>>
    --
    * query : TEXT
    * query_type : TEXT
    * range_days : INTEGER
    * created_at : TIMESTAMP
    * status : TEXT
}

entity "forecast_result" as FR {
    * id : INTEGER <<PK>>
    --
    * request_id : INTEGER <<FK>>
    location_name : TEXT
    country : TEXT
    latitude : REAL
    longitude : REAL
    forecast_data : TEXT
    current_temp : REAL
    current_humidity : REAL
    current_condition : TEXT
    * created_at : TIMESTAMP
}

entity "historical_cache" as HC {
    * id : INTEGER <<PK>>
    --
    * location_query : TEXT
    * date : TEXT
    avg_temp : REAL
    max_temp : REAL
    min_temp : REAL
    humidity : REAL
    condition : TEXT
    * cached_at : TIMESTAMP
}

WR ||--o{ FR : "has"

@enduml
"""
    output_path = DIAGRAMS_DIR / '07_er_diagram.puml'
    with open(output_path, 'w') as f:
        f.write(plantuml)
    print(f"✓ ER Diagram (PlantUML) saved to {output_path}")
    return str(output_path)


def generate_all_diagrams():
    """Generate all UML diagrams for the project."""
    print("\n" + "="*60)
    print("Galaxy Weather - UML Diagram Generator")
    print("="*60 + "\n")
    
    diagrams = []
    
    print("Generating diagrams...\n")
    
    # Generate all diagrams
    diagrams.append(create_use_case_diagram())
    diagrams.append(create_class_diagram())
    diagrams.append(create_sequence_diagram())
    diagrams.append(create_activity_diagram())
    diagrams.append(create_state_diagram())
    diagrams.append(create_component_diagram())
    diagrams.append(create_er_diagram())
    
    print("\n" + "="*60)
    print(f"All diagrams generated in: {DIAGRAMS_DIR}")
    print("="*60)
    
    if not GRAPHVIZ_AVAILABLE:
        print("\n📝 Note: PlantUML files (.puml) were generated.")
        print("   To render PNG/SVG images:")
        print("   1. Install Graphviz: pip install graphviz")
        print("   2. Or use online PlantUML server: https://www.plantuml.com/plantuml/")
        print("   3. Or install PlantUML extension in VS Code")
    
    return diagrams


if __name__ == '__main__':
    generate_all_diagrams()
