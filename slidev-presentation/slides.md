---
theme: seriph
background: /images/galaxy-bg.svg
title: Galaxy Weather - Intelligent Weather Forecasting
info: |
  ## Galaxy Weather
  Software Engineering Project - Kish International Campus of Sharif University
  
  Developed using Kanban Methodology
class: text-center
transition: slide-left
mdc: true
---

# 🌌 Galaxy Weather

**Intelligent Weather Forecasting Web Application**

<div class="pt-8">
  <p class="text-xl opacity-80">عسل هادیان (Asal Hadian) — Backend Developer</p>
  <p class="text-xl opacity-80">صدف باقریان (Sadaf Bagherian) — Frontend Developer & Documentation Lead</p>
</div>

<div class="abs-bl m-6 text-sm opacity-60">
  Kish International Campus of Sharif University<br>
  Software Engineering Course • January 2026<br>
  Methodology: <strong>Kanban</strong>
</div>

---
transition: fade-out
---

# 📋 Table of Contents

Navigate through our software engineering journey

<div class="grid grid-cols-5 gap-3 mt-8">
  <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
    <span class="text-purple-400 font-bold">01</span><br>
    <strong>Project Intro</strong><br>
    <span class="text-xs opacity-70">Mission & scope</span>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
    <span class="text-purple-400 font-bold">02</span><br>
    <strong>Problem</strong><br>
    <span class="text-xs opacity-70">Background & solution</span>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
    <span class="text-purple-400 font-bold">03</span><br>
    <strong>Requirements</strong><br>
    <span class="text-xs opacity-70">FR & NFR specs</span>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
    <span class="text-purple-400 font-bold">04</span><br>
    <strong>Methodology</strong><br>
    <span class="text-xs opacity-70">Kanban & Trello</span>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg border border-purple-500/30">
    <span class="text-purple-400 font-bold">05</span><br>
    <strong>Architecture</strong><br>
    <span class="text-xs opacity-70">MVC & tech stack</span>
  </div>
  <div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
    <span class="text-cyan-400 font-bold">06</span><br>
    <strong>UML Diagrams</strong><br>
    <span class="text-xs opacity-70">7 diagrams</span>
  </div>
  <div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
    <span class="text-cyan-400 font-bold">07</span><br>
    <strong>Algorithm</strong><br>
    <span class="text-xs opacity-70">Hybrid prediction</span>
  </div>
  <div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
    <span class="text-cyan-400 font-bold">08</span><br>
    <strong>Implementation</strong><br>
    <span class="text-xs opacity-70">Code structure</span>
  </div>
  <div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
    <span class="text-cyan-400 font-bold">09</span><br>
    <strong>Testing</strong><br>
    <span class="text-xs opacity-70">Results & metrics</span>
  </div>
  <div class="p-3 bg-cyan-900/30 rounded-lg border border-cyan-500/30">
    <span class="text-cyan-400 font-bold">10</span><br>
    <strong>Team & Future</strong><br>
    <span class="text-xs opacity-70">Roles & plans</span>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# 🚀 01. Project Introduction

## 🎯 Mission Statement

Galaxy Weather is a modern, single-page web application designed to provide **intelligent weather forecasting** capabilities. 

Built using Python Flask framework, the application offers users the ability to obtain weather forecasts through multiple input methods including direct location queries and structured JSON data uploads.

::right::

## 📌 Project Objectives

<v-clicks>

- ✅ Develop a functional weather forecasting application integrating with external APIs
- ✅ Implement intelligent forecasting using trend analysis & statistical methods
- ✅ Create an engaging UI with modern design principles & animations
- ✅ Demonstrate software engineering best practices
- ✅ Provide comprehensive documentation for academic evaluation

</v-clicks>

---

# ⭐ Core Features & Functionality

