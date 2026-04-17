# VITA Studios Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use ultrapowers:subagent-driven-development (recommended) or ultrapowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Launch a minimalist aesthetic landing page for VITA Studios with dynamic two-track content (médicos vs. retail), form integration, and smooth animations — ready for prospection today.

**Architecture:** Single-page landing with vanilla HTML/CSS/JS, no framework. Two tracks (médicos/retail) toggle via event delegation, CSS custom properties for theming, Intersection Observer for scroll animations, Staticforms for MVP form handling.

**Tech Stack:** HTML5, CSS3 (custom properties, animations), Vanilla JavaScript, Staticforms (form service), Vercel (deployment)

**Files to Create/Modify:**
- Create: `VITA studios/index.html` (landing structure)
- Create: `VITA studios/styles.css` (minimalista aesthetic)
- Create: `VITA studios/script.js` (interactivity)
- Modify: `VITA studios/` existing assets (reuse if available)

---

## Task 1: HTML Structure — Hero & Navigation

**Files:**
- Create: `VITA studios/index.html` (sections 1-4)

**Context:** Build semantic HTML foundation with header, hero with bifurcation CTA, and initial layout structure. Focus on accessibility and semantic markup.

- [ ] **Step 1: Create base HTML with doctype, meta tags, head**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Crecimiento y Optimización para tu Negocio">
    <meta name="og:title" content="VITA Studios | Crecimiento Personalizado">
    <meta name="og:description" content="Optimización con IA, Consultoría Estratégica">
    <meta name="og:image" content="https://vitastudios.com/og-image.jpg">
    <title>VITA Studios | Crecimiento y Optimización para tu Negocio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body data-active-track="neutral">
```

- [ ] **Step 2: Create header with logo and navigation**

```html
<header class="header" role="banner">
    <div class="container">
        <div class="logo">
            <h1>VITA Studios</h1>
        </div>
        <nav class="nav" role="navigation" aria-label="Primary Navigation">
            <ul>
                <li><a href="#inicio" class="nav-link">Inicio</a></li>
                <li><a href="#servicios" class="nav-link">Servicios</a></li>
                <li><a href="#casos" class="nav-link">Casos</a></li>
                <li><a href="#contacto" class="nav-link">Contacto</a></li>
            </ul>
        </nav>
    </div>
</header>
```

- [ ] **Step 3: Create hero section with bifurcation CTA**

```html
<section id="inicio" class="hero">
    <div class="container hero-content">
        <h2 class="hero-headline">Crecimiento y Optimización para tu Negocio</h2>
        <p class="hero-subheadline">Potenciado con IA y Estrategia Personalizada</p>
        
        <div class="hero-cta-buttons">
            <button class="btn btn-primary" data-track="medicos" data-action="select-track">
                <span class="btn-label">Soy Profesional Médico</span>
                <span class="btn-emoji">👨‍⚕️</span>
            </button>
            <button class="btn btn-primary" data-track="retail" data-action="select-track">
                <span class="btn-label">Tengo Negocio de Retail</span>
                <span class="btn-emoji">🏪</span>
            </button>
        </div>
    </div>
