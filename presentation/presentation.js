// ==================== Galaxy Weather Presentation Script ====================

// ==================== Image Modal Functions ====================

function openModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.classList.add('active');
    modalImg.src = imageSrc;
    modalCaption.textContent = caption || '';
    
    // Prevent Reveal.js navigation while modal is open
    document.body.style.overflow = 'hidden';
    
    // Add keyboard listener for ESC
    document.addEventListener('keydown', handleModalKeydown);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleModalKeydown);
}

function handleModalKeydown(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

// ==================== Initialize Reveal.js ====================

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
    
    // Close modal when clicking outside the image
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });
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
            danger: 'f87171',
            warning: 'fbbf24'
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

        // ==================== Slide 2: Mission Overview ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🚀 Mission Overview', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const missions = [
            '01 Project Introduction', '02 Requirements Analysis', '03 System Architecture',
            '04 UI/UX Design', '05 Implementation', '06 Testing & QA',
            '07 Project Timeline', '08 Team Structure', '09 Future Work'
        ];
        
        missions.forEach((item, idx) => {
            const x = (idx % 3) * 3 + 0.5;
            const y = Math.floor(idx / 3) * 1.2 + 1.2;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 2.8, h: 1, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(item, { x: x, y: y, w: 2.8, h: 1, fontSize: 14, color: colors.text, align: 'center' });
        });

        // ==================== Slide 3: Project Overview ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🌍 Project Overview', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addText('Mission Statement', { x: 0.5, y: 1, w: 9, h: 0.4, fontSize: 18, bold: true, color: colors.cyan });
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.5, w: 9, h: 1.2, fill: '1a1a3a', line: { color: colors.cyan, pt: 2 } });
        slide.addText('Galaxy Weather is an intelligent web application designed to deliver accurate, real-time weather forecasting through a modern, intuitive interface.', { 
            x: 0.7, y: 1.6, w: 8.6, h: 1, fontSize: 14, color: colors.text 
        });

        const values = ['Real-Time Data', 'Global Coverage', 'Smart Alerts', 'Responsive Design'];
        values.forEach((v, idx) => {
            slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5 + (idx * 2.3), y: 3, w: 2.1, h: 1, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(v, { x: 0.5 + (idx * 2.3), y: 3, w: 2.1, h: 1, fontSize: 14, color: colors.text, align: 'center' });
        });

        // ==================== Slide 4: Core Features ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('⭐ Core Features', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const features = [
            { t: 'Real-Time Weather', d: 'Current conditions, humidity, wind' },
            { t: '5-Day Forecast', d: 'Hourly breakdowns & daily predictions' },
            { t: 'Location Search', d: 'City, ZIP, Coordinates & GPS' },
            { t: 'Trend Analysis', d: 'ML-enhanced historical data analysis' }
        ];
        
        features.forEach((f, idx) => {
            const x = (idx % 2) * 4.7 + 0.5;
            const y = Math.floor(idx / 2) * 2 + 1.2;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 4.5, h: 1.8, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(f.t, { x: x, y: y + 0.2, w: 4.5, h: 0.5, fontSize: 18, bold: true, color: colors.cyan, align: 'center' });
            slide.addText(f.d, { x: x + 0.2, y: y + 0.8, w: 4.1, h: 0.8, fontSize: 14, color: colors.textMuted, align: 'center' });
        });

        // ==================== Slide 5: Problem Statement ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('⚠️ Problem Statement', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addText('Existing Apps Lack', { x: 0.5, y: 1, w: 4, h: 0.4, fontSize: 18, bold: true, color: colors.danger });
        const problems = ['❌ Limited input format support', '❌ No custom data analysis', '❌ Basic display without trends', '❌ No history storage'];
        problems.forEach((p, idx) => {
            slide.addText(p, { x: 0.5, y: 1.5 + (idx * 0.5), w: 4, h: 0.4, fontSize: 14, color: colors.text });
        });
        
        slide.addText('Galaxy Weather Provides', { x: 5, y: 1, w: 4.5, h: 0.4, fontSize: 18, bold: true, color: colors.success });
        const solutions = ['✓ Multi-format location input', '✓ JSON file upload & analysis', '✓ Intelligent trend analysis', '✓ Forecast history storage'];
        solutions.forEach((s, idx) => {
            slide.addText(s, { x: 5, y: 1.5 + (idx * 0.5), w: 4.5, h: 0.4, fontSize: 14, color: colors.text });
        });

        // ==================== Slide 6: Development Journey ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🛣️ Our Development Journey', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addText('As a 2-person team, we needed an agile methodology that was flexible, lightweight, and perfect for continuous delivery.', { 
            x: 1, y: 1.2, w: 8, h: 1, fontSize: 16, color: colors.text, align: 'center' 
        });

        const stats = [
            { v: '5', l: 'Weeks' }, { v: '24', l: 'Tasks' }, { v: '7', l: 'Diagrams' }, { v: '100%', l: 'Met' }
        ];
        stats.forEach((s, idx) => {
            const x = 1 + (idx * 2);
            slide.addText(s.v, { x: x, y: 2.5, w: 2, h: 0.8, fontSize: 32, bold: true, color: colors.cyan, align: 'center' });
            slide.addText(s.l, { x: x, y: 3.2, w: 2, h: 0.5, fontSize: 14, color: colors.textMuted, align: 'center' });
        });

        // ==================== Slide 7: Why Kanban ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📊 Why We Chose Kanban', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const tableData = [
            [{ text: 'Feature', options: { bold: true, fill: '333355', color: colors.cyan } }, 
             { text: 'Kanban ✓', options: { bold: true, fill: '333355', color: colors.success } },
             { text: 'Scrum', options: { bold: true, fill: '333355', color: colors.text } }],
            ['Fixed Iterations', { text: 'No', options: { color: colors.success } }, 'Yes (Sprints)'],
            ['Team Size', { text: 'Any (2+ ideal)', options: { color: colors.success } }, '5-9 members'],
            ['Flexibility', { text: 'High', options: { color: colors.success } }, 'Medium'],
            ['Overhead', { text: 'Minimal', options: { color: colors.success } }, 'High']
        ];
        slide.addTable(tableData, { x: 0.5, y: 1.1, w: 9, h: 2.5, fontSize: 12, color: colors.text, border: { pt: 1, color: '444466' }, fill: colors.primary });

        // ==================== Slide 8: Kanban Board ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📋 Our 5-Column Kanban Board', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const columns = [
            { name: 'Backlog', color: '6b7280' }, { name: 'To Do', color: '3b82f6' },
            { name: 'In Progress', color: 'f59e0b' }, { name: 'Testing', color: '8b5cf6' },
            { name: 'Done', color: '10b981' }
        ];
        
        columns.forEach((col, idx) => {
            const x = 0.5 + (idx * 1.9);
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.5, w: 1.7, h: 2, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addShape(pptx.shapes.RECTANGLE, { x: x + 0.1, y: 1.6, w: 1.5, h: 0.4, fill: col.color });
            slide.addText(col.name, { x: x, y: 1.6, w: 1.7, h: 0.4, fontSize: 11, bold: true, color: 'ffffff', align: 'center' });
            if (idx < 4) slide.addText('→', { x: x + 1.7, y: 2.2, w: 0.2, h: 0.4, fontSize: 20, color: colors.cyan });
        });

        // ==================== Slide 9: Week 1 ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🏁 Week 1: Project Kickoff', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        slide.addText('Initial Board Setup & Task Prioritization', { x: 0.5, y: 0.9, w: 9, h: 0.4, fontSize: 14, color: colors.textMuted });
        
        slide.addImage({ path: '../files/1.png', x: 0.5, y: 1.5, w: 4.2, h: 3 });
        slide.addImage({ path: '../files/2.png', x: 5.3, y: 1.5, w: 4.2, h: 3 });

        // ==================== Slide 10: Week 2-3 ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('💻 Week 2-3: Development Phase', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        slide.addText('Backend & Frontend Development', { x: 0.5, y: 0.9, w: 9, h: 0.4, fontSize: 14, color: colors.textMuted });
        
        slide.addImage({ path: '../files/3.png', x: 0.5, y: 1.5, w: 2.8, h: 3 });
        slide.addImage({ path: '../files/4.png', x: 3.6, y: 1.5, w: 2.8, h: 3 });
        slide.addImage({ path: '../files/5.png', x: 6.7, y: 1.5, w: 2.8, h: 3 });

        // ==================== Slide 11: Week 4 ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🧪 Week 4: Testing & Documentation', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addImage({ path: '../files/6.png', x: 0.5, y: 1.5, w: 4.2, h: 3 });
        slide.addImage({ path: '../files/7.png', x: 5.3, y: 1.5, w: 4.2, h: 3 });

        // ==================== Slide 12: Week 5 ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🏆 Week 5: Project Completion', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addImage({ path: '../files/8.png', x: 0.5, y: 1.5, w: 4.2, h: 3 });
        slide.addImage({ path: '../files/9.png', x: 5.3, y: 1.5, w: 4.2, h: 3 });

        // ==================== Slide 13: Team Distribution ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('👥 Team Task Distribution', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addText('👩‍💻 Asal Hadian (Backend)', { x: 0.5, y: 1.2, w: 4, h: 0.4, fontSize: 18, bold: true, color: colors.text });
        ['• API analysis & integration', '• Database design (SQLite)', '• Forecasting algorithm', '• Flask application'].forEach((t, i) => {
            slide.addText(t, { x: 0.5, y: 1.8 + (i * 0.4), w: 4, h: 0.3, fontSize: 12, color: colors.text });
        });
        
        slide.addText('👩‍🎨 Sadaf Bagherian (Frontend)', { x: 5, y: 1.2, w: 4.5, h: 0.4, fontSize: 18, bold: true, color: colors.text });
        ['• Galaxy UI/UX design', '• HTML/CSS templates', '• JavaScript animations', '• UML diagrams'].forEach((t, i) => {
            slide.addText(t, { x: 5, y: 1.8 + (i * 0.4), w: 4.5, h: 0.3, fontSize: 12, color: colors.text });
        });

        // ==================== Slide 14: Functional Requirements ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📋 Functional Requirements', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const frTable = [
            [{ text: 'ID', options: { bold: true, fill: '333355', color: colors.cyan } }, { text: 'Requirement', options: { bold: true, fill: '333355', color: colors.cyan } }, { text: 'Priority', options: { bold: true, fill: '333355', color: colors.cyan } }],
            ['FR-001', 'Multi-format Location Input', { text: 'High', options: { color: colors.danger } }],
            ['FR-002', 'Weather Data Retrieval', { text: 'High', options: { color: colors.danger } }],
            ['FR-003', 'JSON File Upload', { text: 'Medium', options: { color: colors.warning } }],
            ['FR-004', 'Trend-Based Forecast', { text: 'High', options: { color: colors.danger } }],
            ['FR-005', 'Database Storage', { text: 'High', options: { color: colors.danger } }],
            ['FR-006', 'Forecast History', { text: 'Medium', options: { color: colors.warning } }]
        ];
        slide.addTable(frTable, { x: 0.5, y: 1.1, w: 9, h: 3, fontSize: 12, color: colors.text, border: { pt: 1, color: '444466' }, fill: colors.primary });

        // ==================== Slide 15: Non-Functional Requirements ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('⚙️ Non-Functional Requirements', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const nfrs = [
            { t: 'Performance', d: 'Response < 2s' }, { t: 'Reliability', d: '99.9% Uptime' },
            { t: 'Security', d: 'HTTPS & API Keys' }, { t: 'Scalability', d: 'Cloud Ready' }
        ];
        nfrs.forEach((n, idx) => {
            const x = 0.5 + (idx * 2.3);
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.5, w: 2.1, h: 1.5, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(n.t, { x: x, y: 1.7, w: 2.1, h: 0.4, fontSize: 14, bold: true, color: colors.cyan, align: 'center' });
            slide.addText(n.d, { x: x, y: 2.2, w: 2.1, h: 0.4, fontSize: 12, color: colors.textMuted, align: 'center' });
        });

        // ==================== Slide 16: Tech Stack ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🔧 Technology Stack', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.2, w: 2.8, h: 2.5, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
        slide.addText('Backend\n\n🐍 Python 3.8+\n🌶️ Flask 3.0\n🗄️ SQLite', { x: 0.5, y: 1.3, w: 2.8, h: 2.3, fontSize: 14, color: colors.text, align: 'center' });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 3.5, y: 1.2, w: 2.8, h: 2.5, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
        slide.addText('Frontend\n\n📄 HTML5\n🎨 CSS3\n⚡ JavaScript', { x: 3.5, y: 1.3, w: 2.8, h: 2.3, fontSize: 14, color: colors.text, align: 'center' });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 6.5, y: 1.2, w: 2.8, h: 2.5, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
        slide.addText('External\n\n🌤️ WeatherAPI\n📋 Trello', { x: 6.5, y: 1.3, w: 2.8, h: 2.3, fontSize: 14, color: colors.text, align: 'center' });

        // ==================== Slide 17: UML Overview ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('📐 UML Diagrams Overview', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const umls = ['Use Case', 'Class', 'Sequence', 'Activity', 'State', 'Component', 'ER Diagram'];
        umls.forEach((u, idx) => {
            const x = (idx % 4) * 2.3 + 0.5;
            const y = Math.floor(idx / 4) * 1 + 1.5;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 2.1, h: 0.8, fill: '1a1a3a', line: { color: colors.accent, pt: 1 } });
            slide.addText(u, { x: x, y: y, w: 2.1, h: 0.8, fontSize: 14, color: colors.text, align: 'center' });
        });

        // ==================== Slides 18-24: UML Diagrams ====================
        const umlSlides = [
            { t: 'Use Case Diagram', f: '01_use_case_diagram.svg', d: 'System functionality from user perspective' },
            { t: 'Class Diagram', f: '02_class_diagram.svg', d: 'System structure and class relationships' },
            { t: 'Sequence Diagram', f: '03_sequence_diagram.svg', d: 'Interaction flow for forecast request' },
            { t: 'Activity Diagram', f: '04_activity_diagram.svg', d: 'Workflow process for forecast generation' },
            { t: 'State Diagram', f: '05_state_diagram.svg', d: 'Forecast request lifecycle states' },
            { t: 'Component Diagram', f: '06_component_diagram.svg', d: 'System components and their interactions' },
            { t: 'ER Diagram', f: '07_er_diagram.svg', d: 'Database entity relationships' }
        ];

        for (const uml of umlSlides) {
            slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
            slide.addText(`📐 ${uml.t}`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
            slide.addText(uml.d, { x: 0.5, y: 0.9, w: 9, h: 0.4, fontSize: 14, color: colors.textMuted });
            
            // Add image with fallback
            try {
                slide.addImage({ path: `../files/${uml.f}`, x: 1, y: 1.4, w: 8, h: 3.8, sizing: { type: 'contain', w: 8, h: 3.8 } });
            } catch (e) {
                slide.addText('Image not found', { x: 1, y: 2.5, w: 8, h: 1, align: 'center', color: colors.danger });
            }
        }

        // ==================== Slide 25: Architecture ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🏗️ System Architecture (MVC)', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 1.2, w: 6, h: 0.8, fill: '1e3a5f', line: { color: '3b82f6', pt: 2 } });
        slide.addText('Client Layer (View)', { x: 2, y: 1.2, w: 6, h: 0.8, fontSize: 14, color: colors.text, align: 'center' });
        
        slide.addText('↓ HTTP Requests ↓', { x: 4, y: 2.1, w: 2, h: 0.3, fontSize: 12, color: colors.cyan, align: 'center' });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 2.5, w: 6, h: 0.8, fill: '2d1b4e', line: { color: 'a855f7', pt: 2 } });
        slide.addText('Flask Application (Controller)', { x: 2, y: 2.5, w: 6, h: 0.8, fontSize: 14, color: colors.text, align: 'center' });
        
        slide.addText('↓ Data Flow ↓', { x: 4, y: 3.4, w: 2, h: 0.3, fontSize: 12, color: colors.cyan, align: 'center' });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 3.8, w: 2.8, h: 0.8, fill: '1a3a2e', line: { color: '10b981', pt: 2 } });
        slide.addText('SQLite DB (Model)', { x: 2, y: 3.8, w: 2.8, h: 0.8, fontSize: 14, color: colors.text, align: 'center' });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 3.8, w: 2.8, h: 0.8, fill: '3d2a1a', line: { color: 'f97316', pt: 2 } });
        slide.addText('WeatherAPI (External)', { x: 5.2, y: 3.8, w: 2.8, h: 0.8, fontSize: 14, color: colors.text, align: 'center' });

        // ==================== Slide 26: Algorithm ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🧠 Forecasting Algorithm', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const steps = ['1. Fetch Current', '2. Fetch Forecast', '3. Fetch History', '4. Calculate Trends', '5. Adjust Values'];
        steps.forEach((step, idx) => {
            slide.addShape(pptx.shapes.RECTANGLE, { x: 0.4 + (idx * 1.9), y: 1.5, w: 1.7, h: 0.8, fill: '1a1a3a', line: { color: colors.accent, pt: 1 } });
            slide.addText(step, { x: 0.4 + (idx * 1.9), y: 1.5, w: 1.7, h: 0.8, fontSize: 10, color: colors.text, align: 'center' });
            if (idx < 4) slide.addText('→', { x: 2.1 + (idx * 1.9), y: 1.7, w: 0.2, h: 0.4, fontSize: 16, color: colors.cyan });
        });
        
        slide.addShape(pptx.shapes.RECTANGLE, { x: 1, y: 3, w: 8, h: 1.2, fill: '1a1a3a', line: { color: colors.cyan, pt: 1 } });
        slide.addText('Trend Formula: m = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)²\n\nAdjustment: Final = API_Forecast + (Trend × 0.1)', { 
            x: 1, y: 3.1, w: 8, h: 1, fontSize: 14, color: colors.text, align: 'center'
        });

        // ==================== Slide 27: Hybrid Approach ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🔀 Hybrid Forecasting Approach', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        slide.addText('Pure API', { x: 1, y: 1.5, w: 3, h: 0.5, fontSize: 18, bold: true, color: colors.danger, align: 'center' });
        slide.addText('• No historical context\n• Generic predictions\n• No personalization', { x: 1, y: 2.1, w: 3, h: 2, fontSize: 14, color: colors.text });
        
        slide.addText('Galaxy Hybrid', { x: 6, y: 1.5, w: 3, h: 0.5, fontSize: 18, bold: true, color: colors.success, align: 'center' });
        slide.addText('• Historical trends\n• Adjusted accuracy\n• Smart corrections', { x: 6, y: 2.1, w: 3, h: 2, fontSize: 14, color: colors.text });

        // ==================== Slide 28: Testing Results ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🧪 Testing Results', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const tests = [
            ['TC-01', 'City Query', '✓ Pass'], ['TC-02', 'Coordinate Query', '✓ Pass'],
            ['TC-03', 'Invalid Location', '✓ Pass'], ['TC-04', 'JSON Upload', '✓ Pass'],
            ['TC-05', 'Database Persistence', '✓ Pass'], ['TC-06', 'Responsive Design', '✓ Pass']
        ];
        slide.addTable([[{ text: 'Test', options: { bold: true, fill: '333355', color: colors.cyan } }, { text: 'Description', options: { bold: true, fill: '333355', color: colors.cyan } }, { text: 'Status', options: { bold: true, fill: '333355', color: colors.cyan } }], ...tests.map(t => [t[0], t[1], { text: t[2], options: { color: colors.success } }])], { x: 0.5, y: 1.1, w: 9, h: 3.5, fontSize: 12, color: colors.text, border: { pt: 1, color: '444466' }, fill: colors.primary });

        // ==================== Slide 29: Performance ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('⚡ Performance Metrics', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const metrics = [
            { l: 'Page Load', v: '1.2s' }, { l: 'Forecast Gen', v: '3.5s' },
            { l: 'API Response', v: '0.8s' }, { l: 'DB Query', v: '45ms' }
        ];
        metrics.forEach((m, idx) => {
            const x = 0.5 + (idx * 2.4);
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.5, w: 2.2, h: 1.8, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(m.v, { x: x, y: 1.7, w: 2.2, h: 0.6, fontSize: 24, bold: true, color: colors.cyan, align: 'center' });
            slide.addText(m.l, { x: x, y: 2.5, w: 2.2, h: 0.4, fontSize: 14, color: colors.text, align: 'center' });
        });

        // ==================== Slide 30: Lessons Learned ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🎓 Lessons Learned', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const lessons = [
            { i: '🧩', t: 'Modular Architecture', d: 'Separating concerns improves maintainability' },
            { i: '🔑', t: 'Environment Variables', d: 'Secure API key management' },
            { i: '🐛', t: 'Error Handling', d: 'Graceful failures improve UX' },
            { i: '📋', t: 'Kanban Effectiveness', d: 'Visual workflow keeps team aligned' }
        ];
        lessons.forEach((l, idx) => {
            const x = (idx % 2) * 4.7 + 0.5;
            const y = Math.floor(idx / 2) * 1.5 + 1.2;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 4.5, h: 1.3, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(`${l.i} ${l.t}`, { x: x + 0.2, y: y + 0.1, w: 4.1, h: 0.5, fontSize: 14, bold: true, color: colors.text });
            slide.addText(l.d, { x: x + 0.2, y: y + 0.6, w: 4.1, h: 0.6, fontSize: 12, color: colors.textMuted });
        });

        // ==================== Slide 31: Future Enhancements ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🚀 Future Enhancements', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const futures = [
            '🤖 Machine Learning Integration', '🔔 Weather Alerts & Notifications',
            '🗺️ Interactive Weather Maps', '📱 Native Mobile Application',
            '📊 Advanced Data Visualization', '👥 User Accounts & Personalization'
        ];
        futures.forEach((f, idx) => {
            const x = (idx % 2) * 4.7 + 0.5;
            const y = Math.floor(idx / 2) * 1 + 1.2;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 4.5, h: 0.8, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(f, { x: x, y: y, w: 4.5, h: 0.8, fontSize: 14, color: colors.text, align: 'center' });
        });

        // ==================== Slide 32: Conclusion ====================
        slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
        slide.addText('🏁 Conclusion', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, bold: true, color: colors.cyan });
        
        const conclusions = [
            '✓ Functional weather forecasting application', '✓ Intelligent trend-based predictions',
            '✓ Modern, responsive Galaxy UI', '✓ Complete UML documentation (7 diagrams)',
            '✓ Successful Kanban implementation', '✓ All requirements met & tested'
        ];
        conclusions.forEach((c, idx) => {
            const x = (idx % 2) * 4.7 + 0.5;
            const y = Math.floor(idx / 2) * 0.8 + 1.2;
            slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: y, w: 4.5, h: 0.6, fill: '1a1a3a', line: { color: '444466', pt: 1 } });
            slide.addText(c, { x: x, y: y, w: 4.5, h: 0.6, fontSize: 12, color: colors.success, align: 'center' });
        });

        // ==================== Slide 33: Thank You ====================
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