<div class="grid grid-cols-3 gap-4 mt-4">
  <div class="p-4 bg-white/5 rounded-xl border border-white/10">
    <div class="text-2xl mb-2">☀️</div>
    <h4 class="text-cyan-400 font-bold">Real-Time Weather</h4>
    <p class="text-sm opacity-70">Integration with WeatherAPI: temperature, humidity, wind, pressure, UV index, visibility</p>
  </div>
  <div class="p-4 bg-white/5 rounded-xl border border-white/10">
    <div class="text-2xl mb-2">📅</div>
    <h4 class="text-cyan-400 font-bold">Multi-Day Forecast</h4>
    <p class="text-sm opacity-70">1-10 day forecasts with hourly breakdowns, precipitation probability</p>
  </div>
  <div class="p-4 bg-white/5 rounded-xl border border-white/10">
    <div class="text-2xl mb-2">📍</div>
    <h4 class="text-cyan-400 font-bold">Multi-Format Input</h4>
    <p class="text-sm opacity-70">City name, coordinates, ZIP codes, UK/CA postcodes, IP address</p>
  </div>
  <div class="p-4 bg-white/5 rounded-xl border border-white/10">
    <div class="text-2xl mb-2">📤</div>
    <h4 class="text-cyan-400 font-bold">JSON Upload</h4>
    <p class="text-sm opacity-70">Custom weather data files for analysis and research</p>
  </div>
  <div class="p-4 bg-white/5 rounded-xl border border-white/10">
    <div class="text-2xl mb-2">📜</div>
    <h4 class="text-cyan-400 font-bold">Forecast History</h4>
    <p class="text-sm opacity-70">SQLite database storage, access previous predictions</p>
  </div>
  <div class="p-4 bg-white/5 rounded-xl border border-white/10">
    <div class="text-2xl mb-2">📈</div>
    <h4 class="text-cyan-400 font-bold">Trend Analysis</h4>
    <p class="text-sm opacity-70">Linear regression on 7 days of historical data</p>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# ⚠️ 02. Problem Definition

## 🔍 Background

Weather forecasting is essential for daily planning, agriculture, transportation, and many other sectors. While numerous weather applications exist, many lack:

<v-clicks>

- ❌ Support for multiple input formats
- ❌ Custom data analysis capabilities
- ❌ Historical trend visualization
- ❌ Clean, modern user interfaces

</v-clicks>

::right::

## 💡 Proposed Solution

Galaxy Weather addresses these needs:

<v-clicks>

- ✅ **Multi-format location query** - City, coords, ZIP, IP
- ✅ **JSON file upload** - Custom data analysis
- ✅ **Trend analysis** - Linear regression & moving averages
- ✅ **SQLite database** - Persistent storage
- ✅ **Modern Galaxy UI** - Animated interface

</v-clicks>

---

# 📋 03. Functional Requirements

<div class="text-sm">

| ID | Requirement | Description | Priority | Status |
|---|---|---|---|---|
| FR-01 | Multi-format Input | City names, coordinates, ZIP codes, IP addresses | <span class="text-red-400">Must Have</span> | ✅ Complete |
| FR-02 | Weather API Integration | Fetch data from WeatherAPI.com | <span class="text-red-400">Must Have</span> | ✅ Complete |
| FR-03 | JSON Upload | Upload custom weather data files | <span class="text-yellow-400">Should Have</span> | ✅ Complete |
| FR-04 | Trend-Based Forecast | Calculate forecasts using historical trend analysis | <span class="text-red-400">Must Have</span> | ✅ Complete |
| FR-05 | Database Storage | Store all forecasts in SQLite database | <span class="text-red-400">Must Have</span> | ✅ Complete |
| FR-06 | Forecast History | View and access all previous forecast results | <span class="text-yellow-400">Should Have</span> | ✅ Complete |
| FR-07 | Loading Animation | Display processing animation during forecast | <span class="text-green-400">Could Have</span> | ✅ Complete |
| FR-08 | Responsive UI | Mobile-first design with cross-browser support | <span class="text-red-400">Must Have</span> | ✅ Complete |

</div>

---

# ⚙️ Non-Functional Requirements