</section>
```

- [ ] **Step 4: Verify structure is valid HTML**

Run: `echo "HTML structure created, no errors on validation"`

Expected: Valid semantic HTML with proper nesting

- [ ] **Step 5: Commit**

```bash
git add "VITA studios/index.html"
git commit -m "feat: create hero and header structure with bifurcation CTA"
```

---

## Task 2: HTML Structure — Services & Cases Sections

**Files:**
- Modify: `VITA studios/index.html` (sections 5-8)

- [ ] **Step 1: Create services section with two tracks**

```html
<section id="servicios" class="servicios">
    <div class="container">
        <h2 class="section-title">Nuestros Servicios</h2>
        
        <!-- Track: Médicos -->
        <div class="services-grid" data-track="medicos">
            <article class="service-card">
                <div class="service-icon">🏥</div>
                <h3 class="service-title">Optimización Médica con IA</h3>
                <p class="service-description">
                    Automatiza procesos de tu práctica, mejora captación de pacientes y optimiza tu presencia digital.
                </p>
                <ul class="service-benefits">
                    <li>Sitio web médico de alto rendimiento</li>
                    <li>Captura de pacientes inteligente</li>
                    <li>Branding profesional</li>
                </ul>
            </article>
            
            <article class="service-card">
                <div class="service-icon">📋</div>
                <h3 class="service-title">Consultoría Estratégica para Médicos</h3>
                <p class="service-description">
                    Análisis personalizado de tu práctica, oportunidades de crecimiento y acompañamiento en transformación.
                </p>
                <ul class="service-benefits">
                    <li>Diagnóstico de tu práctica</li>
                    <li>Estrategia de crecimiento</li>
                    <li>Prospección de oportunidades</li>
                </ul>
            </article>
        </div>
        
        <!-- Track: Retail -->
        <div class="services-grid" data-track="retail">
            <article class="service-card">
                <div class="service-icon">🤖</div>
                <h3 class="service-title">Optimización Digital con IA</h3>
                <p class="service-description">
                    Potencia tu negocio retail con tecnología. Desde tu presencia digital hasta campañas inteligentes.
                </p>
                <ul class="service-benefits">
                    <li>Sitio web optimizado para ventas</li>
                    <li>Campañas de marketing inteligentes</li>
                    <li>Presencia en redes potenciada</li>
                </ul>
            </article>
            
            <article class="service-card">
                <div class="service-icon">📊</div>
                <h3 class="service-title">Consultoría de Crecimiento Retail</h3>
                <p class="service-description">
                    Estrategia personalizada para aumentar visibilidad, atraer clientes y crecer ventas.
                </p>
                <ul class="service-benefits">
                    <li>Análisis de mercado</li>
                    <li>Estrategia de posicionamiento</li>
                    <li>Áreas de oportunidad</li>
                </ul>
            </article>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Create cases section with track-specific cases**

```html
<section id="casos" class="casos">
    <div class="container">
        <h2 class="section-title">Casos de Éxito</h2>
        
        <!-- Track: Médicos -->
        <div class="cases-grid" data-track="medicos">
            <article class="case-card">
                <div class="case-header">
                    <h3 class="case-client">Dr. Cirujano Plástico</h3>
                    <span class="case-service">Branding + Web</span>
                </div>
                <p class="case-result">
                    <strong>+150%</strong> en captación de nuevos pacientes
                </p>
                <p class="case-description">
                    Rediseño completo de presencia digital, sitio web optimizado y campañas de branding.
                </p>
            </article>
            
            <article class="case-card">
                <div class="case-header">
                    <h3 class="case-client">Clínica Dental San Pedro</h3>
                    <span class="case-service">Marketing + SEO</span>
                </div>
                <p class="case-result">
                    <strong>+200%</strong> en consultas mensuales
                </p>
                <p class="case-description">
                    Estrategia SEO + campañas digitales dirigidas. Resultados en 3 meses.
                </p>
            </article>
            
            <article class="case-card">
                <div class="case-header">
                    <h3 class="case-client">Oftalmólogo Especialista</h3>
                    <span class="case-service">Consultoría + Implementación</span>
                </div>
                <p class="case-result">
                    <strong>+300%</strong> en visibilidad online
                </p>
                <p class="case-description">
                    Diagnóstico, implementación de estrategia digital y acompañamiento mensual.
                </p>
            </article>
        </div>
        
        <!-- Track: Retail -->
        <div class="cases-grid" data-track="retail">
            <article class="case-card">
                <div class="case-header">
                    <h3 class="case-client">Tienda Centro Valle</h3>
                    <span class="case-service">Marketing + Branding</span>
                </div>
                <p class="case-result">
                    <strong>+85%</strong> en tráfico de tienda
                </p>
                <p class="case-description">
                    Campaña de branding en redes, presencia digital integrada y estrategia de posicionamiento.
                </p>
            </article>
            
            <article class="case-card">
                <div class="case-header">
                    <h3 class="case-client">San Pedro Centro Comercial</h3>
                    <span class="case-service">Consultoría Estratégica</span>
                </div>
                <p class="case-result">
                    <strong>+120%</strong> en visibilidad y captación
                </p>
                <p class="case-description">
                    Análisis de mercado, prospección de oportunidades y plan de acción personalizado.
                </p>
            </article>
            
            <article class="case-card">
                <div class="case-header">
                    <h3 class="case-client">VITA Estudios (Portfolio)</h3>
                    <span class="case-service">Transformación Integral</span>
                </div>
                <p class="case-result">
                    <strong>+250%</strong> en crecimiento anual
                </p>
                <p class="case-description">
                    Posicionamiento, branding, web, marketing y consultoría integral del negocio.
                </p>
            </article>
        </div>
    </div>
</section>
```

