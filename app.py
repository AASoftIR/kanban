"""
Galaxy Weather - Flask Web Application
Main application file with routes and view logic.
"""

import os
import json
import glob
import zlib
import base64
import string
from datetime import datetime
from pathlib import Path
from flask import Flask, render_template, request, redirect, url_for, jsonify, flash, send_from_directory, Response
from dotenv import load_dotenv
import requests as http_requests

from models import WeatherRequest, ForecastResult, init_db
from forecast import ForecastEngine, WeatherDataFetcher, detect_query_type

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'galaxy_weather_secret')

# Initialize database
init_db()

# Initialize forecast engine
forecast_engine = ForecastEngine()


@app.route('/')
def index():
    """Main landing page with hero, about, contact, and forecast form."""
    # Get recent forecasts for history section
    recent_forecasts = ForecastResult.get_all_with_requests(limit=10)
    
    return render_template('index.html', forecasts=recent_forecasts)


@app.route('/forecast', methods=['POST'])
def create_forecast():
    """Handle forecast form submission."""
    try:
        # Get form data
        query = request.form.get('location', '').strip()
        range_days = int(request.form.get('days', 7))
        json_file = request.files.get('json_file')
        
        if not query and not json_file:
            flash('Please enter a location or upload a JSON file.', 'error')
            return redirect(url_for('index'))
        
        # Detect query type
        query_type = detect_query_type(query) if query else 'json_upload'
        
        # Create weather request
        weather_request = WeatherRequest(
            query=query or 'JSON Upload',
            query_type=query_type,
            range_days=range_days,
            status='processing'
        ).save()
        
        # Redirect to loading page
        return redirect(url_for('loading', request_id=weather_request.id, 
                               has_json='1' if json_file else '0'))
    
    except Exception as e:
        flash(f'Error creating forecast request: {str(e)}', 'error')
        return redirect(url_for('index'))


@app.route('/loading/<int:request_id>')
def loading(request_id):
    """Display loading animation while forecast is being processed."""
    has_json = request.args.get('has_json', '0') == '1'
    return render_template('loading.html', request_id=request_id, has_json=has_json)


