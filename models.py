"""
Galaxy Weather - Database Models
SQLite database models for storing weather forecast requests and results.
"""

import sqlite3
from datetime import datetime
import json
import os

DATABASE_PATH = os.path.join(os.path.dirname(__file__), 'database.db')


def get_db_connection():
    """Create and return a database connection."""
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initialize the database with required tables."""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Weather Request Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS weather_request (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            query TEXT NOT NULL,
            query_type TEXT NOT NULL,
            range_days INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'created'
        )
    ''')
    
    # Forecast Result Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS forecast_result (
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
        )
    ''')
    
    # Historical Data Cache Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS historical_cache (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            location_query TEXT NOT NULL,
            date TEXT NOT NULL,
            avg_temp REAL,
            max_temp REAL,
            min_temp REAL,
            humidity REAL,
            condition TEXT,
            cached_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(location_query, date)
        )
    ''')
    
    conn.commit()
    conn.close()


class WeatherRequest:
    """Model for weather forecast requests."""
    
    def __init__(self, id=None, query=None, query_type=None, range_days=None, 
                 created_at=None, status='created'):
        self.id = id
        self.query = query
        self.query_type = query_type
        self.range_days = range_days
        self.created_at = created_at or datetime.now()
        self.status = status
    
    def save(self):
        """Save the request to database."""
        conn = get_db_connection()
        cursor = conn.cursor()
        
        if self.id is None:
            cursor.execute('''
                INSERT INTO weather_request (query, query_type, range_days, status)
                VALUES (?, ?, ?, ?)
            ''', (self.query, self.query_type, self.range_days, self.status))
            self.id = cursor.lastrowid
        else:
            cursor.execute('''
                UPDATE weather_request 
                SET query = ?, query_type = ?, range_days = ?, status = ?
                WHERE id = ?
            ''', (self.query, self.query_type, self.range_days, self.status, self.id))
        
        conn.commit()
        conn.close()
        return self
    
    def update_status(self, status):
        """Update the request status."""
        self.status = status
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('UPDATE weather_request SET status = ? WHERE id = ?', 
                      (status, self.id))
        conn.commit()
        conn.close()
    
    @staticmethod
    def get_by_id(request_id):
        """Retrieve a request by ID."""
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM weather_request WHERE id = ?', (request_id,))
        row = cursor.fetchone()
        conn.close()
        
        if row:
            return WeatherRequest(
                id=row['id'],
                query=row['query'],
                query_type=row['query_type'],
                range_days=row['range_days'],
                created_at=row['created_at'],
                status=row['status']
            )
        return None
    
    @staticmethod
    def get_all(limit=50):
        """Retrieve all requests, ordered by creation date."""
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('''
            SELECT * FROM weather_request 
            ORDER BY created_at DESC 
            LIMIT ?
        ''', (limit,))
        rows = cursor.fetchall()
        conn.close()
        
        return [WeatherRequest(
            id=row['id'],
            query=row['query'],
            query_type=row['query_type'],
            range_days=row['range_days'],
            created_at=row['created_at'],
            status=row['status']
        ) for row in rows]


class ForecastResult:
    """Model for forecast results."""
    
    def __init__(self, id=None, request_id=None, location_name=None, country=None,
                 latitude=None, longitude=None, forecast_data=None, current_temp=None,
                 current_humidity=None, current_condition=None, created_at=None):
        self.id = id
        self.request_id = request_id
        self.location_name = location_name
        self.country = country
        self.latitude = latitude
        self.longitude = longitude
        self.forecast_data = forecast_data  # JSON string
        self.current_temp = current_temp
        self.current_humidity = current_humidity
        self.current_condition = current_condition
        self.created_at = created_at or datetime.now()
    
    def save(self):
        """Save the result to database."""
        conn = get_db_connection()
        cursor = conn.cursor()
        
        forecast_json = json.dumps(self.forecast_data) if isinstance(self.forecast_data, (dict, list)) else self.forecast_data
        
        if self.id is None:
            cursor.execute('''
                INSERT INTO forecast_result 
                (request_id, location_name, country, latitude, longitude, 
                 forecast_data, current_temp, current_humidity, current_condition)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (self.request_id, self.location_name, self.country, 
                  self.latitude, self.longitude, forecast_json,
                  self.current_temp, self.current_humidity, self.current_condition))
            self.id = cursor.lastrowid
        else:
            cursor.execute('''
                UPDATE forecast_result 
                SET location_name = ?, country = ?, latitude = ?, longitude = ?,
                    forecast_data = ?, current_temp = ?, current_humidity = ?, 
                    current_condition = ?
                WHERE id = ?
            ''', (self.location_name, self.country, self.latitude, self.longitude,
                  forecast_json, self.current_temp, self.current_humidity,
                  self.current_condition, self.id))
        
        conn.commit()
        conn.close()
        return self
    
    def get_forecast_data(self):
        """Parse and return forecast data as dictionary."""
        if isinstance(self.forecast_data, str):
            return json.loads(self.forecast_data)
        return self.forecast_data
    
    @staticmethod
    def get_by_request_id(request_id):
        """Retrieve result by request ID."""
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM forecast_result WHERE request_id = ?', (request_id,))
        row = cursor.fetchone()
        conn.close()
        
        if row:
            return ForecastResult(
                id=row['id'],
                request_id=row['request_id'],
                location_name=row['location_name'],
                country=row['country'],
                latitude=row['latitude'],
                longitude=row['longitude'],
                forecast_data=row['forecast_data'],
                current_temp=row['current_temp'],
                current_humidity=row['current_humidity'],
                current_condition=row['current_condition'],
                created_at=row['created_at']
            )
        return None
    
    @staticmethod
    def get_all_with_requests(limit=20):
        """Get all results with their associated requests."""
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('''
            SELECT fr.*, wr.query, wr.range_days, wr.status as request_status
            FROM forecast_result fr
            JOIN weather_request wr ON fr.request_id = wr.id
            ORDER BY fr.created_at DESC
            LIMIT ?
        ''', (limit,))
        rows = cursor.fetchall()
        conn.close()
        
        results = []
        for row in rows:
            result = ForecastResult(
                id=row['id'],
                request_id=row['request_id'],
                location_name=row['location_name'],
                country=row['country'],
                latitude=row['latitude'],
                longitude=row['longitude'],
                forecast_data=row['forecast_data'],
                current_temp=row['current_temp'],
                current_humidity=row['current_humidity'],
                current_condition=row['current_condition'],
                created_at=row['created_at']
            )
            result.query = row['query']
            result.range_days = row['range_days']
            result.request_status = row['request_status']
            results.append(result)
        
        return results


# Initialize database on import
init_db()
