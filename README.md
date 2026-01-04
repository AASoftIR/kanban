# 🌌 Galaxy Weather

**Intelligent Weather Forecasting Web Application**

A modern, single-page Flask web application that provides weather forecasts using either uploaded JSON data or live data from WeatherAPI. Features a stunning galaxy-themed dark UI with animated backgrounds.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📊 Live Presentation

**[View Project Presentation](https://aasoftir.github.io/kanban/)** - Interactive slides with full documentation, UML diagrams, and project journey.

---

## ✨ Features

- **Multi-Format Location Input**: Support for city names, coordinates (lat,lon), IP addresses, and postal codes (US, UK, CA)
- **Smart Forecasting**: Combines API data with trend analysis using moving averages and linear regression
- **JSON Upload**: Upload your own weather data for custom analysis
- **Forecast History**: All forecasts are saved and accessible anytime
- **Beautiful UI**: Vercel-inspired dark design with animated galaxy background
- **Responsive Design**: Works seamlessly on desktop and mobile devices

---

## 🛠️ Technical Stack

### Backend

- Python 3.8+
- Flask 3.0
- SQLite3
- Requests
- python-dotenv

### Frontend

- HTML5 (Jinja2 templates)
- CSS3 (Custom styling)
- JavaScript (Canvas animations)

### External API

- [WeatherAPI.com](https://www.weatherapi.com/)

---

## 📐 UML Diagrams

The project includes 7 comprehensive UML diagrams:

1. **Use Case Diagram** - System functionality from user perspective
2. **Class Diagram** - System structure and class relationships
3. **Sequence Diagram** - Interaction flow for forecast requests
4. **Activity Diagram** - Workflow process for forecast generation
5. **State Diagram** - Forecast request lifecycle states
6. **Component Diagram** - System components and interactions
7. **ER Diagram** - Database entity relationships

All diagrams are available in the `/diagrams` folder as PlantUML source files and SVG exports in `/files`.

---

## 📁 Project Structure

```
galaxy_weather/
│
├── app.py              # Main Flask application
├── forecast.py         # Forecasting engine & API client
├── models.py           # Database models
├── database.db         # SQLite database (auto-created)
├── .env                # Environment variables
├── requirements.txt    # Python dependencies
├── uml_generator.py    # UML diagram generator
│
├── templates/
│   ├── base.html       # Base template
│   ├── index.html      # Main landing page
│   ├── loading.html    # Loading animation page
│   ├── forecast.html   # Forecast results page
│   └── history.html    # Forecast history page
│
├── static/
│   ├── style.css       # Main stylesheet
│   ├── galaxy.css      # Galaxy animations
│   └── galaxy.js       # Canvas star field
│
├── diagrams/           # UML diagrams (PlantUML)
│   ├── 01_use_case_diagram.puml
│   ├── 02_class_diagram.puml
│   ├── 03_sequence_diagram.puml
│   ├── 04_activity_diagram.puml
│   ├── 05_state_diagram.puml
│   ├── 06_component_diagram.puml
│   └── 07_er_diagram.puml
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- WeatherAPI key (free at [weatherapi.com](https://www.weatherapi.com/))

### Installation

1. **Clone or download the project**

   ```bash
   cd galaxy_weather
   ```

2. **Create a virtual environment (recommended)**

   ```bash
   python -m venv venv

   # Windows
   venv\Scripts\activate

   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**

   Edit the `.env` file and add your WeatherAPI key:

   ```env
   WEATHERAPI_KEY=your_actual_api_key_here
   SECRET_KEY=your_secret_key_here
   ```

5. **Run the application**

   ```bash
   python app.py
   ```

6. **Open in browser**
   ```
   http://localhost:5000
   ```

---

## 📖 Usage Guide

### Getting a Forecast

1. **Enter Location**: Type a city name, coordinates, IP address, or postal code
2. **Select Days**: Use the slider to choose forecast range (1-10 days)
3. **Submit**: Click "Generate Forecast" button
4. **View Results**: See current conditions, trend analysis, and daily forecasts

### Supported Query Formats

| Format          | Example                       |
| --------------- | ----------------------------- |
| City name       | `London`, `New York`, `Tokyo` |
| Coordinates     | `40.7128,-74.0060`            |
| IP Address      | `8.8.8.8`                     |
| US Postal       | `10001`                       |
| UK Postal       | `SW1A 1AA`                    |
| Canadian Postal | `M5V 3L9`                     |

### Uploading JSON Data

You can upload custom weather data in JSON format:

```json
[
	{ "temperature": 22.5, "humidity": 65, "date": "2024-01-01" },
	{ "temperature": 23.1, "humidity": 60, "date": "2024-01-02" },
	{ "temperature": 21.8, "humidity": 70, "date": "2024-01-03" }
]
```

---

## 📊 Forecasting Algorithm

Galaxy Weather uses a hybrid approach combining API data with statistical analysis:

### 1. Data Collection

- Fetches current weather from WeatherAPI
- Retrieves 7 days of historical data
- Obtains API-provided forecast

### 2. Trend Analysis

- **Linear Regression**: Calculates temperature and humidity trends
- **Moving Average**: Smooths data to identify patterns
- **Pattern Recognition**: Identifies common weather conditions

### 3. Forecast Adjustment

- API forecast serves as baseline
- Trend coefficients adjust predictions
- Historical patterns inform confidence levels

---

## 🗄️ Database Schema

### weather_request

| Column     | Type      | Description                             |
| ---------- | --------- | --------------------------------------- |
| id         | INTEGER   | Primary key                             |
| query      | TEXT      | Location query                          |
| query_type | TEXT      | Type of query (city, coordinates, etc.) |
| range_days | INTEGER   | Forecast days requested                 |
| created_at | TIMESTAMP | Request timestamp                       |
| status     | TEXT      | created/processing/completed/failed     |

### forecast_result

| Column            | Type    | Description                    |
| ----------------- | ------- | ------------------------------ |
| id                | INTEGER | Primary key                    |
| request_id        | INTEGER | Foreign key to weather_request |
| location_name     | TEXT    | Resolved location name         |
| country           | TEXT    | Country name                   |
| latitude          | REAL    | Latitude                       |
| longitude         | REAL    | Longitude                      |
| forecast_data     | TEXT    | JSON forecast data             |
| current_temp      | REAL    | Current temperature            |
| current_humidity  | REAL    | Current humidity               |
| current_condition | TEXT    | Weather condition text         |

---

## 📐 UML Diagrams

The project includes comprehensive UML documentation in the `/diagrams` folder:

1. **Use Case Diagram** - System actors and use cases
2. **Class Diagram** - System class structure
3. **Sequence Diagram** - Forecast request flow
4. **Activity Diagram** - Process workflow
5. **State Diagram** - Forecast request states
6. **Component Diagram** - System architecture
7. **ER Diagram** - Database structure

### Generating Diagrams

```bash
python uml_generator.py
```

To render PlantUML files:

- Use [PlantUML Online Server](https://www.plantuml.com/plantuml/)
- Install PlantUML VS Code extension
- Use command line: `java -jar plantuml.jar diagram.puml`

---

## 🎨 UI Features

### Galaxy Background

- Canvas-based animated star field
- Parallax effect on mouse movement
- Shooting stars animation
- Nebula effects

### Design System

- Dark theme (#0b1020, #111827)
- Purple accent (#8b5cf6)
- Cyan highlights (#06b6d4)
- Soft glow effects
- Inter font family

---

## 🔧 API Reference

### REST Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/`              | Main landing page       |
| POST   | `/forecast`      | Create forecast request |
| GET    | `/loading/<id>`  | Loading page            |
| POST   | `/process/<id>`  | Process forecast (AJAX) |
| GET    | `/forecast/<id>` | View forecast result    |
| GET    | `/history`       | Forecast history        |
| POST   | `/api/forecast`  | JSON API endpoint       |
| POST   | `/upload-json`   | Upload JSON file        |

### API Example

```bash
curl -X POST http://localhost:5000/api/forecast \
  -H "Content-Type: application/json" \
  -d '{"location": "London", "days": 7}'
```

---

## 🧪 Testing

```bash
# Run the application in debug mode
python app.py

# Test with sample requests
curl http://localhost:5000/api/forecast -X POST \
  -H "Content-Type: application/json" \
  -d '{"location": "Paris", "days": 5}'
```

---

## 📋 Requirements

```
Flask==3.0.0
requests==2.31.0
python-dotenv==1.0.0
graphviz==0.20.1
plantuml==0.3.0
numpy==1.26.2
```

---

## 🔐 Environment Variables

| Variable       | Description                    | Required |
| -------------- | ------------------------------ | -------- |
| WEATHERAPI_KEY | WeatherAPI.com API key         | Yes      |
| SECRET_KEY     | Flask secret key               | Yes      |
| DATABASE_URL   | Database URL (default: SQLite) | No       |

---

## 📄 License

This project is created for academic purposes.

---

## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for weather data
- [Inter Font](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- Inspired by Vercel's design system

---

## 👥 Contact

Galaxy Weather - Academic Project 2024

📧 contact@galaxyweather.app
🌐 www.galaxyweather.app

---

**Made with ❤️ for learning and academic excellence**
