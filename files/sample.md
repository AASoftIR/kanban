<!-- Slide number: 1 -->

![https://kimi-web-img.moonshot.cn/img/img.freepik.com/738a12df7f18a46cb015448ad420d1efaeec3366.jpg](Image0.jpg)

Galaxy Weather

Intelligent Weather Forecasting Web Application
Institution: Kish International Campus of Sharif University
Team Members:

Asal Hadian (عسل هادیان)
Course: Software Engineering

Sadaf Bagherian (صدف باقریان)
Date: 2026

### Notes:

<!-- Slide number: 2 -->

Mission Overview

Navigate through our software engineering journey

01

02

03

Project Introduction
Requirements Analysis
System Architecture
Objectives & scope
Functional & non-functional specs
Technical blueprint & patterns

04

05

06

UI/UX Design
Implementation
Testing & QA
User interface & experience
Code structure & logic
Quality assurance strategy

07

08

09

Project Timeline
Team Structure
Future Work
Schedule & milestones
Members & roles
Conclusions & next steps

### Notes:

<!-- Slide number: 3 -->

![https://kimi-web-img.moonshot.cn/img/images.rawpixel.com/45a73d8ae543ab757f4ecf9cc38e4dd518a37a2d.jpg](Image0.jpg)

01

Project Introduction

Defining the Galaxy Weather mission and core objectives

### Notes:

<!-- Slide number: 4 -->

Project Overview: Galaxy Weather

Mission Statement

Galaxy Weather is an intelligent web application designed to deliver accurate, real-time weather forecasting through a modern, intuitive interface. Our mission is to make weather data accessible, understandable, and visually engaging for users worldwide.
Real-Time Data
Live weather updates from multiple trusted sources

Target Users

General public seeking reliable weather information

Travelers planning trips and outdoor activities

Businesses requiring weather data for operations

Global Coverage
Students and researchers in meteorology

Weather information for any location worldwide

Core Value Propositions

Real-time, hyper-local weather data accuracy

Responsive design for all devices

Smart Alerts
Intuitive user experience with space-themed aesthetics

Intelligent notifications for weather changes
Advanced forecasting with 5-day predictions

### Notes:

<!-- Slide number: 5 -->

Core Features & Functionality

A comprehensive weather platform with advanced capabilities

Real-Time Weather Data
5-Day Weather Forecast

Integration with multiple weather APIs to provide current conditions including temperature, humidity, wind speed, pressure, and visibility. Data refreshes every 15 minutes.
Extended forecast with hourly breakdowns for the first 48 hours, including precipitation probability, UV index, and feels-like temperature calculations.
Hourly & daily predictions

15-minute refresh intervals

Location-Based Search
Interactive Weather Maps

Search weather by city name, ZIP code, or coordinates. Support for auto-detection of user location with GPS permission and saved favorite locations.
Dynamic radar maps showing precipitation, temperature, and wind patterns. Layer toggles for different weather phenomena and animation controls.
Global location coverage
Multiple weather layers

Smart Weather Alerts
Responsive Design

Customizable notifications for severe weather conditions, temperature thresholds, and precipitation alerts. Email and push notification support.
Optimized for all screen sizes from mobile phones to desktop computers.
Severe weather warnings
Cross-device compatibility

### Notes:

<!-- Slide number: 6 -->

![https://kimi-web-img.moonshot.cn/img/img.freepik.com/91cd591d6304863335c034659e3f0bbc3a20d210.jpg](Image0.jpg)

Requirements Analysis
02

Systematic analysis of functional and non-functional requirements

### Notes:

<!-- Slide number: 7 -->

Functional Requirements

Core system functionalities and specifications

| ID | Requirement | Description | Priority | Status |
| --- | --- | --- | --- | --- |
| FR-001 | User Authentication | Secure user registration, login, password reset, and profile management | High | Complete |
| FR-002 | Weather Data Retrieval | Fetch current weather conditions from external APIs with 15-minute refresh | High | Complete |
| FR-003 | Location Services | GPS auto-detection, city/ZIP code search, and favorite locations | High | In Progress |
| FR-004 | Forecast Display | 5-day forecast with hourly breakdowns and detailed weather metrics | High | Complete |
| FR-005 | Alert Notifications | Customizable weather alerts via email and push notifications | Medium | Planned |
| FR-006 | Search Functionality | Search by city name, ZIP code, coordinates with auto-complete | High | Complete |
| FR-007 | Responsive UI | Mobile-first design with cross-browser compatibility | High | Complete |

### Notes:

<!-- Slide number: 8 -->

Non-Functional Requirements

Quality attributes and system constraints

Performance
Reliability
Response time < 2 seconds
99.9% system uptime

Page load time < 3 seconds
Automatic failover mechanisms

API calls < 500ms latency
Daily data backups

Support 1000+ concurrent users
Graceful error handling

Scalability
Security
Horizontal scaling support
HTTPS encryption (TLS 1.3)

Load balancing capabilities
JWT token authentication

Microservices architecture
Password hashing (bcrypt)

Cloud deployment ready
SQL injection prevention

Usability
Maintainability
WCAG 2.1 AA compliance
Modular architecture

Multi-language support
Comprehensive code documentation

Mobile-first responsive design
Automated testing coverage >80%

Intuitive navigation
CI/CD pipeline integration

### Notes:

<!-- Slide number: 9 -->

![https://kimi-web-img.moonshot.cn/img/images.techeblog.com/daddc37dace84ab3ebe99e60c1fd05910bfca3b3.jpg](Image0.jpg)

03

System Architecture

Technical blueprint of the Galaxy Weather platform

3-Tier Architecture
Design Patterns
API Integration

### Notes:

<!-- Slide number: 10 -->

Architecture Overview

Three-tier architecture with modern web technologies

System Tiers & Components

Frontend Layer
Backend Layer
Data Layer
React.js with responsive UI components
Node.js/Express RESTful API
MongoDB with weather data caching
React.js
Tailwind CSS
PWA
Node.js
Express
JWT Auth
MongoDB
Redis Cache
Weather APIs

Data Flow & Communication

![https://kimi-web-img.moonshot.cn/img/img.freepik.com/9c6875f4267abe53a2239970529a1adae1068b8a.jpg](Image0.jpg)
1

User Request
User interacts with UI, triggers API request
2

API Processing
Backend validates request, fetches data
3

Data Aggregation
Combines database & external API data
4

Response Delivery
JSON response rendered in UI

### Notes:

<!-- Slide number: 11 -->

Design Patterns & Best Practices

Software engineering patterns for robust architecture

MVC Pattern
Observer Pattern
Model-View-Controller architecture separates data, UI, and control logic for maintainability.
Enables real-time updates by notifying components of data changes.
Weather data subscribers

Model: Weather data & business logic
Alert notification system

View: React UI components
UI state synchronization

Controller: API endpoints & routing

Best Practices

Singleton Pattern
RESTful API Design: Standard HTTP methods and status codes.

Ensures only one instance of critical resources exists, like database connections.
Dependency Injection: Loose coupling for testability.

Async/Await: Non-blocking I/O for performance.
Database connection manager

Logger instance
Error Handling: Centralized middleware for consistency.

Configuration manager

Code Quality Standards

Factory Pattern
ESLint & Prettier: Enforcing consistent code style.

Creates API service instances without specifying their exact classes.
Jest Testing: Unit and integration tests.

Git Workflow: Feature branch workflow with PRs.
Weather service factory

Notification service factory

### Notes:

<!-- Slide number: 12 -->

![https://kimi-web-img.moonshot.cn/img/c02.purpledshub.com/8c75478147b62d16d336592eb5b197000c4d0ceb.jpg](Image0.jpg)

Thank You

Questions & Discussion

Project Team
Institution

Asal Hadian (عسل هادیان)
Kish International Campus
Sadaf Bagherian (صدف باقریان)
Sharif University

Course
Contact

Software Engineering
Ready for collaboration
2024
and future opportunities

### Notes: