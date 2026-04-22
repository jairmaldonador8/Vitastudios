# Lead Magnet & Sales Funnel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use ultrapowers:subagent-driven-development (recommended) or ultrapowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete lead magnet + sales funnel system to convert website visitors into qualified leads through a free diagnostic tool and optimized CTAs.

**Architecture:** Multi-page funnel with lead capture at entry (popup), diagnostic form (dedicated page), thank you page, and optimized service pages. All pages follow premium minimalista design system. Lead data stored in browser localStorage (for demo) with email integration ready.

**Tech Stack:** HTML5, CSS3 (GPU-accelerated animations), Vanilla JavaScript (no dependencies), LocalStorage API, Fetch API for form handling

---

## File Structure

**Files to Create:**
- `VITA studios/lead-magnet.html` — Interactive diagnostic form page
- `VITA studios/thank-you.html` — Post-submission confirmation page
- `VITA studios/forms.js` — Form handling, validation, submission logic

**Files to Modify:**
- `VITA studios/index.html` — Add lead capture popup, optimize CTAs
- `VITA studios/styles.css` — Add popup styles, form styles, animations
- `VITA studios/script.js` — Add popup trigger logic, form handlers

---

## Task Breakdown

### Task 1: Create Lead Magnet Form Page (lead-magnet.html)

**Files:**
- Create: `VITA studios/lead-magnet.html`

- [ ] **Step 1: Create HTML structure for diagnostic form**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diagnóstico de Crecimiento | VITA Studios</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@100;300;400;500;600&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="logo.png" alt="VITA STUDIOS">
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="index.html#inicio" class="nav-link">VOLVER</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- DIAGNOSTIC HERO -->
    <section class="diagnostic-hero reveal">
        <div class="container">
            <h1 class="diagnostic-title">Descubre Tu Potencial de Crecimiento</h1>
            <p class="diagnostic-subtitle">Diagnóstico personalizado en 5 minutos • Sin compromiso</p>
        </div>
    </section>

    <div class="divider"></div>

    <!-- DIAGNOSTIC FORM -->
    <section class="diagnostic-section reveal">
        <div class="container">
            <div class="diagnostic-form-wrapper">
                <form id="diagnostic-form" class="diagnostic-form">
                    <div class="form-group">
                        <label for="name">Tu nombre completo</label>
                        <input type="text" id="name" name="name" placeholder="Ej: Juan Pérez" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Tu correo electrónico</label>
                        <input type="email" id="email" name="email" placeholder="tu@email.com" required>
                    </div>

                    <div class="form-group">
                        <label for="phone">Teléfono (WhatsApp)</label>
                        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000">
                    </div>

                    <div class="form-group">
                        <label for="business-type">¿Qué tipo de negocio tienes?</label>
                        <select id="business-type" name="businessType" required>
                            <option value="">Selecciona una opción</option>
                            <option value="healthcare">Profesional de Salud</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="services">Servicios Profesionales</option>
                            <option value="retail">Retail/Comercio</option>
                            <option value="saas">SaaS/Tech</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="monthly-revenue">¿Cuál es tu facturación mensual actual?</label>
                        <select id="monthly-revenue" name="monthlyRevenue" required>
                            <option value="">Selecciona un rango</option>
                            <option value="0-5k">Menos de $5k</option>
                            <option value="5k-20k">$5k - $20k</option>
                            <option value="20k-50k">$20k - $50k</option>
                            <option value="50k-100k">$50k - $100k</option>
                            <option value="100k+">Más de $100k</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="main-challenge">¿Cuál es tu principal desafío ahora?</label>
                        <select id="main-challenge" name="mainChallenge" required>
                            <option value="">Selecciona una opción</option>
                            <option value="visibility">Baja visibilidad online</option>
                            <option value="leads">No genero suficientes leads</option>
                            <option value="conversion">Baja tasa de conversión</option>
                            <option value="growth">Crecimiento lento</option>
                            <option value="automation">Necesito automatizar</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="timeline">¿En qué plazo necesitas crecer?</label>
                        <select id="timeline" name="timeline" required>
                            <option value="">Selecciona un plazo</option>
                            <option value="urgent">Urgente (próximas 2 semanas)</option>
                            <option value="1-3months">1-3 meses</option>
                            <option value="3-6months">3-6 meses</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary diagnostic-submit">
                        OBTENER MI DIAGNÓSTICO
                    </button>

                    <p class="form-disclaimer">
                        ✓ Sin spam • ✓ Sin compromiso • ✓ Análisis personalizado en 24h
                    </p>
                </form>
            </div>
        </div>
    </section>

    <div class="divider"></div>

    <!-- BENEFITS -->
    <section class="diagnostic-benefits reveal">
        <div class="container">
            <h2>¿Qué Incluye Tu Diagnóstico?</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">📊</div>
                    <h3>Análisis Completo</h3>
                    <p>Evaluación profunda de tu situación actual y oportunidades</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🎯</div>
                    <h3>Estrategia Personalizada</h3>
                    <p>Plan de acción específico para tu negocio y objetivos</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">💡</div>
                    <h3>Insights Accionables</h3>
                    <p>Recomendaciones inmediatas que puedes implementar hoy</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <p>© 2026 VITA STUDIOS. CRECIMIENTO PERSONALIZADO.</p>
    </footer>

    <script src="forms.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify HTML loads in browser**

