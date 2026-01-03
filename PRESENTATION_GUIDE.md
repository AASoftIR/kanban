# 🎤 Galaxy Weather - Presentation Script & Guide

## Complete Presentation for Software Engineering Course

**Presenters:** عسل هادیان (Asal Hadian) & صدف باقریان (Sadaf Bagherian)  
**University:** Kish International Campus of Sharif University  
**Duration:** 20-30 minutes  
**Total Slides:** 50 slides

---

## 📋 PRESENTATION OUTLINE

| Section                          | Slides | Duration | Presenter |
| -------------------------------- | ------ | -------- | --------- |
| 1. Introduction                  | 1-6    | 3 min    | Sadaf     |
| 2. Methodology (Kanban)          | 7-14   | 5 min    | Sadaf     |
| 3. Requirements                  | 15-17  | 2 min    | Asal      |
| 4. UML Diagrams                  | 18-31  | 8 min    | Both      |
| 5. Architecture & Implementation | 32-38  | 5 min    | Asal      |
| 6. Live Demo                     | 39-42  | 3 min    | Asal      |
| 7. Testing & Conclusion          | 43-50  | 4 min    | Sadaf     |

---

## 🎬 DETAILED SLIDE SCRIPTS

---

### SLIDE 1: Title Slide

**Visual:** Galaxy background, project logo, team photos

**Speaker Notes (Sadaf):**

> "سلام و درود. پروژه ما Galaxy Weather هست - یک اپلیکیشن هوشمند پیش‌بینی آب و هوا. من صدف باقریان هستم و همراه با عسل هادیان این پروژه رو توسعه دادیم."

> "Hello everyone. Our project is Galaxy Weather - an Intelligent Weather Forecasting Web Application. I'm Sadaf Bagherian and I've developed this project along with Asal Hadian."

---

### SLIDE 2: Table of Contents

**Visual:** Numbered list with icons for each section

**Speaker Notes (Sadaf):**

> "در این ارائه، ابتدا مسئله و راه‌حل رو معرفی می‌کنیم، بعد متدولوژی Kanban رو توضیح می‌دیم، نیازمندی‌ها و دیاگرام‌های UML رو نشون می‌دیم، معماری سیستم و نحوه کار الگوریتم پیش‌بینی رو توضیح می‌دیم، و در نهایت دمو زنده از نرم‌افزار خواهیم داشت."

---

### SLIDE 3: Team Introduction

**Visual:** Professional photos of team members with role descriptions

**Content:**

```
┌─────────────────────────────────────────────────────────────┐
│                    TEAM MEMBERS                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  👩 Asal Hadian (عسل هادیان)                                 │
│  Role: Backend Developer                                     │
│  Responsibilities:                                           │
│  • Python Flask Application                                  │
│  • Database Design (SQLite)                                  │
│  • Weather API Integration                                   │
│  • Forecasting Algorithm                                     │
│                                                              │
│  👩 Sadaf Bagherian (صدف باقریان)                            │
│  Role: Frontend Developer & Documentation Lead               │
│  Responsibilities:                                           │
│  • UI/UX Design                                              │
│  • HTML/CSS/JavaScript                                       │
│  • UML Diagrams                                              │
│  • Project Documentation                                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Speaker Notes (Sadaf):**

> "تیم ما از دو نفر تشکیل شده. عسل هادیان مسئول توسعه Backend با Python و Flask، طراحی دیتابیس، و پیاده‌سازی الگوریتم پیش‌بینی بوده. من هم مسئول Frontend، طراحی رابط کاربری، دیاگرام‌های UML و مستندات پروژه بودم."

---

### SLIDE 4: Problem Statement

**Visual:** Icons showing problems with existing weather apps

**Content:**

```
❌ PROBLEMS WITH EXISTING WEATHER APPS

1. Limited Input Formats
   Only accept city names

2. No Custom Data Analysis
   Can't upload your own data

3. Basic Predictions
   No trend analysis

4. No History
   Can't view past forecasts

5. Outdated Interfaces
   Not user-friendly