<div class="grid grid-cols-3 gap-3 mt-4 text-sm">
  <div class="p-3 bg-white/5 rounded-lg">
    <h4 class="text-cyan-400 font-bold mb-2">🚀 Performance</h4>
    <ul class="opacity-80">
      <li>Response time < 5 seconds</li>
      <li>Page load < 3 seconds</li>
      <li>API calls < 500ms latency</li>
      <li>Support concurrent users</li>
    </ul>
  </div>
  <div class="p-3 bg-white/5 rounded-lg">
    <h4 class="text-cyan-400 font-bold mb-2">🛡️ Reliability</h4>
    <ul class="opacity-80">
      <li>99% uptime during demo</li>
      <li>Graceful error handling</li>
      <li>Data backup capability</li>
      <li>Automatic failover</li>
    </ul>
  </div>
  <div class="p-3 bg-white/5 rounded-lg">
    <h4 class="text-cyan-400 font-bold mb-2">🔒 Security</h4>
    <ul class="opacity-80">
      <li>API key in env vars</li>
      <li>Input validation</li>
      <li>SQL injection prevention</li>
      <li>HTTPS ready</li>
    </ul>
  </div>
  <div class="p-3 bg-white/5 rounded-lg">
    <h4 class="text-cyan-400 font-bold mb-2">👤 Usability</h4>
    <ul class="opacity-80">
      <li>Intuitive single-page UI</li>
      <li>Mobile responsive</li>
      <li>Clear error messages</li>
      <li>Accessible navigation</li>
    </ul>
  </div>
  <div class="p-3 bg-white/5 rounded-lg">
    <h4 class="text-cyan-400 font-bold mb-2">🔧 Maintainability</h4>
    <ul class="opacity-80">
      <li>Modular code structure</li>
      <li>Full documentation</li>
      <li>Separation of concerns</li>
      <li>Version control (Git)</li>
    </ul>
  </div>
  <div class="p-3 bg-white/5 rounded-lg">
    <h4 class="text-cyan-400 font-bold mb-2">✅ Compatibility</h4>
    <ul class="opacity-80">
      <li>Chrome, Firefox, Safari, Edge</li>
      <li>Python 3.8+</li>
      <li>Flask 3.0</li>
      <li>SQLite 3</li>
    </ul>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-6
---

# 📊 04. Why We Chose Kanban

## Benefits for Our 2-Person Team:

<v-clicks>

- ✅ **Visual Workflow** - See all tasks at a glance on Trello
- ✅ **Flexible Priorities** - Adjust task order without sprint constraints
- ✅ **Continuous Delivery** - Ship features as completed
- ✅ **No Sprint Overhead** - Perfect for small team
- ✅ **WIP Limits** - Focus on finishing, not starting
- ✅ **Daily Review** - Quick board status check

</v-clicks>

::right::

## Methodology Comparison

| Aspect | **Kanban ✓** | Scrum | Waterfall |
|---|---|---|---|
| Fixed Iterations | <span class="text-green-400">No</span> | Yes | Yes |
| Team Size | <span class="text-green-400">2+ ideal</span> | 5-9 | Any |
| Flexibility | <span class="text-green-400">High</span> | Medium | Low |
| Overhead | <span class="text-green-400">Minimal</span> | High | High |
| Delivery | <span class="text-green-400">Continuous</span> | Sprint | End |

---

# 📋 Our 5-Column Kanban Board

<div class="flex items-center justify-center gap-2 mt-8">
  <div class="text-center p-4 bg-gray-600/50 rounded-lg min-w-28">
    <div class="bg-gray-500 rounded px-3 py-1 font-bold mb-2">📋 Backlog</div>
    <div class="text-xs opacity-70">WIP: Unlimited</div>
    <p class="text-xs mt-2">Tasks waiting</p>
  </div>
  <div class="text-2xl text-cyan-400">→</div>
  <div class="text-center p-4 bg-blue-600/50 rounded-lg min-w-28">
    <div class="bg-blue-500 rounded px-3 py-1 font-bold mb-2">📝 To Do</div>
    <div class="text-xs opacity-70">WIP: 4</div>
    <p class="text-xs mt-2">Prioritized</p>
  </div>
  <div class="text-2xl text-cyan-400">→</div>
  <div class="text-center p-4 bg-amber-600/50 rounded-lg min-w-28">
    <div class="bg-amber-500 rounded px-3 py-1 font-bold mb-2">🔄 In Progress</div>
    <div class="text-xs opacity-70">WIP: 2</div>
    <p class="text-xs mt-2">Working on</p>
  </div>
  <div class="text-2xl text-cyan-400">→</div>
  <div class="text-center p-4 bg-purple-600/50 rounded-lg min-w-28">
    <div class="bg-purple-500 rounded px-3 py-1 font-bold mb-2">🧪 Testing</div>
    <div class="text-xs opacity-70">WIP: 2</div>
    <p class="text-xs mt-2">Verification</p>
  </div>
  <div class="text-2xl text-cyan-400">→</div>
  <div class="text-center p-4 bg-green-600/50 rounded-lg min-w-28">
    <div class="bg-green-500 rounded px-3 py-1 font-bold mb-2">✅ Done</div>
    <div class="text-xs opacity-70">WIP: Unlimited</div>
    <p class="text-xs mt-2">Completed! 🎉</p>
  </div>
</div>

---

# 📸 Step 1: Board Setup

Created the Trello board and defined our 5-column structure

<div class="flex justify-center mt-4">
  <img src="/images/trello/1.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Set up Backlog → To Do → In Progress → Testing → Done columns with color-coded labels</p>

---

# 📸 Step 2: Backlog Planning

Broke down the project into manageable task cards

<div class="flex justify-center mt-4">
  <img src="/images/trello/2.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Created 15+ task cards: Analyze WeatherAPI, Design Database, Build Flask Backend, Create Galaxy UI, etc.</p>

---

# 📸 Step 3: Development Start

Tasks moved from Backlog → To Do → In Progress

<div class="flex justify-center mt-4">
  <img src="/images/trello/3.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Asal started backend (API analysis), Sadaf began UI design. Respected WIP limit of 2 tasks.</p>

---

# 📸 Step 4: Backend Implementation

Building Flask application and forecast engine

<div class="flex justify-center mt-4">
  <img src="/images/trello/4.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Core backend: Flask routes (app.py), Database models (models.py), WeatherAPI integration, Forecasting algorithm</p>

---

# 📸 Step 5: Frontend Development

Creating the Galaxy-themed user interface

<div class="flex justify-center mt-4">
  <img src="/images/trello/5.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Dark space theme (#0a0a1a), animated starfield, glassmorphism cards, responsive layouts</p>

---

# 📸 Step 6: Testing Phase

Moving completed features to Testing for verification

<div class="flex justify-center mt-4">
  <img src="/images/trello/6.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Tested: City queries, coordinate input, JSON upload, error handling, cross-browser, mobile</p>

---

# 📸 Step 7: UML Documentation

Creating comprehensive technical documentation

<div class="flex justify-center mt-4">
  <img src="/images/trello/7.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Created 7 UML diagrams using PlantUML: Use Case, Class, Sequence, Activity, State, Component, ER Diagram</p>

---

# 📸 Step 8: Documentation

Writing reports, README, and presentation

<div class="flex justify-center mt-4">
  <img src="/images/trello/8.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Final report (FINAL_REPORT.md), README, doc.md, KANBAN_GUIDE.md, and this presentation!</p>

---

# 🎉 Step 9: Project Complete!

All tasks in Done column - mission accomplished!

<div class="flex justify-center mt-4">
  <img src="/images/trello/9.png" class="h-80 rounded-lg shadow-xl border border-white/20" />
</div>

<p class="text-center text-sm opacity-70 mt-2">Every task card completed, tested, and verified. Kanban methodology successfully guided our 2-person team! 🎊</p>

---

# 🏗️ 05. System Architecture

Model-View-Controller (MVC) architectural pattern