Navigate to `http://localhost:8000/lead-magnet.html` and confirm page displays properly with all form fields visible.

---

### Task 2: Create Thank You Page (thank-you.html)

**Files:**
- Create: `VITA studios/thank-you.html`

- [ ] **Step 1: Create thank you confirmation page**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Diagnóstico Enviado! | VITA Studios</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@100;300;400;500;600&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- HEADER -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="logo.png" alt="VITA STUDIOS">
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="index.html" class="nav-link">VOLVER AL INICIO</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- THANK YOU SECTION -->
    <section class="thank-you-section reveal">
        <div class="container">
            <div class="thank-you-content">
                <div class="success-icon">✓</div>
                <h1 class="thank-you-title">¡Perfecto!</h1>
                <p class="thank-you-subtitle">Tu diagnóstico está siendo preparado</p>

                <div class="thank-you-message">
                    <p>En las próximas <strong>24 horas</strong> recibirás en tu correo:</p>
                    <ul class="checklist">
                        <li>📊 Tu análisis personalizado completo</li>
                        <li>🎯 Estrategia de crecimiento recomendada</li>
                        <li>💡 Top 3 oportunidades para tu negocio</li>
                        <li>📞 Invitación a consulta gratuita de 30 min</li>
                    </ul>
                </div>

                <div class="thank-you-actions">
                    <p class="text-muted">Mientras tanto, explora nuestros servicios:</p>
                    <a href="index.html#servicios" class="btn btn-primary">VER SERVICIOS</a>
                    <a href="index.html#casos" class="btn btn-secondary">VER CASOS DE ÉXITO</a>
                </div>

                <div class="thank-you-contact">
                    <p class="text-small">¿Prefieres hablar ahora?</p>
                    <a href="https://wa.me/yourwhatsappnumber" class="btn btn-outline" target="_blank">
                        CONTACTAR POR WHATSAPP
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- SOCIAL PROOF -->
    <section class="social-proof-section reveal">
        <div class="container">
            <h2>Lo que Dicen Nuestros Clientes</h2>
            <div class="testimonials-mini">
                <div class="testimonial-card">
                    <p class="testimonial-text">"Dentro de 3 meses duplicamos nuestros ingresos"</p>
                    <p class="testimonial-author">— Dr. Wilber, Profesional de Salud</p>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"El mejor asesor estratégico que contratamos"</p>
                    <p class="testimonial-author">— Rosa de Oro, E-commerce</p>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"La IA transformó nuestros procesos completamente"</p>
                    <p class="testimonial-author">— HINAITU, Consultoría</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <p>© 2026 VITA STUDIOS. CRECIMIENTO PERSONALIZADO.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify thank you page displays correctly**