```

**Speaker Notes (Sadaf):**

> "چرا این پروژه رو ساختیم؟ اپ‌های آب و هوای موجود محدودیت‌هایی دارن: فقط اسم شهر قبول می‌کنن، امکان آپلود دیتای شخصی ندارن، تحلیل روند انجام نمی‌دن، تاریخچه ذخیره نمی‌کنن، و رابط کاربری قدیمی دارن."

---

### SLIDE 5: Our Solution - Galaxy Weather

**Visual:** Screenshot of the app with feature highlights

**Content:**

```
✅ GALAXY WEATHER SOLUTION

1. Multi-Format Input
   City, Coordinates, IP, Postal Code

2. JSON Upload
   Analyze your own weather data

3. Intelligent Forecasting
   Trend analysis with linear regression

4. Forecast History
   All predictions saved in database

5. Modern Galaxy UI
   Beautiful animated interface
```

**Speaker Notes (Sadaf):**

> "Galaxy Weather این مشکلات رو حل می‌کنه. ورودی‌های مختلف قبول می‌کنه، می‌تونید فایل JSON آپلود کنید، از رگرسیون خطی برای تحلیل روند استفاده می‌کنه، تاریخچه ذخیره می‌کنه، و رابط کاربری زیبا با تم کهکشانی داره."

---

### SLIDE 6: Project Objectives

**Visual:** Numbered objectives with icons

**Speaker Notes (Sadaf):**

> "اهداف پروژه شامل: ساخت یک اپلیکیشن کاربردی پیش‌بینی آب و هوا، پیاده‌سازی الگوریتم‌های هوشمند، طراحی رابط کاربری مدرن، اعمال بهترین روش‌های مهندسی نرم‌افزار، و مستندسازی کامل با دیاگرام‌های UML است."

---

### SLIDE 7: Why We Chose Kanban

**Visual:** Comparison table (Kanban vs Scrum vs Waterfall)

**Content:**

```
┌─────────────────────────────────────────────────────────────┐
│                 METHODOLOGY COMPARISON                       │
├───────────────┬───────────────┬───────────────┬─────────────┤
│   Feature     │    Kanban     │    Scrum      │  Waterfall  │
├───────────────┼───────────────┼───────────────┼─────────────┤
│ Iterations    │ Continuous    │ Fixed Sprints │ Sequential  │
│ Planning      │ On-demand     │ Sprint Plan   │ Upfront     │
│ Team Size     │ Any (✓2 ppl)  │ 5-9 members   │ Any         │
│ Flexibility   │ High          │ Medium        │ Low         │
│ Overhead      │ Minimal       │ Medium        │ High        │
├───────────────┴───────────────┴───────────────┴─────────────┤
│ ✓ Kanban is PERFECT for our 2-person team!                  │
└─────────────────────────────────────────────────────────────┘
```

**Speaker Notes (Sadaf):**

> "ما Kanban رو به عنوان متدولوژی انتخاب کردیم چون برای تیم ۲ نفره ایده‌آله. نیاز به Sprint ثابت نداره، overhead کمی داره، و انعطاف‌پذیری بالایی داره. برخلاف Scrum که برای تیم‌های ۵ تا ۹ نفره طراحی شده، Kanban برای هر اندازه تیمی مناسبه."

---

### SLIDE 8: Kanban Principles

**Visual:** 4 principles with icons

**Content:**

```
THE 4 CORE PRINCIPLES OF KANBAN

1️⃣ Start With What You Do Now
   Don't change everything at once

2️⃣ Pursue Incremental Change
   Small improvements continuously

3️⃣ Respect Current Roles
   No new roles needed

4️⃣ Leadership at All Levels
   Everyone can suggest improvements
```

**Speaker Notes (Sadaf):**

> "Kanban چهار اصل اساسی داره: از وضعیت فعلی شروع کن، تغییرات تدریجی اعمال کن، نقش‌های فعلی رو حفظ کن، و رهبری در همه سطوح. این اصول باعث شد بدون overhead زیاد، پروژه رو مدیریت کنیم."

---

### SLIDE 9: Our Kanban Board Setup

**Visual:** Screenshot of Trello board (initial empty setup)

**Content:**

```
📸 [TRELLO SCREENSHOT: INITIAL BOARD]