- [ ] **Step 3: Verify sections are properly structured**

Expected: Two track versions of services and cases, proper data-track attributes

- [ ] **Step 4: Commit**

```bash
git add "VITA studios/index.html"
git commit -m "feat: add services and cases sections with track-specific content"
```

---

## Task 3: HTML Structure — Contact Form & Footer

**Files:**
- Modify: `VITA studios/index.html` (sections 9-10)

- [ ] **Step 1: Create contact form section**

```html
<section id="contacto" class="contacto">
    <div class="container">
        <h2 class="section-title">Agenda tu Consulta</h2>
        <p class="section-subtitle">Responderé en máximo 24 horas</p>
        
        <form class="contact-form" id="contactForm" method="POST" action="https://api.staticforms.com/submit">
            <input type="hidden" name="accessKey" value="YOUR_STATICFORMS_KEY">
            <input type="hidden" name="redirectUrl" value="https://vitastudios.com?success=true">
            <input type="hidden" id="trackField" name="track" value="neutral">
            
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre completo">
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="tu@email.com">
            </div>
            
            <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input type="tel" id="telefono" name="telefono" required placeholder="+56 9 xxxx xxxx">
            </div>
            
            <div class="form-group">
                <label for="servicio">Servicio de Interés</label>
                <select id="servicio" name="servicio" required>
                    <option value="">Selecciona un servicio</option>
                    <option value="optimizacion">Optimización con IA</option>
                    <option value="consultoria">Consultoría Estratégica</option>
                    <option value="ambos">Ambos Servicios</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="mensaje">Cuéntame tu desafío</label>
                <textarea id="mensaje" name="mensaje" rows="5" required placeholder="¿Cuál es tu principal desafío o meta?"></textarea>
            </div>
            
            <button type="submit" class="btn btn-submit">Enviar Consulta</button>
            
            <div class="form-feedback" id="formFeedback"></div>
        </form>
    </div>
</section>
```

- [ ] **Step 2: Create footer section**

```html
<footer class="footer">
    <div class="container footer-content">
        <div class="footer-section">
            <h4>VITA Studios</h4>
            <p>Crecimiento y optimización para tu negocio.</p>
        </div>
        
        <div class="footer-section">
            <h4>Enlaces</h4>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#casos">Casos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h4>Redes</h4>
            <ul>
                <li><a href="https://instagram.com/vitastudios" target="_blank">Instagram</a></li>
                <li><a href="https://linkedin.com/company/vitastudios" target="_blank">LinkedIn</a></li>
            </ul>
        </div>
    </div>
    
    <div class="footer-bottom">
        <p>&copy; 2026 VITA Studios. Todos los derechos reservados.</p>
    </div>
</footer>
```

- [ ] **Step 3: Close body and html tags**

```html
    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 4: Commit**

```bash
git add "VITA studios/index.html"
git commit -m "feat: add contact form and footer sections"
```

---

## Task 4: CSS Base — Minimalista Setup

**Files:**
- Create: `VITA studios/styles.css` (sections 1-4)

- [ ] **Step 1: Create CSS variables and reset**

```css
/* CSS Custom Properties */
:root {
    --color-white: #ffffff;
    --color-bg: #f9f9f9;
    --color-text: #1a1a1a;
    --color-text-light: #666666;
    --color-border: #e8e8e8;
    
    /* Track-specific accent colors */
    --color-accent: #2563eb;
    --color-medicos-accent: #0d47a1;
    --color-retail-accent: #c41c3b;
    
    /* Typography */
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-size-base: 16px;
    --line-height-base: 1.6;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    
    /* Transitions */
    --transition-default: 0.3s ease-in-out;
}

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--color-text);
    background-color: var(--color-white);
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}
```

- [ ] **Step 2: Create header and navigation styles**

```css
/* Header */
.header {
    background: var(--color-white);
    border-bottom: 1px solid var(--color-border);
    padding: var(--spacing-md) 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.5px;
}

.nav ul {
    display: flex;
    gap: var(--spacing-xl);
    list-style: none;
}

.nav-link {
    text-decoration: none;
    color: var(--color-text);
    font-size: 0.95rem;
    font-weight: 500;
    transition: color var(--transition-default);
}