Navigate to `http://localhost:8000/thank-you.html` and confirm layout and animations work.

---

### Task 3: Add Popup Modal Styles to CSS

**Files:**
- Modify: `VITA studios/styles.css:end` (add new section)

- [ ] **Step 1: Add popup and form styles to CSS**

```css
/* LEAD MAGNET POPUP */
.lead-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.lead-popup.active {
    display: flex;
    animation: fadeIn 0.4s ease-in-out;
}

.popup-content {
    background: var(--color-bg);
    border: 1px solid rgba(201, 169, 97, 0.2);
    border-radius: 8px;
    padding: var(--spacing-2xl);
    max-width: 500px;
    width: 90%;
    position: relative;
    animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.popup-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    color: var(--color-gold);
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.popup-close:hover {
    color: var(--color-terra);
    transform: scale(1.1);
}

.popup-title {
    font-family: var(--font-serif);
    font-size: 28px;
    font-weight: 400;
    margin-bottom: var(--spacing-md);
    letter-spacing: -0.5px;
}

.popup-subtitle {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--spacing-lg);
    line-height: 1.6;
}

/* FORM STYLES */
.diagnostic-form,
.form-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.form-group label {
    font-family: var(--font-accent);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: var(--color-gold);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 12px 16px;
    background: rgba(201, 169, 97, 0.05);
    border: 1px solid rgba(201, 169, 97, 0.2);
    color: var(--color-white);
    font-family: var(--font-sans);
    font-size: 14px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group select::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    background: rgba(201, 169, 97, 0.1);
    border-color: var(--color-gold);
    box-shadow: 0 0 0 2px rgba(201, 169, 97, 0.1);
}

.form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C9A961' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 20px;
    padding-right: 32px;
}

.diagnostic-submit,
.form-submit {
    padding: 14px 32px;
    background: var(--color-terra);
    color: var(--color-white);
    border: none;
    font-family: var(--font-accent);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.4s ease;
    margin-top: var(--spacing-md);
}

.diagnostic-submit:hover,
.form-submit:hover {
    background: rgba(184, 103, 79, 0.9);
    transform: translateY(-2px);
}

.form-disclaimer,
.form-note {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    margin-top: var(--spacing-sm);
}

/* DIAGNOSTIC PAGE STYLES */
.diagnostic-hero {
    padding: 80px 32px;
    text-align: center;
    background: linear-gradient(135deg, rgba(201, 169, 97, 0.05) 0%, transparent 100%);
}

.diagnostic-title {
    font-family: var(--font-serif);
    font-size: clamp(36px, 6vw, 56px);
    font-weight: 400;
    margin-bottom: var(--spacing-md);
    letter-spacing: -1px;
}

.diagnostic-subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 300;
}

.diagnostic-section {
    padding: 80px 32px;
}

.diagnostic-form-wrapper {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(201, 169, 97, 0.03);
    border: 1px solid rgba(201, 169, 97, 0.15);
    padding: var(--spacing-2xl);
    border-radius: 8px;
}

.diagnostic-benefits {
    padding: 80px 32px;
}

.diagnostic-benefits h2 {
    font-family: var(--font-serif);
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.benefit-card {
    text-align: center;
    padding: 32px;
    border: 1px solid rgba(201, 169, 97, 0.15);
    border-radius: 4px;
    transition: all 0.4s ease;
}

.benefit-card:hover {
    border-color: rgba(201, 169, 97, 0.4);
    background: rgba(201, 169, 97, 0.02);
}

.benefit-icon {
    font-size: 48px;
    margin-bottom: var(--spacing-md);
}

.benefit-card h3 {
    font-family: var(--font-serif);
    font-size: 22px;
    font-weight: 400;
    margin-bottom: var(--spacing-sm);
}

.benefit-card p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}

/* THANK YOU PAGE STYLES */
.thank-you-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 80px 32px;
}

.thank-you-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.success-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-xl);
    background: rgba(201, 169, 97, 0.15);
    border: 2px solid var(--color-gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: var(--color-gold);
    animation: slideUp 0.6s ease-out forwards;
}

.thank-you-title {
    font-family: var(--font-serif);
    font-size: 56px;
    font-weight: 400;
    margin-bottom: var(--spacing-sm);
    letter-spacing: -1px;
}

.thank-you-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--spacing-2xl);
    font-weight: 300;
}

.thank-you-message {
    background: rgba(201, 169, 97, 0.05);
    border: 1px solid rgba(201, 169, 97, 0.2);
    padding: var(--spacing-2xl);
    border-radius: 4px;
    margin-bottom: var(--spacing-2xl);
    text-align: left;
}

.thank-you-message p {
    font-size: 15px;
    margin-bottom: var(--spacing-md);
}

.checklist {
    list-style: none;
    padding: 0;
    gap: var(--spacing-md);
}

.checklist li {
    font-size: 14px;
    padding: 8px 0;
    color: rgba(255, 255, 255, 0.8);
}

.thank-you-actions {
    margin: var(--spacing-2xl) 0;
}

.thank-you-actions p {
    font-size: 14px;
    margin-bottom: var(--spacing-lg);
    color: rgba(255, 255, 255, 0.6);
}

.thank-you-actions .btn {
    margin: 0 var(--spacing-sm) var(--spacing-sm) 0;
}

.thank-you-contact {
    padding-top: var(--spacing-2xl);
    border-top: 1px solid rgba(201, 169, 97, 0.15);
}

.thank-you-contact p {
    font-size: 13px;
    margin-bottom: var(--spacing-md);
    color: rgba(255, 255, 255, 0.5);
}

.btn-secondary {
    background: transparent;
    border: 1px solid rgba(201, 169, 97, 0.4);
    color: var(--color-white);
    transition: all 0.4s ease;
}

.btn-secondary:hover {
    border-color: var(--color-terra);
    color: var(--color-terra);
    background: rgba(184, 103, 79, 0.1);
}

.btn-outline {
    background: transparent;
    border: 1px solid var(--color-gold);
    color: var(--color-gold);
    transition: all 0.4s ease;
}

.btn-outline:hover {
    background: rgba(201, 169, 97, 0.15);
    border-color: var(--color-terra);
    color: var(--color-terra);
}

.social-proof-section {
    padding: 80px 32px;
    background: rgba(201, 169, 97, 0.02);
}

.social-proof-section h2 {
    font-family: var(--font-serif);
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
}

.testimonials-mini {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.testimonial-card {
    background: rgba(201, 169, 97, 0.05);
    border: 1px solid rgba(201, 169, 97, 0.2);
    padding: 32px;
    border-radius: 4px;
    text-align: center;
}

.testimonial-text {
    font-size: 16px;
    font-style: italic;
    margin-bottom: var(--spacing-md);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
}

.testimonial-author {
    font-size: 13px;
    color: var(--color-gold);
    font-weight: 500;
    letter-spacing: 0.5px;
}

.text-small {
    font-size: 12px;
}

.text-muted {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .popup-content {
        padding: var(--spacing-xl);
        max-width: 90%;
    }

    .diagnostic-form-wrapper {
        padding: var(--spacing-xl);
    }

    .thank-you-message {
        text-align: center;
    }

    .benefits-grid,
    .testimonials-mini {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}
```