Columns Created:
┌────────┬────────┬────────────┬────────┬─────────┬──────┐
│Backlog │  Todo  │In Progress │ Review │ Testing │ Done │
│  (∞)   │  (4)   │    (2)     │  (2)   │   (2)   │ (∞)  │
└────────┴────────┴────────────┴────────┴─────────┴──────┘
Numbers in parentheses = WIP Limits
```

**Speaker Notes (Sadaf):**

> "این برد Trello ماست که در ابتدای پروژه ساختیم. شش ستون داریم: Backlog برای همه تسک‌ها، Todo برای تسک‌های آماده شروع، In Progress برای کارهای در حال انجام با محدودیت ۲ تسک، Review برای بازبینی، Testing برای تست، و Done برای تسک‌های تمام شده."

---

### SLIDE 10: WIP Limits Explained

**Visual:** Diagram showing blocked work vs flowing work

**Content:**

```
WHY WIP (Work In Progress) LIMITS?

WITHOUT LIMITS:              WITH LIMITS (2):
┌─────────────────┐         ┌─────────────────┐
│ Task A: 30%    │         │ Task A: 100% ✅ │
│ Task B: 20%    │         │ Task B: 100% ✅ │
│ Task C: 10%    │         │ Task C: 50%     │
│ Task D: 5%     │         │                 │
├─────────────────┤         ├─────────────────┤
│ Nothing Done!  │         │ 2 Tasks Done!   │
└─────────────────┘         └─────────────────┘

Rule: Focus on FINISHING, not STARTING!
```

**Speaker Notes (Sadaf):**

> "چرا محدودیت WIP مهمه؟ اگر محدودیت نذاریم، ممکنه ده تسک شروع کنیم ولی هیچکدوم تموم نشه. با محدودیت ۲ تسک در In Progress، مجبوریم اول کارهای شروع شده رو تموم کنیم بعد کار جدید شروع کنیم."

---

### SLIDE 11: Task Distribution

**Visual:** Trello screenshot showing task cards with assignees

**Content:**

```
📸 [TRELLO SCREENSHOT: TASKS DISTRIBUTED]

Task Assignment:

👩 ASAL (Backend):
• Database Models
• API Integration
• Forecast Engine
• Flask Routes

👩 SADAF (Frontend):
• Base Template
• Galaxy UI Theme
• UML Diagrams
• Documentation
```

**Speaker Notes (Sadaf):**

> "تسک‌ها رو بر اساس تخصص تقسیم کردیم. عسل تسک‌های Backend شامل مدل‌های دیتابیس، API، موتور پیش‌بینی و روت‌های Flask رو انجام داد. من تسک‌های Frontend شامل قالب‌ها، تم کهکشانی، دیاگرام‌های UML و مستندات رو انجام دادم."

---

### SLIDE 12: Project Timeline

**Visual:** Gantt chart or timeline

**Content:**

```
PROJECT TIMELINE (5 WEEKS)

Week 1 ████████░░░░░░░░░░░░░░░░░░░░░░ Project Setup
Week 2 ░░░░░░░░████████████████░░░░░░░░ Backend Dev
Week 3 ░░░░░░░░░░░░░░░░████████████░░░░ Frontend Dev
Week 4 ░░░░░░░░░░░░░░░░░░░░░░████████░░ UML Diagrams
Week 5 ░░░░░░░░░░░░░░░░░░░░░░░░░░████░░ Testing & Docs
```

**Speaker Notes (Sadaf):**

> "پروژه در ۵ هفته انجام شد. هفته اول Setup، هفته دوم Backend، هفته سوم Frontend، هفته چهارم دیاگرام‌های UML، و هفته پنجم تست و مستندسازی."

---

### SLIDE 13: Sprint Progress

**Visual:** Trello screenshot mid-project

**Speaker Notes (Sadaf):**

> "این تصویر برد ما در میانه پروژه است. می‌بینید که برخی تسک‌ها در حال انجام و برخی در Review هستند."

---

### SLIDE 14: Final Board State

**Visual:** Trello screenshot with all tasks in Done

**Content:**

```
📸 [TRELLO SCREENSHOT: ALL TASKS COMPLETED]