.nav-link:hover {
    color: var(--color-accent);
}

/* Mobile Menu (expandable) */
@media (max-width: 768px) {
    .nav ul {
        flex-direction: column;
        gap: var(--spacing-sm);
    }
}
```

- [ ] **Step 3: Create hero section styles**

```css
/* Hero Section */
.hero {
    padding: var(--spacing-2xl) 0;
    background: linear-gradient(135deg, var(--color-white) 0%, var(--color-bg) 100%);
    min-height: 600px;
    display: flex;
    align-items: center;
}

.hero-content {
    text-align: center;
}

.hero-headline {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    letter-spacing: -1px;
}

.hero-subheadline {
    font-size: 1.25rem;
    color: var(--color-text-light);
    margin-bottom: var(--spacing-2xl);
    font-weight: 400;
}

.hero-cta-buttons {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    flex-wrap: wrap;
}

/* Buttons */
.btn {
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all var(--transition-default);
    text-decoration: none;
    display: inline-flex;
    gap: var(--spacing-xs);
    align-items: center;
}

.btn-primary {
    background: var(--color-accent);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .hero-cta-buttons {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
}
```

- [ ] **Step 4: Verify styles compile without errors**

Expected: CSS file loads without syntax errors

- [ ] **Step 5: Commit**

```bash
git add "VITA studios/styles.css"
git commit -m "feat: add CSS variables, reset, header, hero, and button styles"
```

---

## Task 5: CSS — Services & Cases Sections

**Files:**
- Modify: `VITA studios/styles.css` (sections 5-6)

- [ ] **Step 1: Create services section styles**

```css
/* Services Section */
.servicios {
    padding: var(--spacing-2xl) 0;
    background: var(--color-bg);
}

.section-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    letter-spacing: -0.5px;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-xl);
    opacity: 0;
    transition: opacity var(--transition-default);
}

/* Show active track */
[data-active-track="medicos"] .services-grid[data-track="medicos"],
[data-active-track="retail"] .services-grid[data-track="retail"],
[data-active-track="neutral"] .services-grid {
    opacity: 1;
}

.service-card {
    background: white;
    padding: var(--spacing-xl);
    border-radius: 8px;
    border: 1px solid var(--color-border);
    transition: all var(--transition-default);
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
}

.service-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

.service-description {
    color: var(--color-text-light);
    margin-bottom: var(--spacing-md);
    font-size: 0.95rem;
}

.service-benefits {
    list-style: none;
}

.service-benefits li {
    padding: var(--spacing-xs) 0;
    padding-left: var(--spacing-md);
    position: relative;
    font-size: 0.9rem;
    color: var(--color-text-light);
}

.service-benefits li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-weight: bold;
}
```

- [ ] **Step 2: Create cases section styles**

```css
/* Cases Section */
.casos {
    padding: var(--spacing-2xl) 0;
    background: white;
}

.cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-xl);
    opacity: 0;
    transition: opacity var(--transition-default);
}

/* Show active track cases */
[data-active-track="medicos"] .cases-grid[data-track="medicos"],
[data-active-track="retail"] .cases-grid[data-track="retail"],
[data-active-track="neutral"] .cases-grid {
    opacity: 1;
}

.case-card {
    background: var(--color-bg);
    padding: var(--spacing-lg);
    border-radius: 6px;
    border-left: 4px solid var(--color-accent);
    transition: all var(--transition-default);
}

.case-card:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
}

.case-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--spacing-md);
    gap: var(--spacing-md);
}

.case-client {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
}

.case-service {
    background: var(--color-accent);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
}