- [ ] **Step 2: Verify CSS loads without errors**

Check browser console for any CSS parsing errors.

---

### Task 4: Create Forms Handler JavaScript (forms.js)

**Files:**
- Create: `VITA studios/forms.js`

- [ ] **Step 1: Create form handling logic**

```javascript
/**
 * Form Handler - Manages lead capture forms
 */
class FormHandler {
    constructor() {
        this.diagnosticForm = document.getElementById('diagnostic-form');
        this.init();
    }

    init() {
        if (!this.diagnosticForm) return;
        this.diagnosticForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            businessType: document.getElementById('business-type').value,
            monthlyRevenue: document.getElementById('monthly-revenue').value,
            mainChallenge: document.getElementById('main-challenge').value,
            timeline: document.getElementById('timeline').value,
            timestamp: new Date().toISOString()
        };

        // Save to localStorage (demo - can integrate with backend)
        this.saveToLocalStorage(formData);

        // Redirect to thank you page
        window.location.href = 'thank-you.html';
    }

    saveToLocalStorage(data) {
        const leads = JSON.parse(localStorage.getItem('vita_leads') || '[]');
        leads.push(data);
        localStorage.setItem('vita_leads', JSON.stringify(leads));
        console.log('Lead saved:', data);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new FormHandler();
});
```