FINAL METRICS:
• Total Tasks: 22
• Completed: 22 ✅
• Average Cycle Time: 2.5 days
• On-time Completion: 100%
```

**Speaker Notes (Sadaf):**

> "و این وضعیت نهایی برد Kanban ماست. تمام ۲۲ تسک با موفقیت تکمیل شدند. میانگین زمان چرخه ۲.۵ روز بود."

---

### SLIDE 15: Functional Requirements

**Visual:** Table of requirements

**Speaker Notes (Asal):**

> "سلام. من عسل هادیان هستم. نیازمندی‌های عملکردی سیستم رو توضیح می‌دم. FR-01: کاربر می‌تونه لوکیشن رو با فرمت‌های مختلف وارد کنه. FR-02: سیستم از API داده می‌گیره. FR-03: امکان آپلود JSON. FR-04: پیش‌بینی مبتنی بر روند. FR-05: ذخیره در دیتابیس. FR-06: مشاهده تاریخچه."

---

### SLIDE 16: Non-Functional Requirements

**Visual:** Table of NFRs

**Speaker Notes (Asal):**

> "نیازمندی‌های غیرعملکردی: زمان پاسخ کمتر از ۵ ثانیه، دسترسی‌پذیری ۹۹ درصد، رابط کاربری ساده، سازگاری با مرورگرهای مختلف، امنیت کلید API، و ساختار کد ماژولار."

---

### SLIDE 17: Technical Stack

**Visual:** Logos of technologies

**Content:**

```
TECHNOLOGY STACK

BACKEND:
🐍 Python 3.8+
⚗️ Flask 3.0
💾 SQLite3

FRONTEND:
📄 HTML5 (Jinja2)
🎨 CSS3
⚡ JavaScript

EXTERNAL:
🌤️ WeatherAPI.com

TOOLS:
📋 Trello (Kanban)
📊 PlantUML (Diagrams)
📝 Git (Version Control)
```

**Speaker Notes (Asal):**

> "تکنولوژی‌هایی که استفاده کردیم: Python 3.8 با Flask 3.0 برای Backend، SQLite برای دیتابیس، HTML/CSS/JavaScript برای Frontend، WeatherAPI برای داده‌های آب و هوا، Trello برای مدیریت پروژه، و PlantUML برای دیاگرام‌ها."

---

### SLIDE 18: UML Overview

**Visual:** Icons for 7 UML diagram types

**Speaker Notes (Sadaf):**

> "برای این پروژه ۷ دیاگرام UML طراحی کردیم: Use Case، Class، Sequence، Activity، State، Component، و ER Diagram. هر کدوم جنبه‌ای از سیستم رو نشون می‌ده."

---

### SLIDE 19: Use Case Diagram

**Visual:** The use case diagram image

**Speaker Notes (Sadaf):**

> "Use Case Diagram نشون می‌ده کاربر چه کارهایی می‌تونه انجام بده: Enter Location، Upload JSON، Request Forecast، View Result، View History. رابطه Include بین Request Forecast و Enter Location وجود داره."

---

### SLIDE 20: Use Case Explanation

**Visual:** Detailed breakdown of use cases

**Content:**

```
USE CASES EXPLAINED

Actor: User (کاربر)

Use Cases:
1. Enter Location
   - City name: "Tehran"
   - Coordinates: "35.6892,51.3890"
   - IP Address: "auto"
   - Postal Code: "10001"

2. Upload JSON Data
   - Custom weather data file
   - Own analysis

3. Request Forecast
   - Select days (1-10)
   - Submit request

4. View Forecast Result
   - Current weather
   - Daily forecasts
   - Trend analysis

5. View Forecast History
   - Past predictions
   - Search/filter
