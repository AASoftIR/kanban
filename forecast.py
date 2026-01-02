"""
Galaxy Weather - Forecasting Engine
Implements weather data fetching and forecasting logic using moving averages and linear trends.
"""

import os
import requests
import json
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

WEATHERAPI_KEY = os.getenv('WEATHERAPI_KEY')
WEATHERAPI_BASE_URL = 'http://api.weatherapi.com/v1'


class WeatherDataFetcher:
    """Fetches weather data from WeatherAPI."""
    
    def __init__(self, api_key=None):
        self.api_key = api_key or WEATHERAPI_KEY
        
    def get_current(self, query):
        """
        Fetch current weather data.
        
        Args:
            query: City name, lat/lon, IP address, or postal code
            
        Returns:
            dict: Current weather data or None if error
        """
        try:
            url = f"{WEATHERAPI_BASE_URL}/current.json"
            params = {
                'key': self.api_key,
                'q': query,
                'aqi': 'yes'
            }
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching current weather: {e}")
            return None
    
    def get_forecast(self, query, days=10):
        """
        Fetch weather forecast data.
        
        Args:
            query: Location query
            days: Number of forecast days (1-10)
            
        Returns:
            dict: Forecast data or None if error
        """
        try:
            url = f"{WEATHERAPI_BASE_URL}/forecast.json"
            params = {
                'key': self.api_key,
                'q': query,
                'days': min(days, 10),
                'aqi': 'yes',
                'alerts': 'yes'
            }
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching forecast: {e}")
            return None
    
    def get_history(self, query, date):
        """
        Fetch historical weather data for a specific date.
        
        Args:
            query: Location query
            date: Date string in YYYY-MM-DD format
            
        Returns:
            dict: Historical weather data or None if error
        """
        try:
            url = f"{WEATHERAPI_BASE_URL}/history.json"
            params = {
                'key': self.api_key,
                'q': query,
                'dt': date
            }
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching history for {date}: {e}")
            return None
    
    def get_history_range(self, query, days_back=7):
        """
        Fetch historical data for multiple past days.
        
        Args:
            query: Location query
            days_back: Number of days to look back
            
        Returns:
            list: List of historical data dicts
        """
        historical_data = []
        today = datetime.now()
        
        for i in range(1, days_back + 1):
            date = (today - timedelta(days=i)).strftime('%Y-%m-%d')
            data = self.get_history(query, date)
            if data:
                historical_data.append(data)
        
        return historical_data