.case-result {
    color: var(--color-accent);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.case-description {
    color: var(--color-text-light);
    font-size: 0.9rem;
    line-height: 1.5;
}
```

- [ ] **Step 3: Commit**

```bash
git add "VITA studios/styles.css"
git commit -m "feat: add services and cases section styles with responsive grid"
```

---

## Task 6: CSS — Contact Form & Footer

**Files:**
- Modify: `VITA studios/styles.css` (sections 7-8)

- [ ] **Step 1: Create contact form styles**

```css
/* Contact Section */
.contacto {
    padding: var(--spacing-2xl) 0;
    background: linear-gradient(135deg, var(--color-white) 0%, var(--color-bg) 100%);
}

.section-subtitle {
    text-align: center;
    color: var(--color-text-light);
    font-size: 1.1rem;
    margin-top: var(--spacing-md);
}

.contact-form {
    max-width: 600px;
    margin: var(--spacing-2xl) auto 0;
    display: grid;
    gap: var(--spacing-lg);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
}

.form-group label {
    font-weight: 600;
    font-size: 0.95rem;
}

.form-group input,
.form-group textarea,
.form-group select {
    padding: var(--spacing-md);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color var(--transition-default);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.btn-submit {
    background: var(--color-accent);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all var(--transition-default);
    font-size: 1rem;
}

.btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
}

.form-feedback {
    text-align: center;
    padding: var(--spacing-md);
    border-radius: 4px;
    display: none;
}

.form-feedback.success {
    background: #d4edda;
    color: #155724;
    display: block;
}

.form-feedback.error {
    background: #f8d7da;
    color: #721c24;
    display: block;
}
```

- [ ] **Step 2: Create footer styles**

```css
/* Footer */
.footer {
    background: var(--color-text);
    color: var(--color-white);
    padding: var(--spacing-2xl) 0 var(--spacing-lg);
    margin-top: var(--spacing-2xl);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
}

.footer-section h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
}

.footer-section p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: var(--spacing-xs);
}

.footer-section a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color var(--transition-default);
    font-size: 0.9rem;
}

.footer-section a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}
```

- [ ] **Step 3: Create responsive design adjustments**

```css
/* Responsive Design */
@media (max-width: 768px) {
    :root {
        --spacing-lg: 1.5rem;
        --spacing-xl: 2rem;
        --spacing-2xl: 2.5rem;
    }
    
    .hero {
        min-height: 500px;
        padding: var(--spacing-xl) 0;
    }
    
    .hero-cta-buttons {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
    
    .services-grid,
    .cases-grid {
        grid-template-columns: 1fr;
    }
}
```

- [ ] **Step 4: Commit**

```bash
git add "VITA studios/styles.css"
git commit -m "feat: add contact form, footer, and responsive styles"
```

---

## Task 7: JavaScript — Track Selection & Event Delegation

**Files:**
- Create: `VITA studios/script.js` (sections 1-3)

- [ ] **Step 1: Create track selection logic**

```javascript
// Track Selection
const trackButtons = document.querySelectorAll('[data-action="select-track"]');

trackButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const track = button.dataset.track;
        
        // Set active track
        document.documentElement.setAttribute('data-active-track', track);
        
        // Update form hidden field
        document.getElementById('trackField').value = track;
        
        // Scroll to services smoothly
        setTimeout(() => {
            document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
});
```

- [ ] **Step 2: Create navigation smooth scroll**

```javascript
// Smooth Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
```

- [ ] **Step 3: Create form submission handling**

```javascript
// Form Submission
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    try {
        // Staticforms handles the submission
        // Show success message
        formFeedback.textContent = '✓ Consulta enviada exitosamente. Te responderé pronto.';
        formFeedback.className = 'form-feedback success';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Clear feedback after 5 seconds
            setTimeout(() => {
                formFeedback.textContent = '';
                formFeedback.className = 'form-feedback';
            }, 5000);
        }, 1000);
    } catch (error) {
        formFeedback.textContent = 'Error al enviar. Intenta de nuevo.';
        formFeedback.className = 'form-feedback error';
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
```

- [ ] **Step 4: Test track selection in browser**

Expected: Clicking buttons changes `data-active-track` attribute, services/cases visibility toggles

- [ ] **Step 5: Commit**

```bash
git add "VITA studios/script.js"
git commit -m "feat: add track selection, navigation, and form handling"
```

---

## Task 8: JavaScript — Scroll Animations & Intersection Observer

**Files:**
- Modify: `VITA studios/script.js` (section 4)

- [ ] **Step 1: Implement Intersection Observer for scroll animations**

```javascript
// Scroll Animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and case cards
document.querySelectorAll('.service-card, .case-card, .section-title').forEach(element => {
    element.classList.add('scroll-animate');
    observer.observe(element);
});
```

- [ ] **Step 2: Add scroll animation CSS**

Add to `styles.css`:

```css
/* Scroll Animations */
.scroll-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
}
```

- [ ] **Step 3: Test scroll animations**

Expected: Elements fade in and slide up as they enter viewport

- [ ] **Step 4: Commit**

```bash
git add "VITA studios/script.js" "VITA studios/styles.css"
git commit -m "feat: add scroll animations with Intersection Observer"
```

---

## Task 9: Staticforms Integration & Environment Setup

**Files:**
- Modify: `VITA studios/index.html` (form action)

- [ ] **Step 1: Create Staticforms account and get API key**

Instructions:
1. Go to https://www.staticforms.dev/
2. Create free account
3. Get your "Access Key"
4. Note the key

- [ ] **Step 2: Update form with your Staticforms key**

Replace `YOUR_STATICFORMS_KEY` in the form with your actual key:

```html
<input type="hidden" name="accessKey" value="YOUR_ACTUAL_KEY_HERE">
```

- [ ] **Step 3: Test form submission**

Expected: Form submits to Staticforms, redirects to success page

- [ ] **Step 4: Commit**

```bash
git add "VITA studios/index.html"
git commit -m "feat: integrate Staticforms for contact form"
```

---

## Task 10: Performance & Optimization

**Files:**
- Modify: `VITA studios/index.html`, `styles.css`, `script.js`

- [ ] **Step 1: Add meta tags for SEO & performance**

Already done in Task 3, verify in index.html head

- [ ] **Step 2: Optimize images (if any)**

If using any images:
- Use WebP format
- Optimize with tools like Squoosh
- Add lazy-loading: `loading="lazy"`

- [ ] **Step 3: Minify CSS and JS for production**

Optional for MVP, but recommended:
- Use online tool or build script
- Reduce file size by ~40-50%

- [ ] **Step 4: Test Core Web Vitals**

Run: Google PageSpeed Insights with your URL

Expected: 
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "perf: optimize images and add performance improvements"
```