```

**Speaker Notes (Sadaf):**

> "کاربر می‌تونه لوکیشن رو به روش‌های مختلف وارد کنه، فایل JSON آپلود کنه، پیش‌بینی درخواست بده، نتیجه رو ببینه، و تاریخچه پیش‌بینی‌ها رو مرور کنه."

---

### SLIDE 21: Class Diagram

**Visual:** The class diagram image

**Speaker Notes (Asal):**

> "Class Diagram چهار کلاس اصلی داره: WeatherRequest برای درخواست‌های کاربر، WeatherDataFetcher برای ارتباط با API، ForecastEngine برای الگوریتم پیش‌بینی، و ForecastResult برای نتایج."

---

### SLIDE 22: Class Diagram Details

**Visual:** Detailed class descriptions

**Content:**

```
CLASS DETAILS

┌─────────────────────────────────────┐
│         WeatherRequest              │
├─────────────────────────────────────┤
│ - id: int                           │
│ - query: str                        │
│ - query_type: str                   │
│ - range_days: int    ← IMPORTANT!   │
│ - status: str                       │
├─────────────────────────────────────┤
│ + save()                            │
│ + update_status()                   │
│ + get_by_id()                       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         ForecastEngine              │
├─────────────────────────────────────┤
│ - fetcher: WeatherDataFetcher       │
├─────────────────────────────────────┤
│ + analyze_history()                 │
│ + generate_forecast()               │
│ + _calculate_trend()  ← Key Method! │
│ + _moving_average()                 │
└─────────────────────────────────────┘
```

**Speaker Notes (Asal):**

> "توجه کنید به range_days در WeatherRequest که تعداد روزهای پیش‌بینی رو مشخص می‌کنه. و \_calculate_trend در ForecastEngine که الگوریتم تحلیل روند رو پیاده‌سازی می‌کنه."

---

### SLIDE 23: Sequence Diagram

**Visual:** The sequence diagram image

**Speaker Notes (Asal):**

> "Sequence Diagram جریان کامل یک درخواست پیش‌بینی رو نشون می‌ده: کاربر لوکیشن وارد می‌کنه، مرورگر به Flask می‌فرسته، Flask درخواست رو در دیتابیس ذخیره می‌کنه، ForecastEngine از API داده می‌گیره، تحلیل انجام می‌ده، و نتیجه برمی‌گرده."

---

### SLIDE 24: Sequence Diagram Flow

**Visual:** Step-by-step flow description

**Content:**

```
SEQUENCE FLOW (10 STEPS)

1. User → Browser: Enter location
2. Browser → Flask: POST /forecast
3. Flask → Database: Create request
4. Flask → Browser: Redirect to loading
5. Browser → Flask: POST /process (AJAX)
6. Flask → ForecastEngine: generate_forecast()
7. ForecastEngine → WeatherAPI: Fetch data
8. ForecastEngine → ForecastEngine: Analyze trends
9. Flask → Database: Save result
10. Browser → User: Display forecast
```

**Speaker Notes (Asal):**

> "این ۱۰ مرحله جریان کامل یک درخواست رو نشون می‌ده. مرحله ۸ جایی است که تحلیل روند انجام می‌شه."

---

### SLIDE 25-26: Activity Diagram

**Visual:** Activity diagram + explanation

**Speaker Notes (Sadaf):**

> "Activity Diagram گردش کار رو نشون می‌ده. شروع، ورود لوکیشن، اعتبارسنجی، اگر معتبر بود: fetch داده، تحلیل، ذخیره، نمایش. اگر نامعتبر: نمایش خطا."

---

### SLIDE 27-28: State Diagram

**Visual:** State diagram + explanation

**Speaker Notes (Sadaf):**

> "State Diagram وضعیت‌های یک درخواست رو نشون می‌ده: Created، Processing، Completed، Failed، Archived. هر transition مشخص می‌کنه چه رویدادی باعث تغییر وضعیت می‌شه."

---

### SLIDE 29-30: Component Diagram

**Visual:** Component diagram + explanation

**Speaker Notes (Sadaf):**

> "Component Diagram اجزای سیستم رو نشون می‌ده: Frontend شامل Template‌ها، Backend شامل app.py و forecast.py و models.py، و External شامل SQLite و WeatherAPI."

---

### SLIDE 31: ER Diagram

**Visual:** ER diagram

**Content:**

```
DATABASE TABLES

weather_request
├── id (PK)
├── query
├── query_type
├── range_days
├── created_at
└── status

