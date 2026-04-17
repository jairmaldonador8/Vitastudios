# VITA Studios Design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `ultrapowers:subagent-driven-development` or `ultrapowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar el diseño premium minimalista aprobado (Playfair Display + Inter + DM Sans, colores dorado/terra, animaciones dinámicas, logo prominente) en todas las 6 páginas del sitio VITA Studios.

**Architecture:** 
- Fase 1: Actualizar estilos globales (CSS variables, tipografía, animaciones)
- Fase 2: Refactorizar HTML de 6 páginas para estructura minimalista
- Fase 3: Agregar interactividad (scroll reveal, hero animations)
- Fase 4: Testing responsive y ajustes finales
- Fase 5: Commit y deployment

**Tech Stack:** 
- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, Animations, Media Queries)
- JavaScript vanilla (IntersectionObserver, RequestAnimationFrame)
- Google Fonts (Playfair Display, Inter, DM Sans)

---

## Estructura de Archivos

**Archivos a modificar:**
- `VITA studios/styles.css` — CSS completo (actualizar variables, componentes, animaciones)
- `VITA studios/script.js` — JavaScript (agregar scroll reveal, animaciones)

**Archivos HTML a refactorizar (6 páginas):**
- `VITA studios/index.html` — Homepage principal
- `VITA studios/agendar-sesion.html` — Página de agendar
- `VITA studios/paquete-esencia.html` — Paquete esencia
- `VITA studios/paquete-presencia.html` — Paquete presencia
- `VITA studios/propuesta-vita-club.html` — VITA Club
- `VITA studios/vita_productions.html` — Producción

---

## FASE 1: Actualizar Estilos Globales

### Task 1: Actualizar variables CSS y reset

**Archivos:**
- Modify: `VITA studios/styles.css:1-50` (variables y reset)

- [ ] **Step 1: Reemplazar variables CSS base**

Encontrar la sección `:root { ... }` (primeras 30 líneas) y reemplazar completamente con:

