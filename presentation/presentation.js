// ==================== Galaxy Weather Presentation Script ====================

// Initialize Reveal.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Reveal.js with configuration
    Reveal.initialize({
        hash: true,
        slideNumber: 'c/t',
        showSlideNumber: 'all',
        transition: 'slide',
        transitionSpeed: 'default',
        backgroundTransition: 'fade',
        center: true,
        width: 1200,
        height: 700,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 1.5,
        controls: true,
        progress: true,
        history: true,
        keyboard: true,
        overview: true,
        touch: true,
        loop: false,
        rtl: false,
        autoSlide: 0,
        mouseWheel: false,
        hideAddressBar: true,
        previewLinks: false,
    });

    // Export button click handler
    document.getElementById('exportBtn').addEventListener('click', exportToPPTX);
});

// ==================== PowerPoint Export Function ====================

async function exportToPPTX() {
    const btn = document.getElementById('exportBtn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exporting...';
    btn.disabled = true;

    try {
        // Create new presentation
        const pptx = new PptxGenJS();
        
        // Set presentation properties
        pptx.author = 'Asal Hadian & Sadaf Bagherian';
        pptx.title = 'Galaxy Weather Presentation';
        pptx.subject = 'Intelligent Weather Forecasting Web Application';
        pptx.company = 'Kish International Campus of Sharif University';
        
        // Define theme colors
        const colors = {
            primary: '0a0a1a',
            secondary: '1a1a3a',
            accent: '667eea',
            cyan: '00d4ff',
            text: 'ffffff',
            textMuted: 'b0b0c0',
            success: '4ade80',
            danger: 'f87171'
        };

        // Define master slide
        pptx.defineSlideMaster({
            title: 'GALAXY_MASTER',
            background: { color: colors.primary },
            objects: [
                { rect: { x: 0, y: 0, w: '100%', h: '100%', fill: { type: 'solid', color: colors.primary } } }
            ]
        });

        // ==================== Slide 1: Title ====================
        let slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🌌', { x: 4.5, y: 0.5, w: 1, h: 0.8, fontSize: 48, align: 'center' });
        slide.addText('Galaxy Weather', { 
            x: 0.5, y: 1.5, w: 9, h: 1, 
            fontSize: 44, bold: true, align: 'center',
            color: colors.cyan
        });
        slide.addText('Intelligent Weather Forecasting Web Application', { 
            x: 0.5, y: 2.5, w: 9, h: 0.5, 
            fontSize: 20, align: 'center', color: colors.textMuted
        });
        slide.addText('Asal Hadian (عسل هادیان) — Backend Developer\nSadaf Bagherian (صدف باقریان) — Frontend Developer & Documentation', { 
            x: 0.5, y: 3.3, w: 9, h: 1, 
            fontSize: 14, align: 'center', color: colors.text
        });
        slide.addText('Kish International Campus of Sharif University\nSoftware Engineering Course • January 2026', { 
            x: 0.5, y: 4.5, w: 9, h: 0.8, 
            fontSize: 12, align: 'center', color: colors.textMuted
        });

        // ==================== Slide 2: Agenda ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📋 Agenda', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        const agendaItems = [
            '01  Introduction & Problem',
            '02  Project Objectives',
            '03  Kanban Methodology',
            '04  System Requirements',
            '05  UML Diagrams',
            '06  System Architecture',
            '07  Implementation',
            '08  Demo & Testing',
            '09  Conclusion'
        ];
        agendaItems.forEach((item, idx) => {
            slide.addText(item, { 
                x: 1, y: 1.1 + (idx * 0.45), w: 8, h: 0.4, 
                fontSize: 16, color: colors.text
            });
        });

        // ==================== Slide 3: Problem Statement ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('⚠️ Problem Statement', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        // Problems column
        slide.addText('Existing Apps Lack', { x: 0.5, y: 1, w: 4, h: 0.4, fontSize: 18, bold: true, color: colors.danger });
        const problems = ['❌ Limited input format support', '❌ No custom data analysis', '❌ Basic display without trends', '❌ No history storage', '❌ Outdated interfaces'];
        problems.forEach((p, idx) => {
            slide.addText(p, { x: 0.5, y: 1.5 + (idx * 0.4), w: 4, h: 0.35, fontSize: 14, color: colors.text });
        });
        
        // Solutions column
        slide.addText('Galaxy Weather Provides', { x: 5, y: 1, w: 4.5, h: 0.4, fontSize: 18, bold: true, color: colors.success });
        const solutions = ['✓ Multi-format location input', '✓ JSON file upload & analysis', '✓ Intelligent trend analysis', '✓ Forecast history storage', '✓ Modern galaxy-themed UI'];
        solutions.forEach((s, idx) => {
            slide.addText(s, { x: 5, y: 1.5 + (idx * 0.4), w: 4.5, h: 0.35, fontSize: 14, color: colors.text });
        });

        // ==================== Slide 4: Objectives ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🎯 Project Objectives', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        const objectives = [
            '1. Build a functional weather forecasting web application',
            '2. Implement intelligent forecasting algorithms with trend analysis',
            '3. Create an engaging, modern user interface',
            '4. Apply software engineering best practices',
            '5. Document with comprehensive UML diagrams',
            '6. Use Kanban methodology for project management'
        ];
        objectives.forEach((obj, idx) => {
            slide.addText(obj, { 
                x: 0.5, y: 1.1 + (idx * 0.55), w: 9, h: 0.5, 
                fontSize: 16, color: colors.text,
                fill: { color: '1a1a3a' },
                line: { color: '333355', pt: 1 }
            });
        });

        // ==================== Slide 5: Why Kanban ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📊 Why We Chose Kanban', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        // Comparison table
        const tableData = [
            [{ text: 'Feature', options: { bold: true, fill: '333355', color: colors.cyan } }, 
             { text: 'Kanban ✓', options: { bold: true, fill: '333355', color: colors.success } },
             { text: 'Scrum', options: { bold: true, fill: '333355', color: colors.text } },
             { text: 'Waterfall', options: { bold: true, fill: '333355', color: colors.text } }],
            ['Fixed Iterations', { text: 'No', options: { color: colors.success } }, 'Yes (Sprints)', 'Yes (Phases)'],
            ['Team Size', { text: 'Any (2+ ideal)', options: { color: colors.success } }, '5-9 members', 'Any'],
            ['Flexibility', { text: 'High', options: { color: colors.success } }, 'Medium', 'Low'],
            ['Overhead', { text: 'Minimal', options: { color: colors.success } }, 'High', 'High']
        ];
        slide.addTable(tableData, { 
            x: 0.5, y: 1.1, w: 9, h: 2.5,
            fontSize: 12,
            color: colors.text,
            border: { pt: 1, color: '444466' },
            fill: colors.primary
        });
        slide.addText('Perfect for our 2-person team with continuous delivery focus!', { 
            x: 0.5, y: 4, w: 9, h: 0.4, fontSize: 14, italic: true, color: colors.cyan, align: 'center'
        });

        // ==================== Slide 6: Kanban Board ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📋 Our 5-Column Kanban Board', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const columns = [
            { name: 'Backlog', wip: '∞', color: '6b7280', desc: 'All tasks' },
            { name: 'To Do', wip: '4', color: '3b82f6', desc: 'Ready' },
            { name: 'In Progress', wip: '2', color: 'f59e0b', desc: 'Active' },
            { name: 'Testing', wip: '2', color: '8b5cf6', desc: 'Review' },
            { name: 'Done', wip: '∞', color: '10b981', desc: 'Complete' }
        ];
        
        columns.forEach((col, idx) => {
            const x = 0.5 + (idx * 1.9);
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.2, w: 1.7, h: 2.5, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addShape(pptx.shapes.RECTANGLE, { x: x + 0.1, y: 1.3, w: 1.5, h: 0.4, fill: col.color });
            slide.addText(col.name, { x: x, y: 1.3, w: 1.7, h: 0.4, fontSize: 11, bold: true, color: 'ffffff', align: 'center' });
            slide.addText('WIP: ' + col.wip, { x: x, y: 1.8, w: 1.7, h: 0.3, fontSize: 10, color: colors.textMuted, align: 'center' });
            slide.addText(col.desc, { x: x, y: 2.2, w: 1.7, h: 0.3, fontSize: 10, color: colors.textMuted, align: 'center' });
            if (idx < 4) {
                slide.addText('→', { x: x + 1.7, y: 1.8, w: 0.2, h: 0.4, fontSize: 20, color: colors.cyan });
            }
        });

        // ==================== Slide 7: Team Distribution ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('👥 Team Task Distribution', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        // Asal
        slide.addText('👩‍💻 Asal Hadian', { x: 0.5, y: 1, w: 4, h: 0.4, fontSize: 18, bold: true, color: colors.text });
        slide.addText('Backend Developer', { x: 0.5, y: 1.4, w: 4, h: 0.3, fontSize: 12, color: colors.cyan });
        const asalTasks = ['• API analysis & integration', '• Database design (SQLite)', '• Forecasting algorithm', '• Flask application', '• Error handling'];
        asalTasks.forEach((t, idx) => {
            slide.addText(t, { x: 0.5, y: 1.8 + (idx * 0.35), w: 4, h: 0.3, fontSize: 12, color: colors.text });
        });
        
        // Sadaf
        slide.addText('👩‍🎨 Sadaf Bagherian', { x: 5, y: 1, w: 4.5, h: 0.4, fontSize: 18, bold: true, color: colors.text });
        slide.addText('Frontend & Documentation', { x: 5, y: 1.4, w: 4.5, h: 0.3, fontSize: 12, color: colors.cyan });
        const sadafTasks = ['• Galaxy UI/UX design', '• HTML/CSS templates', '• JavaScript animations', '• UML diagrams', '• Report writing'];
        sadafTasks.forEach((t, idx) => {
            slide.addText(t, { x: 5, y: 1.8 + (idx * 0.35), w: 4.5, h: 0.3, fontSize: 12, color: colors.text });
        });

        // ==================== Slide 8: Requirements ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📋 Functional Requirements', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const reqTable = [
            [{ text: 'ID', options: { bold: true, fill: '333355', color: colors.cyan } }, 
             { text: 'Requirement', options: { bold: true, fill: '333355', color: colors.cyan } },
             { text: 'Priority', options: { bold: true, fill: '333355', color: colors.cyan } }],
            ['FR-01', 'Multi-format location input', { text: 'Must Have', options: { color: colors.danger } }],
            ['FR-02', 'Fetch weather from external API', { text: 'Must Have', options: { color: colors.danger } }],
            ['FR-03', 'JSON file upload for custom data', { text: 'Should Have', options: { color: 'fbbf24' } }],
            ['FR-04', 'Trend-based forecast calculation', { text: 'Must Have', options: { color: colors.danger } }],
            ['FR-05', 'Store forecasts in database', { text: 'Must Have', options: { color: colors.danger } }],
            ['FR-06', 'View forecast history', { text: 'Should Have', options: { color: 'fbbf24' } }]
        ];
        slide.addTable(reqTable, { 
            x: 0.5, y: 1.1, w: 9, h: 3,
            fontSize: 12,
            color: colors.text,
            border: { pt: 1, color: '444466' },
            fill: colors.primary
        });

        // ==================== Slide 9: Tech Stack ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🔧 Technology Stack', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        // Backend
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 2.8, h: 2.2, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
        slide.addText('Backend', { x: 0.5, y: 1.2, w: 2.8, h: 0.4, fontSize: 14, bold: true, color: colors.cyan, align: 'center' });
        slide.addText('🐍 Python 3.8+\n🌶️ Flask 3.0\n🗄️ SQLite', { x: 0.5, y: 1.7, w: 2.8, h: 1.5, fontSize: 14, color: colors.text, align: 'center' });
        
        // Frontend
        slide.addShape(pptx.shapes.RECTANGLE, { x: 3.5, y: 1.1, w: 2.8, h: 2.2, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
        slide.addText('Frontend', { x: 3.5, y: 1.2, w: 2.8, h: 0.4, fontSize: 14, bold: true, color: colors.cyan, align: 'center' });
        slide.addText('📄 HTML5\n🎨 CSS3\n⚡ JavaScript', { x: 3.5, y: 1.7, w: 2.8, h: 1.5, fontSize: 14, color: colors.text, align: 'center' });
        
        // External
        slide.addShape(pptx.shapes.RECTANGLE, { x: 6.5, y: 1.1, w: 2.8, h: 2.2, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
        slide.addText('External', { x: 6.5, y: 1.2, w: 2.8, h: 0.4, fontSize: 14, bold: true, color: colors.cyan, align: 'center' });
        slide.addText('🌤️ WeatherAPI\n📋 Trello', { x: 6.5, y: 1.7, w: 2.8, h: 1.5, fontSize: 14, color: colors.text, align: 'center' });

        // ==================== Slide 10: UML Overview ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📐 UML Diagrams Overview', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        slide.addText('7 comprehensive diagrams documenting our system:', { x: 0.5, y: 1, w: 9, h: 0.4, fontSize: 16, color: colors.text });
        
        const umlDiagrams = [
            '1. Use Case Diagram', '2. Class Diagram', '3. Sequence Diagram', '4. Activity Diagram',
            '5. State Diagram', '6. Component Diagram', '7. ER Diagram'
        ];
        umlDiagrams.forEach((uml, idx) => {
            const x = (idx % 4) * 2.3 + 0.5;
            const y = Math.floor(idx / 4) * 0.6 + 1.6;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 2.1, h: 0.5, fill: '1a1a3a', line: { color: colors.accent, pt: 1 } });
            slide.addText(uml, { x: x, y: y, w: 2.1, h: 0.5, fontSize: 12, color: colors.text, align: 'center', valign: 'middle' });
        });

        // ==================== Slides 11-17: UML Diagrams ====================
        const umlSlides = [
            { title: 'Use Case Diagram', file: '01_use_case_diagram', desc: 'Shows system functionality from user perspective' },
            { title: 'Class Diagram', file: '02_class_diagram', desc: 'Shows system structure and class relationships' },
            { title: 'Sequence Diagram', file: '03_sequence_diagram', desc: 'Shows interaction flow for forecast request' },
            { title: 'Activity Diagram', file: '04_activity_diagram', desc: 'Illustrates workflow process' },
            { title: 'State Diagram', file: '05_state_diagram', desc: 'Shows forecast request lifecycle' },
            { title: 'Component Diagram', file: '06_component_diagram', desc: 'Shows system components' },
            { title: 'ER Diagram', file: '07_er_diagram', desc: 'Shows database entity relationships' }
        ];

        for (const uml of umlSlides) {
            slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
            slide.addText(`📐 ${uml.title}`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
            slide.addText(uml.desc, { x: 0.5, y: 0.9, w: 9, h: 0.4, fontSize: 14, color: colors.textMuted });
            slide.addShape(pptx.shapes.RECTANGLE, { 
                x: 1, y: 1.5, w: 8, h: 3.2, 
                fill: '1a1a3a', line: { color: '444466', pt: 1 }
            });
            slide.addText(`[${uml.file}.svg]\n\nImage placeholder - add UML diagram here`, { 
                x: 1, y: 2.2, w: 8, h: 2, 
                fontSize: 14, color: colors.textMuted, align: 'center', valign: 'middle'
            });
        }

        // ==================== Slide 18: Architecture ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🏗️ System Architecture (MVC)', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        // Client layer
        slide.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 1, w: 6, h: 0.8, fill: '1e3a5f', line: { color: '3b82f6', pt: 2 } });
        slide.addText('Client Layer: Browser • HTML/CSS • JavaScript', { x: 2, y: 1, w: 6, h: 0.8, fontSize: 12, color: colors.text, align: 'center', valign: 'middle' });
        
        slide.addText('↓ HTTP ↓', { x: 4.5, y: 1.9, w: 1, h: 0.3, fontSize: 12, color: colors.cyan, align: 'center' });
        
        // Flask layer
        slide.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 2.3, w: 6, h: 0.8, fill: '2d1b4e', line: { color: 'a855f7', pt: 2 } });
        slide.addText('Flask Application: Routes • Models • Forecast Engine', { x: 2, y: 2.3, w: 6, h: 0.8, fontSize: 12, color: colors.text, align: 'center', valign: 'middle' });
        
        slide.addText('↓           ↓', { x: 4, y: 3.2, w: 2, h: 0.3, fontSize: 12, color: colors.cyan, align: 'center' });
        
        // Bottom layer
        slide.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 3.6, w: 2.8, h: 0.8, fill: '1a3a2e', line: { color: '10b981', pt: 2 } });
        slide.addText('SQLite DB', { x: 2, y: 3.6, w: 2.8, h: 0.8, fontSize: 12, color: colors.text, align: 'center', valign: 'middle' });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 3.6, w: 2.8, h: 0.8, fill: '3d2a1a', line: { color: 'f97316', pt: 2 } });
        slide.addText('WeatherAPI', { x: 5.2, y: 3.6, w: 2.8, h: 0.8, fontSize: 12, color: colors.text, align: 'center', valign: 'middle' });

        // ==================== Slide 19: Algorithm ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🧠 Forecasting Algorithm', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const steps = ['1. Fetch Current', '2. Fetch Forecast', '3. Fetch History', '4. Calculate Trends', '5. Adjust Values'];
        steps.forEach((step, idx) => {
            slide.addShape(pptx.shapes.RECTANGLE, { x: 0.4 + (idx * 1.9), y: 1.2, w: 1.7, h: 0.8, fill: '1a1a3a', line: { color: colors.accent, pt: 1 } });
            slide.addText(step, { x: 0.4 + (idx * 1.9), y: 1.2, w: 1.7, h: 0.8, fontSize: 10, color: colors.text, align: 'center', valign: 'middle' });
            if (idx < 4) {
                slide.addText('→', { x: 2.1 + (idx * 1.9), y: 1.4, w: 0.2, h: 0.4, fontSize: 16, color: colors.cyan });
            }
        });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 1, y: 2.4, w: 8, h: 1.2, fill: '1a1a3a', line: { color: colors.cyan, pt: 1 } });
        slide.addText('Trend Formula: m = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)²\n\nAdjustment: Final = API_Forecast + (Trend × 0.1)', { 
            x: 1, y: 2.5, w: 8, h: 1, fontSize: 14, color: colors.text, align: 'center'
        });

        // ==================== Slide 20: Test Results ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🧪 Testing Results', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const testTable = [
            [{ text: 'Test', options: { bold: true, fill: '333355', color: colors.cyan } }, 
             { text: 'Description', options: { bold: true, fill: '333355', color: colors.cyan } },
             { text: 'Status', options: { bold: true, fill: '333355', color: colors.cyan } }],
            ['TC-01', 'City Query (London, Tehran)', { text: '✓ Pass', options: { color: colors.success } }],
            ['TC-02', 'Coordinate Query', { text: '✓ Pass', options: { color: colors.success } }],
            ['TC-03', 'Invalid Location Error', { text: '✓ Pass', options: { color: colors.success } }],
            ['TC-04', 'JSON File Upload', { text: '✓ Pass', options: { color: colors.success } }],
            ['TC-05', 'History Persistence', { text: '✓ Pass', options: { color: colors.success } }],
            ['TC-06', 'Cross-Browser', { text: '✓ Pass', options: { color: colors.success } }]
        ];
        slide.addTable(testTable, { 
            x: 0.5, y: 1.1, w: 9, h: 3,
            fontSize: 12,
            color: colors.text,
            border: { pt: 1, color: '444466' },
            fill: colors.primary
        });

        // ==================== Slide 21: Performance ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('⚡ Performance Metrics', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const metrics = [
            { label: 'Page Load', value: '1.2s', target: '< 2s' },
            { label: 'Forecast Gen', value: '3.5s', target: '< 5s' },
            { label: 'API Response', value: '0.8s', target: '< 2s' },
            { label: 'DB Query', value: '45ms', target: '< 100ms' }
        ];
        
        metrics.forEach((m, idx) => {
            const x = 0.5 + (idx * 2.4);
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.2, w: 2.2, h: 1.8, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(m.value, { x: x, y: 1.4, w: 2.2, h: 0.6, fontSize: 24, bold: true, color: colors.cyan, align: 'center' });
            slide.addText(`Target: ${m.target}`, { x: x, y: 2, w: 2.2, h: 0.3, fontSize: 10, color: colors.textMuted, align: 'center' });
            slide.addText(m.label, { x: x, y: 2.4, w: 2.2, h: 0.4, fontSize: 12, color: colors.text, align: 'center' });
            slide.addText('✓', { x: x + 1.8, y: 1.2, w: 0.3, h: 0.3, fontSize: 16, color: colors.success });
        });

        // ==================== Slide 22: Lessons Learned ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🎓 Lessons Learned', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const lessons = [
            { icon: '🧩', title: 'Modular Architecture', desc: 'Separating concerns improves maintainability' },
            { icon: '🔑', title: 'Environment Variables', desc: 'Secure API key management with .env files' },
            { icon: '🐛', title: 'Error Handling', desc: 'Graceful failures improve user experience' },
            { icon: '📋', title: 'Kanban Effectiveness', desc: 'Visual workflow keeps team aligned' }
        ];
        
        lessons.forEach((l, idx) => {
            const x = (idx % 2) * 4.7 + 0.5;
            const y = Math.floor(idx / 2) * 1.5 + 1.1;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 4.5, h: 1.3, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(`${l.icon} ${l.title}`, { x: x + 0.2, y: y + 0.1, w: 4.1, h: 0.5, fontSize: 14, bold: true, color: colors.text });
            slide.addText(l.desc, { x: x + 0.2, y: y + 0.6, w: 4.1, h: 0.6, fontSize: 11, color: colors.textMuted });
        });

        // ==================== Slide 23: Conclusion ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🏁 Conclusion', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const conclusions = [
            '✓ Functional weather forecasting application',
            '✓ Intelligent trend-based predictions',
            '✓ Modern, responsive Galaxy UI',
            '✓ Complete UML documentation (7 diagrams)',
            '✓ Successful Kanban implementation',
            '✓ All requirements met & tested'
        ];
        
        conclusions.forEach((c, idx) => {
            const x = (idx % 2) * 4.7 + 0.5;
            const y = Math.floor(idx / 2) * 0.7 + 1.1;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 4.5, h: 0.6, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(c, { x: x, y: y, w: 4.5, h: 0.6, fontSize: 13, color: colors.success, align: 'center', valign: 'middle' });
        });

        // ==================== Slide 24: Thank You ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('Thank You! 🙏', { x: 0.5, y: 0.8, w: 9, h: 0.8, fontSize: 40, bold: true, color: colors.text, align: 'center' });
        slide.addText('🌌', { x: 4.5, y: 1.7, w: 1, h: 0.8, fontSize: 48, align: 'center' });
        slide.addText('Galaxy Weather', { x: 0.5, y: 2.6, w: 9, h: 0.6, fontSize: 32, bold: true, color: colors.cyan, align: 'center' });
        slide.addText('عسل هادیان و صدف باقریان', { x: 0.5, y: 3.3, w: 9, h: 0.5, fontSize: 18, color: colors.text, align: 'center' });
        slide.addText('Asal Hadian & Sadaf Bagherian', { x: 0.5, y: 3.8, w: 9, h: 0.4, fontSize: 14, color: colors.textMuted, align: 'center' });
        slide.addText('❓ Questions?', { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 18, color: colors.cyan, align: 'center' });

        // Save the presentation
        await pptx.writeFile({ fileName: 'Galaxy_Weather_Presentation.pptx' });
        
        btn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-file-powerpoint"></i> Export PPTX';
            btn.disabled = false;
        }, 2000);

    } catch (error) {
        console.error('Export error:', error);
        btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-file-powerpoint"></i> Export PPTX';
            btn.disabled = false;
        }, 2000);
    }
}

// Keyboard shortcut for export (Ctrl+E)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        exportToPPTX();
    }
});

// Add slide number indicator
Reveal.on('slidechanged', event => {
    console.log(`Slide ${event.indexh + 1} of ${Reveal.getTotalSlides()}`);
});