class ForecastEngine:
    """
    Generates weather forecasts using statistical analysis.
    Implements moving average and linear trend forecasting.
    """
    
    def __init__(self):
        self.fetcher = WeatherDataFetcher()
    
    def analyze_history(self, historical_data):
        """
        Analyze historical weather data to extract trends.
        
        Args:
            historical_data: List of historical weather data dicts
            
        Returns:
            dict: Analysis results with trends
        """
        if not historical_data:
            return None
        
        temps = []
        humidities = []
        conditions = []
        
        for data in historical_data:
            try:
                forecast_day = data.get('forecast', {}).get('forecastday', [])
                if forecast_day:
                    day_data = forecast_day[0].get('day', {})
                    temps.append({
                        'avg': day_data.get('avgtemp_c', 0),
                        'max': day_data.get('maxtemp_c', 0),
                        'min': day_data.get('mintemp_c', 0)
                    })
                    humidities.append(day_data.get('avghumidity', 0))
                    conditions.append(day_data.get('condition', {}).get('text', 'Unknown'))
            except (KeyError, IndexError):
                continue
        
        if not temps:
            return None
        
        # Calculate trends
        avg_temps = [t['avg'] for t in temps]
        temp_trend = self._calculate_trend(avg_temps)
        humidity_trend = self._calculate_trend(humidities)
        
        return {
            'avg_temperature': sum(avg_temps) / len(avg_temps),
            'avg_humidity': sum(humidities) / len(humidities) if humidities else 0,
            'temp_trend': temp_trend,
            'humidity_trend': humidity_trend,
            'common_conditions': self._most_common(conditions),
            'temp_history': temps,
            'humidity_history': humidities
        }
    
    def _calculate_trend(self, values):
        """
        Calculate linear trend coefficient using simple linear regression.
        
        Args:
            values: List of numeric values
            
        Returns:
            float: Trend coefficient (positive = increasing, negative = decreasing)
        """
        if len(values) < 2:
            return 0
        
        n = len(values)
        x = list(range(n))
        
        # Simple linear regression: y = mx + b
        x_mean = sum(x) / n
        y_mean = sum(values) / n
        
        numerator = sum((x[i] - x_mean) * (values[i] - y_mean) for i in range(n))
        denominator = sum((x[i] - x_mean) ** 2 for i in range(n))
        
        if denominator == 0:
            return 0
        
        return numerator / denominator
    
    def _most_common(self, items):
        """Find the most common item in a list."""
        if not items:
            return 'Unknown'
        
        counts = {}
        for item in items:
            counts[item] = counts.get(item, 0) + 1
        
        return max(counts, key=counts.get)
    
    def _moving_average(self, values, window=3):
        """
        Calculate moving average with given window size.
        
        Args:
            values: List of numeric values
            window: Window size for averaging
            
        Returns:
            list: Moving averages
        """
        if len(values) < window:
            return values
        
        result = []
        for i in range(len(values) - window + 1):
            avg = sum(values[i:i+window]) / window
            result.append(avg)
        
        return result
    
    def generate_forecast(self, query, days=7, use_api_forecast=True):
        """
        Generate weather forecast combining API data and trend analysis.
        
        Args:
            query: Location query
            days: Number of days to forecast (1-10)
            use_api_forecast: Whether to use API forecast as base
            
        Returns:
            dict: Complete forecast result
        """
        days = min(max(days, 1), 10)
        
        # Fetch current weather
        current_data = self.fetcher.get_current(query)
        if not current_data:
            return {'error': 'Failed to fetch current weather data'}
        
        # Fetch API forecast
        api_forecast = None
        if use_api_forecast:
            api_forecast = self.fetcher.get_forecast(query, days)
        
        # Fetch historical data for trend analysis
        historical_data = self.fetcher.get_history_range(query, days_back=7)
        analysis = self.analyze_history(historical_data)
        
        # Build forecast result
        location = current_data.get('location', {})
        current = current_data.get('current', {})
        
        result = {
            'location': {
                'name': location.get('name'),
                'country': location.get('country'),
                'lat': location.get('lat'),
                'lon': location.get('lon'),
                'localtime': location.get('localtime')
            },
            'current': {
                'temp_c': current.get('temp_c'),
                'temp_f': current.get('temp_f'),
                'humidity': current.get('humidity'),
                'condition': current.get('condition', {}).get('text'),
                'condition_icon': current.get('condition', {}).get('icon'),
                'wind_kph': current.get('wind_kph'),
                'wind_dir': current.get('wind_dir'),
                'pressure_mb': current.get('pressure_mb'),
                'feelslike_c': current.get('feelslike_c'),
                'uv': current.get('uv'),
                'air_quality': current.get('air_quality', {})
            },
            'analysis': analysis,
            'forecast_days': []
        }
        
        # Process API forecast data
        if api_forecast and 'forecast' in api_forecast:
            for day_data in api_forecast['forecast']['forecastday']:
                day = day_data.get('day', {})
                astro = day_data.get('astro', {})
                
                # Apply trend adjustments if analysis available
                adjusted_temp = day.get('avgtemp_c', 0)
                adjusted_humidity = day.get('avghumidity', 0)
                
                if analysis:
                    # Small adjustment based on historical trends
                    adjusted_temp += analysis.get('temp_trend', 0) * 0.1
                    adjusted_humidity += analysis.get('humidity_trend', 0) * 0.1
                
                forecast_day = {
                    'date': day_data.get('date'),
                    'temp_c': {
                        'avg': round(adjusted_temp, 1),
                        'max': day.get('maxtemp_c'),
                        'min': day.get('mintemp_c')
                    },
                    'humidity': round(adjusted_humidity, 1),
                    'condition': day.get('condition', {}).get('text'),
                    'condition_icon': day.get('condition', {}).get('icon'),
                    'chance_of_rain': day.get('daily_chance_of_rain', 0),
                    'chance_of_snow': day.get('daily_chance_of_snow', 0),
                    'uv': day.get('uv'),
                    'sunrise': astro.get('sunrise'),
                    'sunset': astro.get('sunset'),
                    'moon_phase': astro.get('moon_phase')
                }
                result['forecast_days'].append(forecast_day)
        
        return result
    
    def process_json_upload(self, json_data):
        """
        Process uploaded JSON weather data.
        
        Args:
            json_data: Parsed JSON data from upload
            
        Returns:
            dict: Processed forecast result
        """
        try:
            # Handle different JSON formats
            if isinstance(json_data, list):
                # List of weather readings
                return self._process_weather_list(json_data)
            elif isinstance(json_data, dict):
                # Single weather object or WeatherAPI format
                if 'forecast' in json_data:
                    return json_data
                else:
                    return self._process_single_weather(json_data)
            else:
                return {'error': 'Invalid JSON format'}
        except Exception as e:
            return {'error': f'Error processing JSON: {str(e)}'}
    
    def _process_weather_list(self, weather_list):
        """Process a list of weather readings."""
        if not weather_list:
            return {'error': 'Empty weather data list'}
        
        temps = []
        humidities = []
        
        for reading in weather_list:
            if 'temperature' in reading:
                temps.append(reading['temperature'])
            if 'temp' in reading:
                temps.append(reading['temp'])
            if 'humidity' in reading:
                humidities.append(reading['humidity'])
        
        return {
            'source': 'uploaded_json',
            'analysis': {
                'avg_temperature': sum(temps) / len(temps) if temps else 0,
                'avg_humidity': sum(humidities) / len(humidities) if humidities else 0,
                'temp_trend': self._calculate_trend(temps),
                'data_points': len(weather_list)
            }
        }
    
    def _process_single_weather(self, weather_data):
        """Process a single weather data object."""
        return {
            'source': 'uploaded_json',
            'current': {
                'temp_c': weather_data.get('temperature') or weather_data.get('temp'),
                'humidity': weather_data.get('humidity'),
                'condition': weather_data.get('condition') or weather_data.get('weather')
            }
        }


def detect_query_type(query):
    """
    Detect the type of location query.
    
    Args:
        query: Location query string
        
    Returns:
        str: Query type (city, coordinates, ip, postal_us, postal_uk, postal_ca)
    """
    import re
    
    query = query.strip()
    
    # IP address pattern
    ip_pattern = r'^(\d{1,3}\.){3}\d{1,3}$'
    if re.match(ip_pattern, query):
        return 'ip'
    
    # Coordinates pattern (lat,lon)
    coord_pattern = r'^-?\d+\.?\d*\s*,\s*-?\d+\.?\d*$'
    if re.match(coord_pattern, query):
        return 'coordinates'
    
    # US postal code (5 digits or 5+4)
    us_postal = r'^\d{5}(-\d{4})?$'
    if re.match(us_postal, query):
        return 'postal_us'
    
    # UK postal code
    uk_postal = r'^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$'
    if re.match(uk_postal, query, re.IGNORECASE):
        return 'postal_uk'
    
    # Canadian postal code
    ca_postal = r'^[A-Z]\d[A-Z]\s*\d[A-Z]\d$'
    if re.match(ca_postal, query, re.IGNORECASE):
        return 'postal_ca'
    
    # Default to city name
    return 'city'
