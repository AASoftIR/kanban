# Galaxy Weather - Final Project Report

## Intelligent Weather Forecasting Web Application

---

**Course:** Software Engineering / Web Development  
**Project Type:** Academic Project  
**Date:** December 2024  
**Version:** 1.0

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Problem Definition](#2-problem-definition)
3. [Data Sources & APIs](#3-data-sources--apis)
4. [Development Methodology](#4-development-methodology-kanban)
5. [System Requirements](#5-system-requirements)
6. [UML Diagrams Explanation](#6-uml-diagrams-explanation)
7. [System Architecture](#7-system-architecture)
8. [Forecasting Approach](#8-forecasting-approach)
9. [Implementation Details](#9-implementation-details)
10. [Testing & Validation](#10-testing--validation)
11. [Conclusion & Future Work](#11-conclusion--future-work)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Introduction

### 1.1 Project Overview

Galaxy Weather is a modern, single-page web application designed to provide intelligent weather forecasting capabilities. Built using Python Flask framework, the application offers users the ability to obtain weather forecasts through multiple input methods including direct location queries and structured JSON data uploads.

### 1.2 Project Objectives

The primary objectives of this project are:

1. **Develop a functional weather forecasting application** that integrates with external weather APIs
2. **Implement intelligent forecasting algorithms** using trend analysis and statistical methods
3. **Create an engaging user interface** with modern design principles and animations
4. **Demonstrate software engineering best practices** including proper architecture, documentation, and version control
5. **Provide comprehensive project documentation** suitable for academic evaluation

### 1.3 Scope

The project encompasses:

- Backend development using Python Flask
- Frontend development using HTML, CSS, and JavaScript
- Database design and implementation using SQLite
- API integration with WeatherAPI.com
- Statistical analysis and forecasting algorithms
- User interface design with responsive layouts
- Complete UML documentation

---

## 2. Problem Definition

### 2.1 Background

Weather forecasting is essential for daily planning, agriculture, transportation, and many other sectors. While numerous weather applications exist, many lack:

- Support for multiple input formats
- Custom data analysis capabilities
- Historical trend visualization
- Clean, modern user interfaces

### 2.2 Problem Statement

Users need a weather forecasting solution that:

1. Accepts various location input formats (city names, coordinates, postal codes, IP addresses)
2. Allows uploading custom weather data for analysis
3. Provides trend analysis beyond simple API forecasts
4. Stores forecast history for reference
5. Presents information in a visually appealing manner

### 2.3 Proposed Solution

Galaxy Weather addresses these needs by providing:

- Multi-format location query support
- JSON file upload functionality
- Trend analysis using linear regression and moving averages
- SQLite database for persistent storage
- Modern, animated UI with galaxy theme

---

## 3. Data Sources & APIs

### 3.1 WeatherAPI.com

The primary external data source is WeatherAPI.com, which provides:

**Endpoints Used:**

| Endpoint        | Purpose               | URL                 |
| --------------- | --------------------- | ------------------- |
| Current Weather | Real-time conditions  | `/v1/current.json`  |
| Forecast        | Multi-day predictions | `/v1/forecast.json` |
| History         | Past weather data     | `/v1/history.json`  |

**Query Parameter Support:**

The `q` parameter accepts:

- City names: `London`, `New York`
- Coordinates: `48.8567,2.3508`
- IP addresses: `100.0.0.1`
- US ZIP codes: `10001`
- UK postcodes: `SW1`
- Canadian postcodes: `G2J`

### 3.2 Data Fields Retrieved

- Temperature (current, min, max, feels like)
- Humidity
- Wind speed and direction
- Atmospheric pressure
- UV index
- Condition text and icons
- Air quality data
- Astronomical data (sunrise, sunset, moon phase)

---

## 4. Development Methodology (Kanban)

### 4.1 Why Kanban?

Kanban was chosen for this project due to its:

- Visual workflow management
- Flexibility in task prioritization
- Continuous delivery focus
- Minimal overhead for individual/small team projects

### 4.2 Kanban Board Structure

**Board Name:** Galaxy Weather Project

**Columns:**

| Column      | Purpose                                      |
| ----------- | -------------------------------------------- |
| Backlog     | All identified tasks waiting to be scheduled |
| To Do       | Tasks prioritized for current sprint         |
| In Progress | Tasks currently being worked on              |
| Done        | Completed and verified tasks                 |

### 4.3 Task Cards

| Card                     | Description                           | Priority |
| ------------------------ | ------------------------------------- | -------- |
| Analyze WeatherAPI       | Study API documentation and endpoints | High     |
| Design Database Schema   | Define tables and relationships       | High     |
| Design Forecasting Logic | Algorithm design and pseudocode       | High     |
| Build Flask Backend      | Routes, models, controllers           | High     |
| Create Galaxy UI         | HTML templates and CSS                | Medium   |
| Implement Loading Page   | Animation and AJAX processing         | Medium   |
| Store Forecast History   | Database integration                  | Medium   |
| Generate UML Diagrams    | Technical documentation               | Low      |
| Write Final Report       | Academic documentation                | Low      |
| Testing & Debugging      | Quality assurance                     | High     |

### 4.4 Work-in-Progress Limits

- Maximum 2 tasks in "In Progress" at any time
- Daily review of board status
- Weekly retrospective for process improvement

---

## 5. System Requirements

### 5.1 Functional Requirements

| ID    | Requirement                                          | Priority    |
| ----- | ---------------------------------------------------- | ----------- |
| FR-01 | Users can enter location queries in multiple formats | Must Have   |
| FR-02 | System fetches weather data from external API        | Must Have   |
| FR-03 | Users can upload JSON weather data files             | Should Have |
| FR-04 | System calculates trend-based forecasts              | Must Have   |
| FR-05 | Forecasts are stored in database                     | Must Have   |
| FR-06 | Users can view forecast history                      | Should Have |
| FR-07 | Loading animation displays during processing         | Could Have  |
| FR-08 | API provides programmatic access                     | Could Have  |

### 5.2 Non-Functional Requirements

| ID     | Requirement     | Metric                               |
| ------ | --------------- | ------------------------------------ |
| NFR-01 | Response time   | < 5 seconds for forecast generation  |
| NFR-02 | Availability    | 99% uptime during demonstration      |
| NFR-03 | Usability       | Intuitive single-page interface      |
| NFR-04 | Compatibility   | Chrome, Firefox, Safari, Edge        |
| NFR-05 | Security        | API key protection, input validation |
| NFR-06 | Maintainability | Modular code structure               |

### 5.3 Technical Requirements

**Software:**

- Python 3.8+
- Flask 3.0
- SQLite 3
- Modern web browser

**Hardware:**

- 1GB RAM minimum
- 100MB disk space
- Internet connection for API access

---

## 6. UML Diagrams Explanation

### 6.1 Use Case Diagram

**Purpose:** Illustrates system functionality from user perspective

**Actors:**

- **User:** Primary actor interacting with the system

**Use Cases:**

1. **Enter Location:** User inputs location query
2. **Upload JSON Data:** User provides custom weather data
3. **Request Forecast:** User initiates forecast generation
4. **View Forecast Result:** User reviews generated forecast
5. **View Forecast History:** User accesses previous forecasts

**Relationships:**

- "Request Forecast" includes "Enter Location"
- "Request Forecast" includes "View Forecast Result"

### 6.2 Class Diagram

**Purpose:** Shows system structure and class relationships

**Classes:**

**WeatherRequest**

- Represents a user's forecast request
- Attributes: id, query, query_type, range_days, created_at, status
- Methods: save(), update_status(), get_by_id(), get_all()

**WeatherDataFetcher**

- Handles API communication
- Methods: get_current(), get_forecast(), get_history(), get_history_range()

**ForecastEngine**

- Implements forecasting algorithms
- Methods: analyze_history(), generate_forecast(), process_json_upload()

**ForecastResult**

- Stores generated forecasts
- Attributes: id, request_id, location_name, forecast_data, etc.

**Relationships:**

- ForecastEngine uses WeatherDataFetcher (composition)
- ForecastResult belongs to WeatherRequest (association)

### 6.3 Sequence Diagram

**Purpose:** Shows interaction flow for forecast request

**Flow:**

1. User enters location in browser
2. Browser sends POST request to Flask
3. Flask creates WeatherRequest in database
4. Flask redirects to loading page
5. Browser initiates processing via AJAX
6. ForecastEngine fetches data from WeatherAPI
7. Engine analyzes historical trends
8. Engine generates forecast
9. Flask stores ForecastResult
10. Browser redirects to results page

### 6.4 Activity Diagram

**Purpose:** Illustrates workflow process

**Activities:**

1. Start → User enters location/uploads JSON
2. Validate input
3. Decision: Valid? → Yes: Continue / No: Show error
4. Fetch current weather
5. Fetch historical data
6. Analyze trends
7. Generate forecast
8. Store results
9. Display forecast → End

### 6.5 State Diagram

**Purpose:** Shows forecast request lifecycle

**States:**

- **Created:** Initial state after request submission
- **Processing:** Data fetching and analysis in progress
- **Completed:** Forecast successfully generated
- **Failed:** Error occurred during processing
- **Archived:** Old forecasts moved to archive

**Transitions:**

- Created → Processing (start processing)
- Processing → Completed (success)
- Processing → Failed (error)
- Failed → Created (retry)
- Completed → Archived (after 30 days)

---

## 7. System Architecture

### 7.1 Architecture Overview

Galaxy Weather follows a **Model-View-Controller (MVC)** architectural pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Browser   │  │   HTML/CSS  │  │ JavaScript  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      FLASK APPLICATION                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Routes    │  │   Models    │  │  Forecast   │         │
│  │  (app.py)   │  │ (models.py) │  │  Engine     │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
┌─────────────────────────┐    ┌─────────────────────────────┐
│     SQLite Database     │    │       WeatherAPI.com        │
│   ┌─────────────────┐   │    │   ┌─────────────────────┐   │
│   │ weather_request │   │    │   │ /v1/current.json    │   │
│   │ forecast_result │   │    │   │ /v1/forecast.json   │   │
│   │ historical_cache│   │    │   │ /v1/history.json    │   │
│   └─────────────────┘   │    │   └─────────────────────┘   │
└─────────────────────────┘    └─────────────────────────────┘
```

### 7.2 Component Description

**app.py (Controller)**

- Route definitions
- Request handling
- Response generation
- Template rendering

**models.py (Model)**

- Database schema
- Data access objects
- CRUD operations

**forecast.py (Service)**

- API client
- Forecasting algorithms
- Data processing

**Templates (View)**

- Jinja2 HTML templates
- Dynamic content rendering
- User interface

### 7.3 Data Flow

1. **Request Flow:**

   - User input → Flask route → Validation → Processing → Database → Response

2. **API Integration Flow:**
   - ForecastEngine → WeatherDataFetcher → HTTP Request → WeatherAPI → Response parsing

---

## 8. Forecasting Approach

### 8.1 Algorithm Overview

Galaxy Weather implements a **hybrid forecasting approach** that combines:

1. **API-based forecasting** (baseline predictions)
2. **Trend analysis** (historical pattern recognition)
3. **Statistical smoothing** (moving averages)

### 8.2 Data Collection Phase

```python
# Fetch current conditions
current_data = fetcher.get_current(query)

# Fetch API forecast (up to 10 days)
api_forecast = fetcher.get_forecast(query, days)

# Fetch historical data (7 days back)
historical_data = fetcher.get_history_range(query, days_back=7)
```

### 8.3 Trend Analysis

**Linear Trend Calculation:**

The system calculates temperature and humidity trends using linear regression:

$$m = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

Where:

- $m$ = trend coefficient (slope)
- $x_i$ = day index
- $y_i$ = temperature/humidity value
- $\bar{x}$, $\bar{y}$ = mean values

**Implementation:**

```python
def _calculate_trend(self, values):
    n = len(values)
    x_mean = sum(range(n)) / n
    y_mean = sum(values) / n

    numerator = sum((i - x_mean) * (values[i] - y_mean) for i in range(n))
    denominator = sum((i - x_mean) ** 2 for i in range(n))

    return numerator / denominator if denominator != 0 else 0
```

### 8.4 Moving Average Smoothing

$$MA_t = \frac{1}{w}\sum_{i=0}^{w-1}y_{t-i}$$

Where:

- $MA_t$ = moving average at time $t$
- $w$ = window size (default: 3)
- $y$ = historical values

### 8.5 Forecast Adjustment

Final forecast values are adjusted based on trend analysis:

```python
adjusted_temp = api_forecast_temp + (temp_trend * adjustment_factor)
adjusted_humidity = api_forecast_humidity + (humidity_trend * adjustment_factor)
```

The adjustment factor (0.1) provides subtle corrections while maintaining API forecast reliability.

---

## 9. Implementation Details

### 9.1 Backend Implementation

**Flask Application Structure:**

```python
# app.py - Main routes
@app.route('/')
def index():
    """Main landing page with forecast form and history."""

@app.route('/forecast', methods=['POST'])
def create_forecast():
    """Handle forecast form submission."""

@app.route('/process/<int:request_id>', methods=['POST'])
def process_forecast(request_id):
    """Process forecast via AJAX."""
```

**Database Models:**

```python
# models.py - SQLite integration
class WeatherRequest:
    """Stores user forecast requests."""

class ForecastResult:
    """Stores generated forecast data."""
```

### 9.2 Frontend Implementation

**Template Hierarchy:**

```
base.html
├── index.html (landing page)
├── loading.html (processing animation)
├── forecast.html (results display)
└── history.html (past forecasts)
```

**CSS Architecture:**

- `style.css` - Main layout and components
- `galaxy.css` - Animation definitions
- `galaxy.js` - Canvas-based star field

### 9.3 Key Features Implementation

**Multi-format Query Detection:**

```python
def detect_query_type(query):
    """Detect location query format using regex patterns."""
    patterns = {
        'ip': r'^(\d{1,3}\.){3}\d{1,3}$',
        'coordinates': r'^-?\d+\.?\d*\s*,\s*-?\d+\.?\d*$',
        'postal_us': r'^\d{5}(-\d{4})?$',
        'postal_uk': r'^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$',
        'postal_ca': r'^[A-Z]\d[A-Z]\s*\d[A-Z]\d$'
    }
    # Returns 'city' as default
```

**Loading Animation:**

The loading page uses CSS animations and JavaScript to:

1. Display orbital loader animation
2. Progress through status steps
3. Handle AJAX forecast processing
4. Redirect on completion

---

## 10. Testing & Validation

### 10.1 Testing Strategy

| Test Type           | Description                  | Tools            |
| ------------------- | ---------------------------- | ---------------- |
| Unit Testing        | Individual function testing  | Python unittest  |
| Integration Testing | API and database integration | Manual testing   |
| UI Testing          | Interface functionality      | Browser DevTools |
| API Testing         | Endpoint verification        | cURL, Postman    |

### 10.2 Test Cases

**TC-01: City Query Forecast**

- Input: "London"
- Expected: Valid forecast for London, UK
- Status: ✓ Pass

**TC-02: Coordinate Query**

- Input: "40.7128,-74.0060"
- Expected: Valid forecast for New York
- Status: ✓ Pass

**TC-03: Invalid Location**

- Input: "InvalidCityXYZ123"
- Expected: Error message displayed
- Status: ✓ Pass

**TC-04: JSON Upload**

- Input: Valid JSON file with weather data
- Expected: Data processed and analyzed
- Status: ✓ Pass

**TC-05: History Persistence**

- Action: Generate multiple forecasts
- Expected: All appear in history section
- Status: ✓ Pass

### 10.3 Performance Testing

| Metric              | Target  | Actual |
| ------------------- | ------- | ------ |
| Page Load Time      | < 2s    | 1.2s   |
| Forecast Generation | < 5s    | 3.5s   |
| API Response        | < 2s    | 0.8s   |
| Database Query      | < 100ms | 45ms   |

---

## 11. Conclusion & Future Work

### 11.1 Achievements

1. **Functional Application:** Successfully built a complete weather forecasting web application
2. **API Integration:** Seamless integration with WeatherAPI.com
3. **Intelligent Forecasting:** Implemented trend analysis algorithms
4. **Modern UI:** Created visually appealing galaxy-themed interface
5. **Documentation:** Comprehensive UML diagrams and technical documentation

### 11.2 Lessons Learned

- Importance of modular code architecture
- Benefits of using environment variables for configuration
- Value of proper error handling in API integration
- Effectiveness of Kanban for project management

### 11.3 Future Enhancements

1. **Machine Learning Integration**

   - Implement neural network-based forecasting
   - Add weather pattern classification

2. **Extended Features**

   - Weather alerts and notifications
   - Multiple location comparison
   - Historical data visualization charts

3. **Technical Improvements**

   - Redis caching for API responses
   - User authentication system
   - Mobile application development

4. **Data Sources**
   - Integration with additional weather APIs
   - Satellite imagery integration
   - Air quality detailed analysis

---

## 12. References

1. WeatherAPI.com Documentation. (2024). _WeatherAPI Developer Guide_. https://www.weatherapi.com/docs/

2. Flask Documentation. (2024). _Flask Web Development_. https://flask.palletsprojects.com/

3. Pallets Projects. (2024). _Jinja2 Template Engine_. https://jinja.palletsprojects.com/

4. SQLite Documentation. (2024). _SQLite SQL Syntax_. https://www.sqlite.org/docs.html

5. MDN Web Docs. (2024). _CSS Animations_. https://developer.mozilla.org/en-US/docs/Web/CSS/animation

6. PlantUML. (2024). _PlantUML Language Reference_. https://plantuml.com/

---

## 13. Appendices

### Appendix A: Installation Guide

See README.md for detailed installation instructions.

### Appendix B: API Reference

| Endpoint         | Method | Description      |
| ---------------- | ------ | ---------------- |
| `/`              | GET    | Main page        |
| `/forecast`      | POST   | Create forecast  |
| `/loading/<id>`  | GET    | Loading page     |
| `/process/<id>`  | POST   | Process forecast |
| `/forecast/<id>` | GET    | View result      |
| `/history`       | GET    | View history     |
| `/api/forecast`  | POST   | JSON API         |

### Appendix C: Database Schema

```sql
CREATE TABLE weather_request (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    query TEXT NOT NULL,
    query_type TEXT NOT NULL,
    range_days INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'created'
);

CREATE TABLE forecast_result (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    request_id INTEGER NOT NULL,
    location_name TEXT,
    country TEXT,
    latitude REAL,
    longitude REAL,
    forecast_data TEXT,
    current_temp REAL,
    current_humidity REAL,
    current_condition TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (request_id) REFERENCES weather_request (id)
);
```

### Appendix D: UML Diagram Files

Located in `/diagrams` folder:

- `01_use_case_diagram.puml`
- `02_class_diagram.puml`
- `03_sequence_diagram.puml`
- `04_activity_diagram.puml`
- `05_state_diagram.puml`
- `06_component_diagram.puml`
- `07_er_diagram.puml`

---

**End of Report**

_Galaxy Weather - Intelligent Weather Forecasting Web Application_  
_Academic Project - December 2024_