forecast_result
├── id (PK)
├── request_id (FK) ──────────┐
├── location_name              │
├── forecast_data              │
├── current_temp               │
└── created_at                 │
                               │
        1:N RELATIONSHIP ◄─────┘
```

**Speaker Notes (Sadaf):**

> "ER Diagram دو جدول اصلی داره: weather_request برای درخواست‌ها و forecast_result برای نتایج. رابطه یک به چند بین اونها وجود داره."

---

### SLIDE 32: System Architecture

**Visual:** Architecture diagram

**Speaker Notes (Asal):**

> "معماری سیستم از الگوی MVC پیروی می‌کنه. Client با Browser، Flask Application با Route‌ها و Model‌ها و Engine، و External با Database و API."

---

### SLIDE 33: Project Structure

**Visual:** File tree

**Speaker Notes (Asal):**

> "ساختار پروژه: app.py فایل اصلی Flask، forecast.py موتور پیش‌بینی، models.py مدل‌های دیتابیس، templates برای HTML‌ها، static برای CSS و JS، و diagrams برای PlantUML."

---

### SLIDE 34: How Day Range Works (KEY SLIDE)

**Visual:** Flowchart showing day range effect

**Content:**

```
HOW DAY RANGE AFFECTS PREDICTION

User Selects: 7 Days

STEP 1: Current Weather
GET /v1/current.json
Returns: NOW data

STEP 2: API Forecast
GET /v1/forecast.json?days=7  ← USER'S CHOICE
Returns: 7 days of predictions

STEP 3: Historical Data
GET /v1/history.json (×7)  ← ALWAYS 7 DAYS
Returns: Past 7 days for trend analysis

STEP 4: Trend Calculation
Linear regression on historical data
trend = Σ(xi - x̄)(yi - ȳ) / Σ(xi - x̄)²

STEP 5: Final Adjustment
final_temp = api_temp + (trend × 0.1)

The 0.1 factor keeps adjustments subtle!
```

**Speaker Notes (Asal):**

> "این یکی از مهم‌ترین اسلایدهاست. وقتی کاربر ۷ روز انتخاب می‌کنه، سیستم: اول داده فعلی می‌گیره، بعد ۷ روز پیش‌بینی API، بعد همیشه ۷ روز تاریخچه برای تحلیل روند. سپس با رگرسیون خطی روند محاسبه می‌شه و با ضریب ۰.۱ به پیش‌بینی API اضافه می‌شه."

---

### SLIDE 35: Trend Analysis Math

**Visual:** Mathematical formula with example

**Content:**

```
LINEAR REGRESSION FOR TREND

Formula:
m = Σ(xi - x̄)(yi - ȳ) / Σ(xi - x̄)²

EXAMPLE:
Historical temperatures: 8, 9, 10, 11, 12, 13, 14°C

Calculation:
• x (days): 1, 2, 3, 4, 5, 6, 7
• y (temps): 8, 9, 10, 11, 12, 13, 14
• x̄ = 4, ȳ = 11
• m = +1.0 (rising 1°C per day)