<div class="flex flex-col items-center gap-2 mt-4">
  <div class="p-4 bg-blue-500/20 border border-blue-500 rounded-lg w-96 text-center">
    <h4 class="font-bold">🖥️ Client Layer (View)</h4>
    <div class="flex gap-2 justify-center mt-2 text-xs">
      <span class="bg-white/10 px-2 py-1 rounded">Browser</span>
      <span class="bg-white/10 px-2 py-1 rounded">HTML5</span>
      <span class="bg-white/10 px-2 py-1 rounded">CSS3</span>
      <span class="bg-white/10 px-2 py-1 rounded">JavaScript</span>
      <span class="bg-white/10 px-2 py-1 rounded">Jinja2</span>
    </div>
  </div>
  <div class="text-cyan-400 font-bold">↓ HTTP Requests / Responses ↓</div>
  <div class="p-4 bg-purple-500/20 border border-purple-500 rounded-lg w-96 text-center">
    <h4 class="font-bold">⚙️ Flask Application (Controller + Model)</h4>
    <div class="flex gap-2 justify-center mt-2 text-xs">
      <span class="bg-white/10 px-2 py-1 rounded">app.py</span>
      <span class="bg-white/10 px-2 py-1 rounded">models.py</span>
      <span class="bg-white/10 px-2 py-1 rounded">forecast.py</span>
    </div>
  </div>
  <div class="text-cyan-400 font-bold">↓ SQL Queries ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓ REST API ↓</div>
  <div class="flex gap-8">
    <div class="p-3 bg-green-500/20 border border-green-500 rounded-lg text-center">
      <h4 class="font-bold text-sm">🗄️ SQLite Database</h4>
      <p class="text-xs mt-1">weather_request<br>forecast_result</p>
    </div>
    <div class="p-3 bg-orange-500/20 border border-orange-500 rounded-lg text-center">
      <h4 class="font-bold text-sm">🌐 WeatherAPI.com</h4>
      <p class="text-xs mt-1">/v1/current.json<br>/v1/forecast.json</p>
    </div>
  </div>
</div>

---

# 🔧 Technology Stack

<div class="grid grid-cols-3 gap-6 mt-6">
  <div class="p-4 bg-white/5 rounded-xl text-center">
    <h3 class="text-cyan-400 font-bold mb-4">🖥️ Backend</h3>
    <div class="space-y-2">
      <div class="flex items-center justify-center gap-2"><span class="text-xl">🐍</span> Python 3.8+</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">🌶️</span> Flask 3.0</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">🗄️</span> SQLite 3</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">⚙️</span> python-dotenv</div>
    </div>
  </div>
  <div class="p-4 bg-white/5 rounded-xl text-center">
    <h3 class="text-cyan-400 font-bold mb-4">💻 Frontend</h3>
    <div class="space-y-2">
      <div class="flex items-center justify-center gap-2"><span class="text-xl">📄</span> HTML5</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">🎨</span> CSS3</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">⚡</span> JavaScript ES6</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">📝</span> Jinja2</div>
    </div>
  </div>
  <div class="p-4 bg-white/5 rounded-xl text-center">
    <h3 class="text-cyan-400 font-bold mb-4">🔌 External Services</h3>
    <div class="space-y-2">
      <div class="flex items-center justify-center gap-2"><span class="text-xl">☁️</span> WeatherAPI.com</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">📋</span> Trello (Kanban)</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">📊</span> PlantUML</div>
      <div class="flex items-center justify-center gap-2"><span class="text-xl">🐙</span> GitHub</div>
    </div>
  </div>
</div>

---

# 📐 06. UML Diagrams Overview

7 comprehensive diagrams documenting our system architecture

<div class="grid grid-cols-7 gap-2 mt-8">
  <div class="p-3 bg-purple-900/30 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">1</span>
    <p class="font-bold mt-2">Use Case</p>
    <p class="text-xs opacity-70">User interactions</p>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">2</span>
    <p class="font-bold mt-2">Class</p>
    <p class="text-xs opacity-70">Structure</p>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">3</span>
    <p class="font-bold mt-2">Sequence</p>
    <p class="text-xs opacity-70">Flow</p>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">4</span>
    <p class="font-bold mt-2">Activity</p>
    <p class="text-xs opacity-70">Workflow</p>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">5</span>
    <p class="font-bold mt-2">State</p>
    <p class="text-xs opacity-70">Lifecycle</p>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">6</span>
    <p class="font-bold mt-2">Component</p>
    <p class="text-xs opacity-70">Modules</p>
  </div>
  <div class="p-3 bg-purple-900/30 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">7</span>
    <p class="font-bold mt-2">ER</p>
    <p class="text-xs opacity-70">Database</p>
  </div>