@app.route('/process/<int:request_id>', methods=['POST'])
def process_forecast(request_id):
    """Process the forecast request (called via AJAX from loading page)."""
    try:
        weather_request = WeatherRequest.get_by_id(request_id)
        if not weather_request:
            return jsonify({'error': 'Request not found'}), 404
        
        # Check for JSON data in request
        json_data = None
        if request.is_json and request.json.get('json_data'):
            json_data = request.json.get('json_data')
        
        # Process forecast
        if json_data:
            # Process uploaded JSON
            forecast_data = forecast_engine.process_json_upload(json_data)
        else:
            # Fetch from API
            forecast_data = forecast_engine.generate_forecast(
                weather_request.query, 
                weather_request.range_days
            )
        
        if 'error' in forecast_data:
            weather_request.update_status('failed')
            return jsonify({'error': forecast_data['error']}), 400
        
        # Save forecast result
        location = forecast_data.get('location', {})
        current = forecast_data.get('current', {})
        
        forecast_result = ForecastResult(
            request_id=request_id,
            location_name=location.get('name', 'Unknown'),
            country=location.get('country', ''),
            latitude=location.get('lat'),
            longitude=location.get('lon'),
            forecast_data=forecast_data,
            current_temp=current.get('temp_c'),
            current_humidity=current.get('humidity'),
            current_condition=current.get('condition')
        ).save()
        
        # Update request status
        weather_request.update_status('completed')
        
        return jsonify({
            'success': True,
            'redirect': url_for('forecast_result', request_id=request_id)
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/forecast/<int:request_id>')
def forecast_result(request_id):
    """Display forecast results page."""
    weather_request = WeatherRequest.get_by_id(request_id)
    if not weather_request:
        flash('Forecast not found.', 'error')
        return redirect(url_for('index'))
    
    result = ForecastResult.get_by_request_id(request_id)
    if not result:
        flash('Forecast result not available.', 'error')
        return redirect(url_for('index'))
    
    forecast_data = result.get_forecast_data()
    
    return render_template('forecast.html', 
                          request=weather_request, 
                          result=result,
                          forecast=forecast_data)


@app.route('/history')
def history():
    """View all forecast history."""
    forecasts = ForecastResult.get_all_with_requests(limit=50)
    return render_template('history.html', forecasts=forecasts)


@app.route('/api/forecast', methods=['POST'])
def api_forecast():
    """API endpoint for programmatic forecast requests."""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        query = data.get('location') or data.get('query')
        days = data.get('days', 7)
        json_data = data.get('weather_data')
        
        if not query and not json_data:
            return jsonify({'error': 'Location or weather_data required'}), 400
        
        if json_data:
            forecast_data = forecast_engine.process_json_upload(json_data)
        else:
            forecast_data = forecast_engine.generate_forecast(query, days)
        
        return jsonify(forecast_data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/upload-json', methods=['POST'])
def upload_json():
    """Handle JSON file upload."""
    try:
        if 'json_file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
        
        file = request.files['json_file']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        if not file.filename.endswith('.json'):
            return jsonify({'error': 'File must be JSON'}), 400
        
        # Parse JSON content
        content = file.read().decode('utf-8')
        json_data = json.loads(content)
        
        return jsonify({'success': True, 'data': json_data})
    
    except json.JSONDecodeError:
        return jsonify({'error': 'Invalid JSON format'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.template_filter('datetime')
def format_datetime(value, format='%B %d, %Y %H:%M'):
    """Format datetime for display."""
    if isinstance(value, str):
        try:
            value = datetime.fromisoformat(value.replace('Z', '+00:00'))
        except:
            return value
    return value.strftime(format) if value else ''


@app.template_filter('date')
def format_date(value, format='%A, %B %d'):
    """Format date for display."""
    if isinstance(value, str):
        try:
            value = datetime.strptime(value, '%Y-%m-%d')
        except:
            return value
    return value.strftime(format) if value else ''


@app.context_processor
def utility_processor():
    """Add utility functions to template context."""
    return {
        'now': datetime.now(),
        'enumerate': enumerate
    }


# Error handlers
@app.errorhandler(404)
def not_found(e):
    """Handle 404 errors."""
    return render_template('index.html', error='Page not found'), 404


@app.errorhandler(500)
def server_error(e):
    """Handle 500 errors."""
    return render_template('index.html', error='Server error occurred'), 500


# ============================================
# 🥚 SECRET EASTER EGG ROUTES
# Access: /cosmos (hidden documentation portal)
# ============================================

@app.route('/cosmos')
def easter_egg_portal():
    """Secret easter egg route - Documentation & UML Portal."""
    base_path = Path(__file__).parent
    
    # Get all documentation files
    docs = {
        'readme': None,
        'final_report': None,
        'kanban_guide': None
    }
    
    # Read markdown files
    readme_path = base_path / 'README.md'
    if readme_path.exists():
        docs['readme'] = readme_path.read_text(encoding='utf-8')
    
    report_path = base_path / 'FINAL_REPORT.md'
    if report_path.exists():
        docs['final_report'] = report_path.read_text(encoding='utf-8')
    
    kanban_path = base_path / 'KANBAN_GUIDE.md'
    if kanban_path.exists():
        docs['kanban_guide'] = kanban_path.read_text(encoding='utf-8')
    
    # Get all UML diagrams
    diagrams_path = base_path / 'diagrams'
    uml_diagrams = {}
    if diagrams_path.exists():
        for puml_file in sorted(diagrams_path.glob('*.puml')):
            name = puml_file.stem
            content = puml_file.read_text(encoding='utf-8')
            uml_diagrams[name] = content
    
    # Get project stats
    stats = {
        'total_forecasts': len(ForecastResult.get_all_with_requests(limit=1000)),
        'python_files': len(list(base_path.glob('*.py'))),
        'templates': len(list((base_path / 'templates').glob('*.html'))) if (base_path / 'templates').exists() else 0,
        'static_files': len(list((base_path / 'static').glob('*.*'))) if (base_path / 'static').exists() else 0,
        'uml_diagrams': len(uml_diagrams)
    }
    
    return render_template('easter_egg.html', 
                          docs=docs, 
                          uml_diagrams=uml_diagrams,
                          stats=stats)


@app.route('/cosmos/uml/<diagram_name>')
def view_uml_raw(diagram_name):
    """View raw PlantUML source."""
    base_path = Path(__file__).parent / 'diagrams'
    file_path = base_path / f'{diagram_name}.puml'
    
    if file_path.exists():
        content = file_path.read_text(encoding='utf-8')
        return Response(content, mimetype='text/plain')
    
    return "Diagram not found", 404


def plantuml_encode(plantuml_text):
    """Encode PlantUML text to URL-safe format for the PlantUML server."""
    # Custom base64 alphabet used by PlantUML
    plantuml_alphabet = string.digits + string.ascii_uppercase + string.ascii_lowercase + '-_'
    base64_alphabet = string.ascii_uppercase + string.ascii_lowercase + string.digits + '+/'
    
    # Compress and encode
    compressed = zlib.compress(plantuml_text.encode('utf-8'))[2:-4]  # Remove zlib header/checksum
    
    # Convert to PlantUML's custom base64
    result = []
    for i in range(0, len(compressed), 3):
        chunk = compressed[i:i+3]
        if len(chunk) == 3:
            b1, b2, b3 = chunk
            result.append(plantuml_alphabet[b1 >> 2])
            result.append(plantuml_alphabet[((b1 & 0x3) << 4) | (b2 >> 4)])
            result.append(plantuml_alphabet[((b2 & 0xF) << 2) | (b3 >> 6)])
            result.append(plantuml_alphabet[b3 & 0x3F])
        elif len(chunk) == 2:
            b1, b2 = chunk
            result.append(plantuml_alphabet[b1 >> 2])
            result.append(plantuml_alphabet[((b1 & 0x3) << 4) | (b2 >> 4)])
            result.append(plantuml_alphabet[(b2 & 0xF) << 2])
        elif len(chunk) == 1:
            b1 = chunk[0]
            result.append(plantuml_alphabet[b1 >> 2])
            result.append(plantuml_alphabet[(b1 & 0x3) << 4])
    
    return ''.join(result)


@app.route('/cosmos/uml/image/<diagram_name>')
def get_uml_image(diagram_name):
    """Generate and serve UML diagram as PNG image using PlantUML server."""
    base_path = Path(__file__).parent / 'diagrams'
    file_path = base_path / f'{diagram_name}.puml'
    
    if not file_path.exists():
        return "Diagram not found", 404
    
    content = file_path.read_text(encoding='utf-8')
    
    # Encode for PlantUML server
    encoded = plantuml_encode(content)
    
    # Use PlantUML public server to generate image
    plantuml_url = f'http://www.plantuml.com/plantuml/png/{encoded}'
    
    try:
        response = http_requests.get(plantuml_url, timeout=30)
        if response.status_code == 200:
            return Response(response.content, mimetype='image/png')
        else:
            return f"Error generating diagram: {response.status_code}", 500
    except Exception as e:
        return f"Error: {str(e)}", 500


@app.route('/cosmos/uml/svg/<diagram_name>')
def get_uml_svg(diagram_name):
    """Generate and serve UML diagram as SVG using PlantUML server."""
    base_path = Path(__file__).parent / 'diagrams'
    file_path = base_path / f'{diagram_name}.puml'
    
    if not file_path.exists():
        return "Diagram not found", 404
    
    content = file_path.read_text(encoding='utf-8')
    
    # Encode for PlantUML server
    encoded = plantuml_encode(content)
    
    # Use PlantUML public server to generate SVG
    plantuml_url = f'http://www.plantuml.com/plantuml/svg/{encoded}'
    
    try:
        response = http_requests.get(plantuml_url, timeout=30)
        if response.status_code == 200:
            return Response(response.content, mimetype='image/svg+xml')
        else:
            return f"Error generating diagram: {response.status_code}", 500
    except Exception as e:
        return f"Error: {str(e)}", 500


@app.route('/cosmos/doc/<doc_name>')
def view_doc_raw(doc_name):
    """View raw markdown document."""
    base_path = Path(__file__).parent
    
    doc_map = {
        'readme': 'README.md',
        'final_report': 'FINAL_REPORT.md',
        'kanban_guide': 'KANBAN_GUIDE.md'
    }
    
    if doc_name in doc_map:
        file_path = base_path / doc_map[doc_name]
        if file_path.exists():
            content = file_path.read_text(encoding='utf-8')
            return Response(content, mimetype='text/plain; charset=utf-8')
    
    return "Document not found", 404


@app.route('/cosmos/download/<file_type>/<file_name>')
def download_file(file_type, file_name):
    """Download documentation files."""
    base_path = Path(__file__).parent
    
    if file_type == 'uml':
        directory = base_path / 'diagrams'
        filename = f'{file_name}.puml'
    elif file_type == 'doc':
        directory = base_path
        doc_map = {
            'readme': 'README.md',
            'final_report': 'FINAL_REPORT.md',
            'kanban_guide': 'KANBAN_GUIDE.md'
        }
        filename = doc_map.get(file_name, '')
    else:
        return "Invalid file type", 400
    
    if filename and (directory / filename).exists():
        return send_from_directory(directory, filename, as_attachment=True)
    
    return "File not found", 404


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