RESULT: Temperature is RISING
This trend adjusts the API forecast!
```

**Speaker Notes (Asal):**

> "فرمول رگرسیون خطی برای محاسبه روند. در این مثال، دماهای هفت روز گذشته از ۸ به ۱۴ درجه رسیده، یعنی روزانه یک درجه افزایش. این نشون می‌ده روند صعودیه و به پیش‌بینی API اضافه می‌شه."

---

### SLIDE 36: Input Validation

**Visual:** Input format examples

**Speaker Notes (Asal):**

> "سیستم فرمت‌های مختلف رو تشخیص می‌ده: شهر مثل Tehran، مختصات مثل ۳۵.۶۸ و ۵۱.۳۸، آدرس IP، کد پستی آمریکا، انگلیس و کانادا."

---

### SLIDE 37: Database Design

**Visual:** Database schema

**Speaker Notes (Asal):**

> "سه جدول در دیتابیس داریم: weather_request برای درخواست‌ها، forecast_result برای نتایج، و historical_cache برای کش کردن داده‌های تاریخی."

---

### SLIDE 38: Galaxy UI Theme

**Visual:** UI screenshots

**Speaker Notes (Sadaf):**

> "تم کهکشانی با رنگ‌های تیره، گرادیان بنفش و آبی، انیمیشن ستاره‌ها، و افکت Glassmorphism. طراحی Responsive برای موبایل و دسکتاپ."

---

### SLIDE 39-42: DEMO SLIDES

**Visual:** App screenshots

**Speaker Notes (Asal):**

> "حالا دمو زنده رو نشون می‌دیم. [Switch to browser] این صفحه اصلی است. لوکیشن Kish Island رو وارد می‌کنم، ۷ روز انتخاب می‌کنم، و Submit. این صفحه Loading با انیمیشن orbital. و این نتیجه: دمای فعلی، رطوبت، و پیش‌بینی ۷ روزه با تحلیل روند."

---

### SLIDE 43: Testing Approach

**Visual:** Testing types table

**Speaker Notes (Sadaf):**

> "چهار نوع تست انجام دادیم: Unit Testing برای توابع، Integration Testing برای API و دیتابیس، UI Testing برای رابط کاربری، و API Testing برای endpoint‌ها."

---

### SLIDE 44: Test Results

**Visual:** Test cases table

**Content:**

```
TEST RESULTS

TC-01: City Query "London"        ✅ PASS
TC-02: Coordinates "40.7,-74.0"   ✅ PASS
TC-03: Invalid Location           ✅ PASS (error shown)
TC-04: JSON Upload                ✅ PASS
TC-05: History Storage            ✅ PASS

All 5 test cases passed!
```

**Speaker Notes (Sadaf):**

> "نتایج تست: همه ۵ تست با موفقیت پاس شدن. Query شهر، مختصات، لوکیشن نامعتبر که خطا نشون می‌ده، آپلود JSON، و ذخیره تاریخچه."

---

### SLIDE 45: Performance Metrics

**Visual:** Performance table

**Content:**

```
PERFORMANCE RESULTS

Metric            Target    Actual    Status
Page Load         < 2s      1.2s      ✅
Forecast Gen      < 5s      3.5s      ✅
API Response      < 2s      0.8s      ✅
DB Query          < 100ms   45ms      ✅

All performance targets met!
```

**Speaker Notes (Sadaf):**

> "همه معیارهای عملکرد رعایت شدن: زمان لود صفحه ۱.۲ ثانیه، تولید پیش‌بینی ۳.۵ ثانیه، پاسخ API ۰.۸ ثانیه، و Query دیتابیس ۴۵ میلی‌ثانیه."

---

### SLIDE 46: Challenges Faced

**Visual:** Challenges and solutions

**Speaker Notes (Sadaf):**

> "چالش‌هایی که داشتیم: محدودیت Rate API، مدیریت فرمت‌های مختلف ورودی، ساخت انیمیشن Loading، و تنظیم وزن adjustment. برای هر کدوم راه‌حل پیدا کردیم."

---

### SLIDE 47: Lessons Learned

**Visual:** Key lessons

**Speaker Notes (Sadaf):**

> "درس‌هایی که یاد گرفتیم: اهمیت معماری ماژولار، مزایای environment variables، ارزش error handling مناسب، و کارایی متدولوژی Kanban."

---

### SLIDE 48: Future Enhancements

**Visual:** Future roadmap

**Content:**

```
FUTURE ENHANCEMENTS

🤖 Machine Learning
   Neural network forecasting

📱 Mobile App
   Native iOS/Android

🔔 Notifications
   Weather alerts

📊 Visualizations
   Historical charts

🌐 Multi-API
   Multiple data sources
```

**Speaker Notes (Sadaf):**

> "برای آینده: یادگیری ماشین برای پیش‌بینی بهتر، اپ موبایل، سیستم هشدار، نمودارهای تاریخی، و استفاده از چند API."

---

### SLIDE 49: Conclusion

**Visual:** Summary of achievements

**Content:**

```
PROJECT ACHIEVEMENTS