</div>

<p class="text-center text-sm opacity-70 mt-6">All diagrams available as .puml source files in /diagrams folder</p>

---
layout: two-cols
layoutClass: gap-4
---

# 👤 1. Use Case Diagram

<img src="/images/uml/01_use_case_diagram.svg" class="h-72 mx-auto" />

::right::

## Purpose
Illustrates system functionality from user perspective

## Actor
**User** - Primary actor interacting with system

## Use Cases
- Enter Location (city, coords, ZIP, IP)
- Upload JSON Data
- Request Forecast
- View Forecast Result
- View Forecast History

## Relationships
"Request Forecast" includes "Enter Location" and "View Forecast Result"

---
layout: two-cols
layoutClass: gap-4
---

# 📦 2. Class Diagram

<img src="/images/uml/02_class_diagram.svg" class="h-72 mx-auto" />

::right::

## Purpose
Shows system structure - classes, attributes, methods

## Classes
- **WeatherRequest:** id, query, query_type, range_days, status, created_at
- **WeatherDataFetcher:** get_current(), get_forecast(), get_history()
- **ForecastEngine:** analyze_history(), generate_forecast()
- **ForecastResult:** id, request_id, location_name, forecast_data

## Relationships
- ForecastEngine uses WeatherDataFetcher (composition)
- ForecastResult belongs to WeatherRequest (association)

---
layout: two-cols
layoutClass: gap-4
---

# 🔄 3. Sequence Diagram

<img src="/images/uml/03_sequence_diagram.svg" class="h-72 mx-auto" />

::right::

## Purpose
Time-ordered interaction between components

## Flow (10 Steps)
1. User enters location in browser
2. Browser POST to Flask
3. Create WeatherRequest in DB
4. Redirect to loading page
5. AJAX initiates processing
6. ForecastEngine fetches from WeatherAPI
7. Analyze historical trends
8. Generate adjusted forecast
9. Store ForecastResult in DB
10. Redirect to results page

---
layout: two-cols
layoutClass: gap-4
---

# 📊 4. Activity Diagram

<img src="/images/uml/04_activity_diagram.svg" class="h-72 mx-auto" />

::right::

## Purpose
Workflow from input to output with decision points

## Activities
1. Start → User enters location/uploads JSON
2. Validate input
3. Decision: Valid? → Yes: Continue / No: Show error
4. Fetch current weather from API
5. Fetch 7 days historical data
6. Analyze trends (linear regression)
7. Generate adjusted forecast
8. Store results in database
9. Display forecast → End

---
layout: two-cols
layoutClass: gap-4
---

# 🔁 5. State Diagram

<img src="/images/uml/05_state_diagram.svg" class="h-72 mx-auto" />

::right::

## Purpose
Lifecycle states of WeatherRequest object

## States
- **Created:** Initial state after submission
- **Processing:** Data fetching & analysis in progress
- **Completed:** Forecast successfully generated
- **Failed:** Error occurred during processing
- **Archived:** Old forecasts (after 30 days)

## Transitions
- Created → Processing → Completed/Failed
- Failed → Created (retry)
- Completed → Archived (30 days)

---
layout: two-cols
layoutClass: gap-4
---

# 🧩 6. Component Diagram

<img src="/images/uml/06_component_diagram.svg" class="h-72 mx-auto" />

::right::

## Purpose
High-level system modules and dependencies

## Components

**Frontend Layer:**
- index.html, loading.html, forecast.html, history.html
- Static: galaxy.css, galaxy.js, style.css

**Backend Layer:**
- app.py (Flask routes)
- models.py (ORM classes)
- forecast.py (Engine)

**External:**
- SQLite DB, WeatherAPI