- [ ] **Step 2: Verify forms.js loads without errors**

Check console for any JavaScript errors.

---

### Task 5: Add Lead Capture Popup to Index HTML

**Files:**
- Modify: `VITA studios/index.html:before-footer`

- [ ] **Step 1: Add popup HTML to index.html before footer**

Find the `<!-- FOOTER -->` section and add this before it:

```html
<!-- LEAD MAGNET POPUP -->
<div id="lead-popup" class="lead-popup">
    <div class="popup-content">
        <button class="popup-close" aria-label="Cerrar">&times;</button>
        <h3 class="popup-title">Obtén Tu Diagnóstico</h3>
        <p class="popup-subtitle">5 minutos de preguntas estratégicas + análisis personalizado</p>
        
        <form id="popup-form" class="form-section">
            <div class="form-group">
                <input type="text" id="popup-name" placeholder="Tu nombre" required>
            </div>
            <div class="form-group">
                <input type="email" id="popup-email" placeholder="tu@email.com" required>
            </div>
            <button type="submit" class="btn btn-primary form-submit">
                IR AL DIAGNÓSTICO COMPLETO
            </button>
            <p class="form-disclaimer">✓ Sin spam • ✓ Totalmente gratis</p>
        </form>
    </div>
</div>
```

- [ ] **Step 2: Verify popup HTML renders in browser**

Check that popup div exists in DOM.

---

### Task 6: Add Popup & Lead Capture Logic to Script.js

**Files:**
- Modify: `VITA studios/script.js:end`

- [ ] **Step 1: Add LeadPopup class to script.js**

Append this to the end of script.js before initialization code:

```javascript
/**
 * LeadPopup - Manages lead magnet popup trigger and capture
 */
class LeadPopup {
    constructor() {
        this.popup = document.getElementById('lead-popup');
        this.popupForm = document.getElementById('popup-form');
        this.popupClose = this.popup?.querySelector('.popup-close');
        this.triggerDelay = 10000; // 10 seconds
        this.dismissedKey = 'vita_popup_dismissed';

        this.init();
    }

    init() {
        if (!this.popup) return;

        // Check if user already dismissed
        if (this.isDismissed()) return;

        // Show popup after delay
        setTimeout(() => this.show(), this.triggerDelay);

        // Close button
        this.popupClose?.addEventListener('click', () => this.close());

        // Click outside to close
        this.popup?.addEventListener('click', (e) => {
            if (e.target === this.popup) this.close();
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });

        // Form submission
        this.popupForm?.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    show() {
        this.popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.popup.classList.remove('active');
        document.body.style.overflow = '';
        this.setDismissed();
    }

    handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('popup-name').value;
        const email = document.getElementById('popup-email').value;

        // Save quick lead
        const lead = {
            name,
            email,
            source: 'popup',
            timestamp: new Date().toISOString()
        };

        const leads = JSON.parse(localStorage.getItem('vita_leads') || '[]');
        leads.push(lead);
        localStorage.setItem('vita_leads', JSON.stringify(leads));

        // Redirect to full diagnostic
        window.location.href = 'lead-magnet.html';
    }

    setDismissed() {
        localStorage.setItem(this.dismissedKey, 'true');
    }

    isDismissed() {
        return localStorage.getItem(this.dismissedKey) === 'true';
    }
}

// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
    new LeadPopup();
});
```

