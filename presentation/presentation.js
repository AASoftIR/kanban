// ==================== Galaxy Weather Presentation ====================
// Reveal.js Configuration and Export Functions (Text-Based)

// Initialize Reveal.js
document.addEventListener('DOMContentLoaded', function() {
    Reveal.initialize({
        hash: true,
        slideNumber: 'c/t',
        showSlideNumber: 'all',
        progress: true,
        history: true,
        center: true,
        transition: 'slide',
        backgroundTransition: 'fade',
        width: 1280,
        height: 720,
        margin: 0.05,
        minScale: 0.2,
        maxScale: 1.5,
        keyboard: {
            27: function() {}, // Disable ESC (reserved for modal)
            70: function() { toggleFullscreen(); } // F for fullscreen
        }
    });

    // Setup export buttons
    setupExportButtons();
});

// ==================== Image Modal Functions ====================
function openModal(img, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.classList.add('active');
    modalImg.src = img.src;
    modalCaption.textContent = caption || img.alt;
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ==================== Fullscreen Toggle ====================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// ==================== Export Functions ====================
function setupExportButtons() {
    const pdfBtn = document.getElementById('exportPdfBtn');
    const pptBtn = document.getElementById('exportPptBtn');
    
    if (pdfBtn) {
        pdfBtn.addEventListener('click', exportToPDF);
    }
    
    if (pptBtn) {
        pptBtn.addEventListener('click', exportToPPTX);
    }
}

// PDF Export - Use Reveal.js print-pdf mode
function exportToPDF() {
    const btn = document.getElementById('exportPdfBtn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
    btn.disabled = true;
    
    // Open print-pdf version in new window
    const printUrl = window.location.href.split('?')[0] + '?print-pdf';
    
    // Create message for user
    const message = `
PDF Export Instructions:
────────────────────────

1. A new window will open with the print-ready version
2. Press Ctrl+P (or Cmd+P on Mac) to print
3. Select "Save as PDF" as the destination
4. Make sure to set:
   • Layout: Landscape
   • Margins: None
   • Background graphics: ✓ Enabled
5. Click Save

The PDF will be clean and lightweight (~2-5 MB).
    `;
    
    alert(message);
    
    // Open in new window
    window.open(printUrl, '_blank');
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
}

// PPTX Export - Text-based using PptxGenJS
async function exportToPPTX() {
    const btn = document.getElementById('exportPptBtn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
    btn.disabled = true;
    
    try {
        // Create new presentation
        const pptx = new PptxGenJS();
        
        // Set presentation properties
        pptx.author = 'Galaxy Weather Team';
        pptx.title = 'Galaxy Weather - Presentation';
        pptx.subject = 'Software Engineering Project';
        pptx.company = 'Sharif University - Kish Campus';
        
        // Define theme colors
        const theme = {
            bg: '0A0A1A',
            bgLight: '1A1A3A',
            purple: '667EEA',
            cyan: '00D4FF',
            pink: 'FF6B9D',
            white: 'FFFFFF',
            gray: 'B0B0C0'
        };
        
        // Define master slide
        pptx.defineSlideMaster({
            title: 'GALAXY_MASTER',
            background: { color: theme.bg },
            objects: [
                // Gradient overlay simulation
                { rect: { x: 0, y: 0, w: '100%', h: '100%', fill: { type: 'solid', color: theme.bg } } }
            ],
            slideNumber: { x: '95%', y: '95%', color: theme.gray, fontSize: 10 }
        });
        
        // Get all slides
        const slides = document.querySelectorAll('.reveal .slides > section');
        
        slides.forEach((section, index) => {
            const slide = pptx.addSlide({ masterName: 'GALAXY_MASTER' });
            
            // Get slide title
            const h1 = section.querySelector('h1');
            const h2 = section.querySelector('h2');
            const title = h1 ? h1.textContent : (h2 ? h2.textContent : `Slide ${index + 1}`);
            
            // Clean title (remove icons)
            const cleanTitle = title.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
            
            // Determine if it's a title slide (first or last)
            const isTitleSlide = index === 0 || index === slides.length - 1;
            
            if (isTitleSlide) {
                // Title slide layout
                slide.addText(cleanTitle, {
                    x: 0.5,
                    y: 2.5,
                    w: '90%',
                    h: 1,
                    fontSize: 44,
                    bold: true,
                    color: theme.cyan,
                    align: 'center'
                });
                
                // Get subtitle or team info
                const subtitle = section.querySelector('.subtitle, .team-info, p');
                if (subtitle) {
                    slide.addText(subtitle.textContent.substring(0, 200), {
                        x: 0.5,
                        y: 3.8,
                        w: '90%',
                        h: 0.8,
                        fontSize: 18,
                        color: theme.gray,
                        align: 'center'
                    });
                }
            } else {
                // Regular content slide
                slide.addText(cleanTitle, {
                    x: 0.3,
                    y: 0.2,
                    w: '95%',
                    h: 0.6,
                    fontSize: 28,
                    bold: true,
                    color: theme.cyan
                });
                
                // Get all text content
                let yPos = 0.9;
                const contentElements = section.querySelectorAll('p, li, td, .feature-card, .nfr-card, .algo-detail, h3, h4, .toc-item, .diagram-desc p, .diagram-desc li');
                
                let contentText = [];
                contentElements.forEach(el => {
                    let text = el.textContent.trim();
                    if (text && text.length > 0 && text.length < 500) {
                        // Clean emoji and special chars
                        text = text.replace(/[\u{1F300}-\u{1F9FF}]/gu, '•');
                        text = text.replace(/\s+/g, ' ');
                        
                        // Skip if already added similar content
                        if (!contentText.some(t => t.includes(text.substring(0, 30)))) {
                            contentText.push(text);
                        }
                    }
                });
                
                // Combine and limit content
                const combinedContent = contentText.slice(0, 12).join('\n\n');
                
                if (combinedContent) {
                    slide.addText(combinedContent, {
                        x: 0.3,
                        y: yPos,
                        w: '95%',
                        h: 4.5,
                        fontSize: 14,
                        color: theme.white,
                        valign: 'top',
                        breakLine: true
                    });
                }
                
                // Check for images (UML diagrams, screenshots)
                const img = section.querySelector('img');
                if (img && img.src) {
                    // Add note about image
                    slide.addText('📊 See web presentation for diagram/screenshot', {
                        x: 0.3,
                        y: 5.0,
                        w: '95%',
                        h: 0.3,
                        fontSize: 11,
                        italic: true,
                        color: theme.gray
                    });
                }
            }
        });
        
        // Save the file
        await pptx.writeFile({ fileName: 'Galaxy_Weather_Presentation.pptx' });
        
        alert('✅ PowerPoint exported successfully!\n\nFile: Galaxy_Weather_Presentation.pptx\nSize: ~500 KB (text-based)\n\nNote: Images/diagrams are not included.\nUse the web presentation for full visuals.');
        
    } catch (error) {
        console.error('PPTX Export Error:', error);
        alert('❌ Export failed: ' + error.message);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// ==================== Keyboard Shortcuts ====================
document.addEventListener('keydown', function(e) {
    // P key for PDF export
    if (e.key === 'p' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Don't trigger during typing
        if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            // Let Reveal handle it
        }
    }
});

// ==================== Utility Functions ====================

// Detect print-pdf mode and apply styles
if (window.location.search.includes('print-pdf')) {
    document.body.classList.add('print-pdf-mode');
}