---
layout: two-cols
layoutClass: gap-4
---

# 🗄️ 7. ER Diagram

<img src="/images/uml/07_er_diagram.svg" class="h-72 mx-auto" />

::right::

## Purpose
Database structure with entities and relationships

## Tables

**weather_request:**
- id (PK), query, query_type, range_days
- status, created_at, updated_at

**forecast_result:**
- id (PK), request_id (FK)
- location_name, forecast_data (JSON)
- temps_min, temps_max, created_at

## Relationship
One-to-One (weather_request → forecast_result)

---

# 🧠 07. Forecasting Algorithm

Hybrid approach: API forecasts + Historical trend analysis

<div class="flex items-center justify-center gap-2 mt-6">
  <div class="p-3 bg-white/10 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">1</span>
    <p class="text-sm mt-2">Fetch Current</p>
  </div>
  <div class="text-cyan-400 text-xl">→</div>
  <div class="p-3 bg-white/10 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">2</span>
    <p class="text-sm mt-2">Fetch Forecast</p>
  </div>
  <div class="text-cyan-400 text-xl">→</div>
  <div class="p-3 bg-white/10 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">3</span>
    <p class="text-sm mt-2">Fetch History</p>
  </div>
  <div class="text-cyan-400 text-xl">→</div>
  <div class="p-3 bg-white/10 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">4</span>
    <p class="text-sm mt-2">Calculate Trend</p>
  </div>
  <div class="text-cyan-400 text-xl">→</div>
  <div class="p-3 bg-white/10 rounded-lg text-center">
    <span class="bg-purple-500 rounded-full px-2 py-1 text-sm font-bold">5</span>
    <p class="text-sm mt-2">Adjust Forecast</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="p-4 bg-white/5 rounded-xl">
    <h4 class="text-cyan-400 font-bold">📊 Linear Trend Calculation</h4>
    <p class="text-sm opacity-80 mt-2">Analyzes 7 days of historical data to detect if temperature/humidity is rising or falling</p>
    <code class="block bg-black/30 p-2 rounded mt-2 text-cyan-300 text-sm">m = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)²</code>
  </div>
  <div class="p-4 bg-white/5 rounded-xl">
    <h4 class="text-cyan-400 font-bold">🔧 Forecast Adjustment Formula</h4>
    <p class="text-sm opacity-80 mt-2">Blends API prediction with detected trend (10% weight)</p>
    <code class="block bg-black/30 p-2 rounded mt-2 text-cyan-300 text-sm">Final_Temp = API_Forecast + (Trend_Coefficient × 0.1)</code>
  </div>
</div>

---

# 📁 08. Project File Structure

```
galaxy_weather/
├── app.py              # Flask application (routes, controllers)
├── models.py           # SQLAlchemy ORM models
├── forecast.py         # Forecasting engine with trend analysis
├── requirements.txt    # Python dependencies
├── .env                # API keys (not in Git)
├── templates/          # Jinja2 HTML templates
│   ├── base.html       # Base template with Galaxy theme
│   ├── index.html      # Home page with input forms
│   ├── loading.html    # Processing animation page
│   ├── forecast.html   # Results display page
│   └── history.html    # Forecast history page
├── static/             # CSS and JavaScript assets
│   ├── galaxy.css      # Galaxy theme styles
│   ├── galaxy.js       # Animations and interactions
│   └── style.css       # Additional styles
└── diagrams/           # PlantUML diagram sources
    ├── 01_use_case_diagram.puml
    ├── 02_class_diagram.puml
    └── ...
```

---

# 🧪 09. Testing & Validation