✅ Functional weather forecasting application
✅ Intelligent trend-based predictions
✅ Modern, responsive user interface
✅ Complete software engineering documentation
✅ 7 UML diagrams
✅ Successful Kanban implementation
✅ All requirements met
✅ All tests passed
```

**Speaker Notes (Sadaf):**

> "در نتیجه، ما یک اپلیکیشن کاربردی پیش‌بینی آب و هوا ساختیم با پیش‌بینی هوشمند، رابط کاربری مدرن، مستندات کامل، ۷ دیاگرام UML، و پیاده‌سازی موفق Kanban."

---

### SLIDE 50: Thank You

**Visual:** Thank you with contact info

**Content:**

```
🙏 THANK YOU!

GALAXY WEATHER
Intelligent Weather Forecasting

Team:
عسل هادیان (Asal Hadian)
صدف باقریان (Sadaf Bagherian)

Kish International Campus of Sharif University
Software Engineering Course
January 2026

❓ QUESTIONS?
```

**Speaker Notes (Both):**

> "ممنون از توجهتون. اگر سوالی دارید، خوشحال می‌شیم پاسخ بدیم."

---

## 🎨 AI PROMPT FOR POWERPOINT TEMPLATE

### Prompt for Gamma.app or Beautiful.ai:

```
Create a professional PowerPoint presentation template for a university
software engineering project called "Galaxy Weather".

THEME SPECIFICATIONS:
- Dark space/galaxy theme
- Primary color: Deep blue (#0a0a1a)
- Secondary: Purple gradient (#667eea to #764ba2)
- Accent: Cyan glow (#00d4ff)
- Text: White and light gray

DESIGN ELEMENTS:
- Subtle star pattern background
- Glass-morphism effect cards
- Weather icons (sun, cloud, rain, snow)
- Modern sans-serif fonts
- Persian/Farsi language support for names

REQUIRED LAYOUTS (50 slides):
1. Title slide - Full hero
2. Section dividers - Bold headers
3. Content slides - Bullet points
4. Image + text split layouts
5. Full-screen images for diagrams
6. Comparison tables
7. Code snippet slides (dark bg)
8. Quote/highlight slides
9. Thank you slide

CONTENT TO INCLUDE ON TITLE:
- "Galaxy Weather"
- "Intelligent Weather Forecasting Web Application"
- Team: Asal Hadian, Sadaf Bagherian
- University: Kish International Campus of Sharif University
- Course: Software Engineering
- Date: January 2026

Make it professional, modern, and visually stunning with subtle animations.
```

### Alternative Quick Prompt for Canva:

```
Design a dark, space-themed presentation for a weather forecasting
software project. Use deep blues, purples, and cyan accents.
50 slides including title, methodology, UML diagrams, architecture,
code demos, and conclusion. Professional university presentation style.
```

---

## 📸 SCREENSHOT CHECKLIST

Before presenting, ensure you have these screenshots:

```
□ trello_01_initial_setup.png      - Empty board
□ trello_02_backlog_filled.png     - All tasks added
□ trello_03_week1_progress.png     - Week 1 state
□ trello_04_week2_progress.png     - Week 2 state
□ trello_05_final_complete.png     - All in Done
□ trello_06_task_card_detail.png   - Open card view
□ app_01_homepage.png              - Index page
□ app_02_loading.png               - Loading animation
□ app_03_forecast_result.png       - Results page
□ app_04_history.png               - History page
□ uml_01_usecase.png               - Use Case diagram
□ uml_02_class.png                 - Class diagram
□ uml_03_sequence.png              - Sequence diagram
□ uml_04_activity.png              - Activity diagram
□ uml_05_state.png                 - State diagram
□ uml_06_component.png             - Component diagram
□ uml_07_er.png                    - ER diagram
```

---

## ✅ PRE-PRESENTATION CHECKLIST

```
□ All slides completed and reviewed
□ Speaker notes written for each slide
□ All screenshots included
□ UML diagrams exported as images
□ Demo environment tested
□ Internet connection verified (for API)
□ Backup offline mode available
□ Practiced presentation timing
□ Practiced transitions between presenters
□ Q&A answers prepared
```

---

**Good luck with your presentation!**

_Galaxy Weather - عسل هادیان و صدف باقریان_
_Kish International Campus of Sharif University_