- [ ] **Step 2: Verify popup logic loads without errors**

Check browser console for any errors.

---

### Task 7: Optimize CTAs on Index Page

**Files:**
- Modify: `VITA studios/index.html:hero-button` and `services-section`

- [ ] **Step 1: Update hero CTA button**

Find the button in the hero section:
```html
<button class="btn btn-primary" onclick="document.getElementById('servicios').scrollIntoView({behavior: 'smooth'})">EXPLORAR SERVICIOS</button>
```

Replace with:
```html
<button class="btn btn-primary" onclick="document.getElementById('lead-popup').classList.add('active'); document.body.style.overflow = 'hidden';">OBTENER DIAGNÓSTICO GRATIS</button>
```

- [ ] **Step 2: Add secondary CTA to service cards**

Find the services section and add a "Descubre tu oportunidad" link/button to each service card that opens the popup or goes to lead-magnet.html.

- [ ] **Step 3: Verify CTAs are clickable**

Test clicking the buttons and confirm they trigger the expected action.

---

### Task 8: Add FAQ Section to Index

**Files:**
- Modify: `VITA studios/index.html:before-footer`

- [ ] **Step 1: Add FAQ section before footer**

```html
<!-- FAQ SECTION -->
<section id="faq" class="faq-section reveal">
    <div class="container">
        <h2>Preguntas Frecuentes</h2>
        <div class="faq-grid">
            <div class="faq-item">
                <button class="faq-question">
                    <span>¿Cuánto cuesta una consultoría?</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Los costos varían según el alcance y duración. Ofrecemos paquetes personalizados desde consultoría por horas hasta retainers mensuales. Obtén tu diagnóstico para saber qué es lo mejor para ti.</p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>¿Cuánto tiempo tarda ver resultados?</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Depende de la estrategia, pero muchos clientes ven resultados en 30-90 días. Algunos logran cambios significativos incluso en las primeras 2 semanas de implementación.</p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>¿Trabajas con empresas pequeñas?</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>¡Por supuesto! Especialmente con startups y profesionales independientes. Nuestro enfoque es adaptado a tu etapa de crecimiento y presupuesto.</p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>¿Ofrecen garantía de resultados?</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Garantizamos nuestra dedicación y estrategia. Los resultados dependen de la implementación. Por eso incluimos acompañamiento y ajustes continuos.</p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>¿Cómo funciona el diagnóstico?</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Completas un formulario de 5-7 preguntas sobre tu negocio. Nuestro equipo analiza tu información y te envía un reporte personalizado con estrategia + invitación a consulta.</p>
                </div>
            </div>

            <div class="faq-item">
                <button class="faq-question">
                    <span>¿Cuál es el próximo paso?</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="faq-answer">
                    <p>Obtén tu diagnóstico gratis. Recibirás nuestro análisis detallado + una propuesta personalizada. Luego decides si quieres trabajar juntos.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>
```

- [ ] **Step 2: Add FAQ styles to CSS**

```css
/* FAQ SECTION */
.faq-section {
    padding: 80px 32px;
}

.faq-section h2 {
    font-family: var(--font-serif);
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.faq-item {
    border: 1px solid rgba(201, 169, 97, 0.15);
    border-radius: 4px;
    overflow: hidden;
}

.faq-question {
    width: 100%;
    padding: 20px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(201, 169, 97, 0.15);
    color: var(--color-white);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    transition: all 0.3s ease;
    font-family: var(--font-serif);
    font-size: 16px;
    font-weight: 400;
    text-align: left;
}

.faq-question:hover {
    background: rgba(201, 169, 97, 0.05);
    border-bottom-color: var(--color-gold);
}

.faq-question svg {
    min-width: 20px;
    transition: transform 0.3s ease;
}

.faq-item.active .faq-question svg {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: 0 20px;
}

.faq-item.active .faq-answer {
    max-height: 200px;
    padding: 20px;
}

.faq-answer p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.7;
}
```