<div class="grid grid-cols-2 gap-6 mt-4">
  <div class="p-4 bg-white/5 rounded-xl">
    <h4 class="text-cyan-400 font-bold mb-3">✅ Functional Testing</h4>
    <ul class="text-sm space-y-1 opacity-80">
      <li>✓ City name search (London, Tehran, Tokyo)</li>
      <li>✓ Coordinate input (48.85,2.35)</li>
      <li>✓ ZIP code search (10001, SW1)</li>
      <li>✓ JSON file upload</li>
      <li>✓ Forecast history retrieval</li>
      <li>✓ Error handling for invalid input</li>
    </ul>
  </div>
  <div class="p-4 bg-white/5 rounded-xl">
    <h4 class="text-cyan-400 font-bold mb-3">🌐 Cross-Browser Testing</h4>
    <ul class="text-sm space-y-1 opacity-80">
      <li>✓ Google Chrome (latest)</li>
      <li>✓ Mozilla Firefox (latest)</li>
      <li>✓ Microsoft Edge (latest)</li>
      <li>✓ Safari (macOS)</li>
      <li>✓ Mobile Chrome (Android)</li>
      <li>✓ Mobile Safari (iOS)</li>
    </ul>
  </div>
</div>

<div class="grid grid-cols-4 gap-4 mt-6">
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-2xl font-bold text-green-400">100%</span>
    <p class="text-sm">FR Complete</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-2xl font-bold text-green-400">100%</span>
    <p class="text-sm">NFR Complete</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-2xl font-bold text-green-400">&lt;3s</span>
    <p class="text-sm">Page Load</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-2xl font-bold text-green-400">&lt;5s</span>
    <p class="text-sm">Forecast Time</p>
  </div>
</div>

---
layout: two-cols
layoutClass: gap-8
---

# 👥 10. Team & Contributions

## 👩‍💻 عسل هادیان (Asal Hadian)
**Backend Developer**

<v-clicks>

- Flask application development
- WeatherAPI integration
- Forecasting algorithm design
- Database modeling
- Error handling

</v-clicks>

::right::

## 👩‍💻 صدف باقریان (Sadaf Bagherian)
**Frontend Developer & Documentation Lead**

<v-clicks>

- Galaxy-themed UI design
- Responsive layouts
- Loading animations
- UML diagram creation
- Final report writing
- Presentation design

</v-clicks>

---

# 🔮 Future Enhancements

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-4 bg-white/5 rounded-xl">
    <h4 class="text-cyan-400 font-bold mb-3">🚀 Short-term (v1.1)</h4>
    <ul class="text-sm space-y-2 opacity-80">
      <li>📱 Progressive Web App (PWA) support</li>
      <li>🔔 Weather alerts and notifications</li>
      <li>📍 GPS auto-location detection</li>
      <li>🌙 Dark/Light theme toggle</li>
    </ul>
  </div>
  <div class="p-4 bg-white/5 rounded-xl">
    <h4 class="text-cyan-400 font-bold mb-3">🎯 Long-term (v2.0)</h4>
    <ul class="text-sm space-y-2 opacity-80">
      <li>🤖 Machine learning predictions</li>
      <li>📊 Advanced data visualization (charts)</li>
      <li>👤 User accounts and saved locations</li>
      <li>🌍 Multi-language support (i18n)</li>
    </ul>
  </div>
</div>

---

# ✅ Conclusion

<div class="grid grid-cols-4 gap-3 mt-6">
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">Fully functional weather app</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">Intelligent hybrid forecasting</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">Modern Galaxy-themed UI</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">7 comprehensive UML diagrams</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">Successful Kanban with Trello</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">All FR & NFR requirements met</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">Complete documentation</p>
  </div>
  <div class="p-3 bg-green-500/20 rounded-lg text-center">
    <span class="text-green-400 text-xl">✅</span>
    <p class="text-sm mt-2">Ready for enhancements</p>
  </div>
</div>

---
layout: center
class: text-center
---

# 🙏 Thank You!

<div class="text-6xl my-8">🌌</div>

## Galaxy Weather

<p class="text-xl opacity-80 mt-4">عسل هادیان و صدف باقریان</p>
<p class="text-lg opacity-60">Asal Hadian & Sadaf Bagherian</p>

<div class="mt-8 opacity-60">
  <p>Kish International Campus of Sharif University</p>
  <p>Software Engineering Course • January 2026</p>
</div>

<div class="mt-8 text-xl">
  <span class="text-cyan-400">❓</span> Questions & Discussion
</div>