```css
/* CSS Custom Properties - Premium Minimalista */
:root {
    /* Colores Base */
    --color-bg: #000000;
    --color-white: #FFFFFF;
    --color-gray-light: #E8E8E8;
    --color-gray-dark: #333333;
    
    /* Acentos Elegantes */
    --color-gold: #C9A961;
    --color-terra: #B8674F;
    
    /* Tipografía */
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-accent: 'DM Sans', sans-serif;
    
    /* Tamaños Base */
    --font-size-base: 16px;
    --line-height-base: 1.6;
    
    /* Espaciado */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    --spacing-3xl: 6rem;
    
    /* Transiciones */
    --transition-default: 0.4s ease-in-out;
    --transition-slow: 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

- [ ] **Step 2: Actualizar reset CSS**

Asegurar que body tiene:
```css
body {
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--color-white);
    background-color: var(--color-bg);
}
```

- [ ] **Step 3: Verificar en navegador**

Abre el sitio en localhost. Debe verse negro pero funcional. Haz screenshot mental.

---

### Task 2: Agregar tipografía de Google Fonts

**Archivos:**
- Modify: `VITA studios/index.html:1-25` (head section)

- [ ] **Step 1: Agregar Google Fonts link**

En el `<head>` de index.html, DESPUÉS del preconnect existente, agregar:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@100;300;400;500;600&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Verificar que fonts cargan**

Abre DevTools (F12). En Application → Fonts, debes ver las 3 familias tipográficas.

---

### Task 3: Actualizar estilos del Header

**Archivos:**
- Modify: `VITA studios/styles.css:60-120` (header styles)

- [ ] **Step 1: Actualizar header base**

Buscar `.header` y reemplazar con:

```css
/* Header */
.header {
    background: var(--color-bg);
    border-bottom: 1px solid rgba(201, 169, 97, 0.15);
    padding: var(--spacing-md) 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

- [ ] **Step 2: Actualizar logo**

```css
.logo {
    height: 45px;
    display: flex;
    align-items: center;
    animation: fadeIn 0.8s ease-in-out;
}

.logo img {
    height: 100%;
    width: auto;
    max-width: 200px;
    filter: brightness(1.1);
}
```

- [ ] **Step 3: Actualizar navegación**

```css
.nav ul {
    display: flex;
    gap: var(--spacing-xl);
    list-style: none;
}

.nav-link {
    text-decoration: none;
    color: var(--color-white);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.5px;
    transition: color var(--transition-default);
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--color-gold);
    transition: width 0.4s ease-in-out;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link:hover {
    color: var(--color-gold);
}
```

- [ ] **Step 4: Verificar header en navegador**

Recarga. Header debe verse con logo y nav limpia, con underline dorado en hover.

---

### Task 4: Actualizar estilos del Hero

**Archivos:**
- Modify: `VITA studios/styles.css:150-230` (hero styles)

- [ ] **Step 1: Actualizar hero section base**

```css
/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg);
    padding: var(--spacing-3xl) var(--spacing-lg);
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(201, 169, 97, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    top: -250px;
    right: -250px;
    animation: float 6s ease-in-out infinite;
    z-index: 0;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    text-align: center;
}
```

- [ ] **Step 2: Actualizar hero logo**

```css
.hero-logo {
    margin-bottom: var(--spacing-2xl);
    animation: slideUp 1s ease-out 0s both;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-logo img {
    height: 180px;
    width: auto;
    max-width: 90%;
    filter: brightness(1.2) drop-shadow(0 0 30px rgba(201, 169, 97, 0.3));
}
```

- [ ] **Step 3: Actualizar hero subtitle y headline**

```css
.hero-subtitle {
    font-family: var(--font-accent);
    font-size: 12px;
    letter-spacing: 1px;
    color: rgba(201, 169, 97, 0.8);
    margin-bottom: var(--spacing-2xl);
    animation: slideUp 0.8s ease-out 0.2s both;
    text-transform: uppercase;
    font-weight: 500;
}

.hero-headline {
    font-family: var(--font-serif);
    font-size: clamp(48px, 8vw, 72px);
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 1.1;
    margin-bottom: var(--spacing-md);
    animation: slideUp 0.8s ease-out 0.3s both;
}

.hero-subheadline {
    font-size: 18px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.3px;
    margin-bottom: var(--spacing-2xl);
    animation: slideUp 0.8s ease-out 0.4s both;
}
```

- [ ] **Step 4: Verificar hero en navegador**

El hero debe mostrar logo grande, headline elegante, colores claros.

---

### Task 5: Actualizar componentes (Botones, Cards, Divisores)

**Archivos:**
- Modify: `VITA studios/styles.css:250-350` (buttons, cards, dividers)

- [ ] **Step 1: Actualizar botones CTA**

```css
/* Buttons */
.btn {
    display: inline-block;
    padding: 16px 40px;
    background: transparent;
    border: 1px solid rgba(201, 169, 97, 0.4);
    color: var(--color-white);
    font-family: var(--font-accent);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition-slow);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(184, 103, 79, 0.2);
    transition: left 0.5s ease-in-out;
    z-index: -1;
}

.btn:hover::before {
    left: 0;
}

.btn:hover {
    border-color: var(--color-terra);
    color: var(--color-terra);
}

.btn-primary {
    border-color: rgba(201, 169, 97, 0.4);
}
```

- [ ] **Step 2: Actualizar divisores**

```css
/* Dividers */
.divider {
    height: 1px;
    background: rgba(201, 169, 97, 0.15);
    margin: var(--spacing-3xl) 0;
}
```

- [ ] **Step 3: Actualizar service cards**

```css
.service-card {
    text-align: center;
    padding: var(--spacing-2xl) 0;
    border-top: 1px solid rgba(201, 169, 97, 0.15);
    transition: all var(--transition-slow);
    position: relative;
    overflow: hidden;
}

.service-card:hover {
    border-top-color: rgba(201, 169, 97, 0.4);
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
}

.service-card:hover::before {
    opacity: 1;
}

.service-title {
    font-family: var(--font-serif);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: var(--spacing-sm);
    letter-spacing: -0.5px;
}

.service-description {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
    line-height: 1.7;
}
```

---

### Task 6: Agregar animaciones

**Archivos:**
- Modify: `VITA studios/styles.css:400-500` (animations)

- [ ] **Step 1: Agregar keyframes**

```css
/* ANIMATIONS */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-30px);
    }
}

@keyframes scaleIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

- [ ] **Step 2: Agregar reveal class para scroll animations**

```css
/* Scroll Reveal */
.reveal {
    opacity: 0;
    transform: translateY(30px);
}

.reveal.active {
    animation: slideUp 1s ease-out forwards;
}

.reveal-left {
    opacity: 0;
    transform: translateX(-50px);
}

.reveal-left.active {
    animation: slideUp 1s ease-out forwards;
    transform: translateX(0);
}
```

- [ ] **Step 3: Verificar animaciones en DevTools**

Abre DevTools → Performance. Anima Hero. No debe haber jank.

---

### Task 7: Actualizar media queries para responsividad

**Archivos:**
- Modify: `VITA studios/styles.css:550-650` (media queries)

- [ ] **Step 1: Agregar media query mobile**

```css
/* RESPONSIVE */
@media (max-width: 768px) {
    .header .container {
        padding: 0 var(--spacing-md);
    }

    .nav a {
        font-size: 11px;
        margin-left: var(--spacing-md);
    }

    .hero {
        padding: var(--spacing-2xl) var(--spacing-md);
        min-height: auto;
    }

    .hero-logo img {
        height: 120px;
    }

    .hero-headline {
        font-size: clamp(36px, 6vw, 48px);
        margin-bottom: var(--spacing-md);
    }

    .hero-subheadline {
        font-size: 14px;
    }

    .container {
        padding: 0 var(--spacing-md);
    }

    .services-grid {
        gap: var(--spacing-2xl);
    }

    .paths {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }
}
```

- [ ] **Step 2: Verificar responsividad en DevTools**

Abre DevTools → Toggle device toolbar. Prueba 320px, 768px, 1440px. Todo debe verse bien.

---

## FASE 2: Actualizar JavaScript

### Task 8: Agregar scroll reveal con IntersectionObserver

**Archivos:**
- Modify: `VITA studios/script.js:400-500` (agregar al final)

- [ ] **Step 1: Agregar clase ScrollReveal**

Al final de script.js, antes del último `// Initialize`, agregar:

```javascript
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal, .reveal-left');
        this.options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.observer = new IntersectionObserver(this.observerCallback.bind(this), this.options);
        this.init();
    }

    init() {
        this.elements.forEach(el => {
            this.observer.observe(el);
        });
    }

    observerCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('active')) {
                entry.target.classList.add('active');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Initialize scroll reveal
new ScrollReveal();
```

- [ ] **Step 2: Verificar scroll reveal en navegador**

Abre index.html. Haz scroll. Los elementos con `.reveal` deben animarse al entrar en viewport.

---

## FASE 3: Refactorizar HTML de 6 páginas

### Task 9: Actualizar index.html

**Archivos:**
- Modify: `VITA studios/index.html` (completamente)

- [ ] **Step 1: Actualizar head**

Asegurar que tiene:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VITA Studios | Crecimiento Personalizado</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@100;300;400;500;600&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="styles.css">
</head>
```

- [ ] **Step 2: Actualizar header**

```html
<header class="header">
    <div class="container">
        <div class="logo">
            <img src="logo.png" alt="VITA STUDIOS">
        </div>
        <nav class="nav">
            <ul>
                <li><a href="#inicio" class="nav-link">INICIO</a></li>
                <li><a href="#servicios" class="nav-link">SERVICIOS</a></li>
                <li><a href="#casos" class="nav-link">CASOS</a></li>
                <li><a href="#contacto" class="nav-link">CONTACTO</a></li>
            </ul>
        </nav>
    </div>
</header>
```

- [ ] **Step 3: Actualizar hero section**

```html
<section id="inicio" class="hero">
    <div class="hero-content">
        <div class="hero-logo">
            <img src="logo.png" alt="VITA STUDIOS">
        </div>
        <div class="hero-subtitle">✦ Crecimiento Personalizado</div>
        <h1 class="hero-headline">Lleva tu negocio al siguiente nivel</h1>
        <p class="hero-subheadline">Estrategia, IA y Crecimiento Personalizado</p>
        <button class="btn btn-primary">EXPLORAR SERVICIOS</button>
    </div>
</section>
```

- [ ] **Step 4: Agregar divider y sección "Elige tu camino"**

```html
<div class="divider"></div>

<section class="choose-path">
    <h2 class="section-title reveal">¿Cuál es tu camino?</h2>
    <div class="paths reveal">
        <div class="path-card">
            <h3 class="service-title">⚕️ Profesional de Salud</h3>
            <p class="service-description">Optimización digital, captación de pacientes y branding profesional.</p>
        </div>
        <div class="path-card">
            <h3 class="service-title">📈 Tengo un Negocio</h3>
            <p class="service-description">Estrategia de crecimiento, marketing digital y transformación con IA.</p>
        </div>
    </div>
</section>

<div class="divider"></div>
```

- [ ] **Step 5: Actualizar sección servicios**

```html
<section id="servicios" class="services">
    <h2 class="section-title reveal">Nuestros Servicios</h2>
    <div class="services-grid">
        <div class="service-card reveal">
            <h3 class="service-title">Optimización Digital</h3>
            <p class="service-description">Sitios web de alto rendimiento, captación inteligente y presencia online profesional.</p>
        </div>
        <div class="service-card reveal">
            <h3 class="service-title">Consultoría Estratégica</h3>
            <p class="service-description">Análisis personalizado, oportunidades de crecimiento y acompañamiento en transformación.</p>
        </div>
        <div class="service-card reveal">
            <h3 class="service-title">Implementación IA</h3>
            <p class="service-description">Automatización de procesos, análisis inteligente y optimización con tecnología.</p>
        </div>
    </div>
</section>

<div class="divider"></div>
```

- [ ] **Step 6: Agregar footer minimalista**

```html
<footer>
    <p>© 2026 VITA STUDIOS. CRECIMIENTO PERSONALIZADO.</p>
</footer>

<script src="script.js"></script>
```

- [ ] **Step 7: Verificar index.html en navegador**

Recarga. Debe verse con diseño completo, animaciones, responsive.

---

### Task 10: Actualizar agendar-sesion.html

**Archivos:**
- Modify: `VITA studios/agendar-sesion.html`

- [ ] **Step 1: Actualizar structure similar a index**

Aplicar mismo header, tipografía, estilos. Mantener formulario pero con clases `.reveal` en inputs.

- [ ] **Step 2: Estilizar formulario con colores nuevos**

Inputs con border dorado 15%, focus con terra 40%.

```css
.form-input {
    border: 1px solid rgba(201, 169, 97, 0.15);
    background: rgba(255, 255, 255, 0.02);
    color: var(--color-white);
    padding: 12px 16px;
    transition: all var(--transition-default);
}

.form-input:focus {
    border-color: var(--color-terra);
    background: rgba(184, 103, 79, 0.1);
    outline: none;
}
```

- [ ] **Step 3: Verificar en navegador**

Formulario debe verse elegante, inputs con focus terra.

---

### Task 11: Actualizar paquete-esencia.html y paquete-presencia.html

**Archivos:**
- Modify: `VITA studios/paquete-esencia.html`
- Modify: `VITA studios/paquete-presencia.html`

- [ ] **Step 1: Aplicar estructura minimalista a ambas**

Header + hero con título del paquete + contenido + CTA + footer.

- [ ] **Step 2: Agregar clases reveal en contenido**

Todos los elementos deben tener `.reveal` para scroll animations.

- [ ] **Step 3: Verificar en navegador**

Ambas páginas funcionales con diseño nuevo.

---

### Task 12: Actualizar propuesta-vita-club.html y vita_productions.html

**Archivos:**
- Modify: `VITA studios/propuesta-vita-club.html`
- Modify: `VITA studios/vita_productions.html`

- [ ] **Step 1: Aplicar estructura minimalista**

Same pattern como las anteriores.

- [ ] **Step 2: Verificar en navegador**

Ambas páginas funcionales.

---

## FASE 4: Testing y Ajustes

### Task 13: Testing responsivo

**No files to create, just testing**

- [ ] **Step 1: Probar en 320px (Mobile)**

Abre DevTools. Toggle device → iPhone SE.
- Header debe verse bien
- Logo debe reducir
- Hero subtitle y headline deben verse legibles
- Buttons deben ser clickeables

- [ ] **Step 2: Probar en 768px (Tablet)**

Toggle device → iPad.
- 2 columns donde aplique
- Espaciado debe ser proporcional

- [ ] **Step 3: Probar en 1440px (Desktop)**

Full screen.
- Whitespace debe ser generoso
- Tipografía debe ser perfecta

- [ ] **Step 4: Cross-browser testing**

Prueba en Chrome, Firefox, Safari (si tienes Mac).

---

### Task 14: Testing de animaciones

**No files, just testing**

- [ ] **Step 1: Verificar hero animations**

Carga index. Hero debe tener stagger (logo → subtitle → headline → CTA con delays).

- [ ] **Step 2: Verificar scroll reveal**

Haz scroll lento. Elementos `.reveal` deben animarse suavemente al entrar en viewport.

- [ ] **Step 3: Verificar hover effects**

Hover en nav links → underline dorado crece.
Hover en botones → background terra aparece.
Hover en cards → border dorado más prominente.

- [ ] **Step 4: Performance check**

DevTools → Performance. No debe haber jank (60fps mínimo).

---

### Task 15: Ajustes finales y optimización

**Files:**
- Potentially modify: `VITA studios/styles.css` (minor tweaks)

- [ ] **Step 1: Ajustar espaciado si es necesario**

Si algo se ve desalineado, ajustar variables `--spacing-*`.

- [ ] **Step 2: Verificar contraste de colores**

Texto blanco en negro debe estar bien. Acentos dorados deben ser legibles.

- [ ] **Step 3: Minificación (opcional)**

Si quieres performance extra, minify CSS y JS. Pero por ahora, mantener legible.

- [ ] **Step 4: Final screenshot de cada página**

Toma screenshots de todas las 6 páginas en 3 breakpoints. Verifica que todo está consistente.

---

## FASE 5: Commit y Deploy

### Task 16: Commit final (SOLO SI AUTO-COMMIT ENABLED)

*Este paso SOLO se ejecuta si autoCommit: true en .claude/ultrapowers-preferences.json*

- [ ] **Step 1: Stage todos los archivos**

```bash
cd "C:/Users/bykai/OneDrive/Documents/GitHub/Vitastudios"
git add "VITA studios/styles.css" "VITA studios/script.js" "VITA studios/"*.html
```

- [ ] **Step 2: Crear commit**

```bash
git commit -m "feat: implement premium minimalist design

Complete redesign of VITA Studios with:
- New typography: Playfair Display + Inter + DM Sans
- Color palette: Gold #C9A961 + Terra #B8674F (elegant)
- Premium minimalist layout: whitespace, clean navigation
- Dynamic animations: fadeIn, slideUp, float, scroll reveal
- Responsive design: 320px, 768px, 1440px
- Scroll reveal with IntersectionObserver
- All 6 pages refactored with new structure

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

- [ ] **Step 3: Verificar commit**

```bash
git log --oneline | head -5
```

Expected: Ver el commit reciente con "feat: implement premium minimalist design"

---

## Notas Importantes

1. **Google Fonts:** Con `font-display: swap`, las fuentes son no-blocking. El sitio carga, luego aparecen las tipografías.

2. **Animaciones:** Todas usan `transform` y `opacity` (GPU-accelerated) para máximo performance.

3. **IntersectionObserver:** Observa elementos con `.reveal`. Cuando entran en viewport, agrega `.active`. CSS anima automáticamente.

4. **Variables CSS:** Cambiar un color es cambiar 1 variable, no 50 líneas.

5. **Responsive:** Mobile-first approach. Base styles para mobile, luego media queries para tablets/desktop.

6. **Commits:** Auto-commit está ENABLED. Cada fase genera 1-2 commits.

---

## Comandos Útiles Durante Implementación

```bash
# Ver cambios sin commit
git status
git diff VITA\ studios/styles.css

# Ver commits recientes
git log --oneline -n 10

# Si necesitas revertir
git checkout -- VITA\ studios/styles.css
```

---

**Plan creado:** 2026-04-17  
**Estimado:** 3-4 horas (si ejecutas linealmente)  
**Próximo paso:** Ejecución con subagent-driven-development o executing-plans