- [ ] **Step 3: Add FAQ toggle JavaScript to script.js**

Append to script.js:

```javascript
class FAQ {
    constructor() {
        this.items = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const button = item.querySelector('.faq-question');
            button?.addEventListener('click', () => this.toggle(item));
        });
    }

    toggle(item) {
        item.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FAQ();
});
```

- [ ] **Step 4: Verify FAQ section displays and toggles work**

Test clicking FAQ items to verify answers expand/collapse.

---

### Task 9: Optimize Responsive Design

**Files:**
- Modify: `VITA studios/styles.css:end` (add mobile media queries)

- [ ] **Step 1: Add mobile optimizations to CSS**

```css
@media (max-width: 768px) {
    .popup-content {
        width: 95%;
        max-width: 100%;
    }

    .diagnostic-form-wrapper {
        padding: var(--spacing-lg);
    }

    .form-group input,
    .form-group select {
        font-size: 16px; /* Prevent zoom on iOS */
    }

    .diagnostic-title {
        font-size: clamp(28px, 5vw, 36px);
    }

    .thank-you-title {
        font-size: 40px;
    }

    .faq-grid {
        grid-template-columns: 1fr;
    }

    .benefit-card,
    .testimonial-card {
        padding: 24px;
    }
}
```

- [ ] **Step 2: Test responsive design on mobile**

Test in browser DevTools at 375px and 768px breakpoints.

---

### Task 10: Final Testing & Commit

**Files:**
- All modified files

- [ ] **Step 1: Manual testing checklist**

- [ ] Popup appears after 10 seconds on homepage
- [ ] Popup closes with X button, background click, or ESC
- [ ] Popup form submits and redirects to thank you page
- [ ] Lead magnet form validates required fields
- [ ] All CTAs redirect to correct pages
- [ ] FAQ items expand/collapse smoothly
- [ ] All pages load in less than 3 seconds
- [ ] Responsive design works at 375px, 768px, 1440px
- [ ] No console errors or warnings

- [ ] **Step 2: Cross-browser testing**

Test in Chrome, Firefox, Safari (if available).

- [ ] **Step 3: Commit all changes** *(only if auto-commit enabled)*

```bash
git add index.html lead-magnet.html thank-you.html styles.css script.js forms.js
git commit -m "feat: implement lead magnet + sales funnel system

- Created lead magnet diagnostic form page with 6 qualifying questions
- Added thank you confirmation page with social proof testimonials
- Implemented lead capture popup that triggers after 10 seconds
- Added FAQ section with 6 common objection-handling questions
- Optimized hero CTA to 'OBTENER DIAGNÓSTICO GRATIS'
- Added form validation and localStorage lead storage
- Implemented smooth animations and premium aesthetic throughout
- Full responsive design optimization for mobile, tablet, desktop
- All forms have clear copy, proper UX, and conversion focus

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

- [ ] **Step 4: Verify commit succeeded**

Run `git log --oneline -5` to confirm commit.

---

## Success Criteria

✅ All pages load correctly with no console errors
✅ Lead popup appears after 10 seconds on homepage
✅ Forms capture data and redirect properly
✅ CTA buttons drive traffic to lead magnet
✅ Mobile responsive at key breakpoints
✅ Premium minimalista design maintained
✅ All conversions tracked in localStorage
✅ FAQ improves visitor confidence

---

## Deployment Ready

After all tasks complete, the funnel is ready for:
1. Backend integration for email capture (Zapier, Mailchimp, etc.)
2. SMS notifications to team
3. Admin dashboard for lead management
4. Conversion tracking (Google Analytics)

**Estimated time: 3-4 hours for solo developer**