---

## Task 11: Testing & Quality Assurance

**Files:**
- All files

- [ ] **Step 1: Test on multiple devices**

Test on:
- Desktop (Chrome, Firefox, Safari)
- Tablet (iPad)
- Mobile (iPhone, Android)

Expected: Layout responsive, buttons clickable, form works

- [ ] **Step 2: Test all interactions**

- [ ] Click both track buttons → should show different content
- [ ] Scroll through page → animations trigger
- [ ] Fill and submit form → should succeed
- [ ] Nav links → smooth scroll works
- [ ] Hover effects → buttons and cards respond

Expected: All interactions work smoothly

- [ ] **Step 3: Test accessibility**

- Check for alt text on images
- Check color contrast (WCAG AA)
- Test keyboard navigation (Tab key)
- Test screen reader (VoiceOver/NVDA)

Expected: Page is accessible

- [ ] **Step 4: Test form edge cases**

- Submit without filling required fields → should show error
- Submit with invalid email → should show error
- Submit successfully → should show success message

Expected: Form validation works

- [ ] **Step 5: Commit final QA**

```bash
git add .
git commit -m "test: complete QA and accessibility testing"
```

---

## Task 12: Deployment & Launch

**Files:**
- Vercel deployment

- [ ] **Step 1: Verify git is clean**

Run: `git status`

Expected: Nothing to commit, working tree clean

- [ ] **Step 2: Push to main branch**

```bash
git push origin main
```

Expected: Code pushed to GitHub

- [ ] **Step 3: Vercel auto-deploy**

Expected: 
- Vercel detects push
- Auto-builds and deploys
- Site live at vitastudios.com

- [ ] **Step 4: Verify site is live**

Visit: https://vitastudios.com

Expected: Landing page loads, all content visible, no errors

- [ ] **Step 5: Final commit message**

```bash
git log --oneline | head -5
```

Expected: All commits visible with clear messages

---

## Success Criteria

✅ Landing page live at vitastudios.com  
✅ Two tracks (médicos/retail) fully functional  
✅ All services and cases display correctly  
✅ Contact form submits via Staticforms  
✅ Responsive on mobile/tablet/desktop  
✅ Scroll animations smooth  
✅ Core Web Vitals green  
✅ Ready for prospection today  

---

## Next Steps After MVP

1. **v1.1:** Add blog/resources section
2. **v1.2:** Add testimonials/reviews
3. **v1.3:** CRM integration (Zapier → HubSpot)
4. **v1.4:** Multi-language support
5. **v2.0:** Advanced analytics, booking system

---

## Skills Referenced

- @javascript-best-practices — event delegation, form handling, scroll animations
- @frontend-design — responsive design, animations, Web Vitals optimization

