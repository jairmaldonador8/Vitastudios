# VITA Studio Premium Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use ultrapowers:subagent-driven-development (recommended) or ultrapowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform VITA Studio landing page from functional to best-in-class premium personal branding agency site with narrative arc flow, refined interactions, and conversion-optimized design.

**Architecture:** Modular section-by-section enhancement with progressive HTML restructuring, CSS modernization (spacing, micro-interactions, typography hierarchy), and GSAP animation implementation. Each section builds on narrative arc psychology: Problem → Solution → Proof → Authority → Social Proof → CTA.

**Tech Stack:** GSAP 3.12+, HTML5 semantic markup, CSS custom properties (dark theme system), JavaScript for carousel and form validation. No new dependencies required beyond existing GSAP.

**Skills Referenced:** @gsap-animation-patterns, @conversion-optimization-patterns, @carousel-implementation, @form-validation-ux, @dark-theme-design-system, @responsive-design-mobile-first, @web-accessibility-wcag, @micro-interactions-design, @web-performance-optimization

---

## File Structure Overview

**Files to Modify:**
- `index.html` - Add 3 new sections (Problem, Proof/Case Studies, Social Proof), reorder narrative arc, enhance existing sections
- `styles.css` - Spacing refinements (60-80px section padding), new card styles, hover states, micro-interactions, typography hierarchy
- `script.js` - Number count-up animations, testimonials carousel, form validation enhancements, scroll trigger animations

**No new files created** - all changes integrate into existing codebase structure.

---

## Task 1: HTML Structure - Add Problem Section

**Files:**
- Modify: `index.html` (after Hero section)

**Context:** The Problem section establishes empathy early in the narrative arc. It should come right after the Hero to acknowledge the visitor's challenges before positioning solutions. This is critical for conversion psychology.

- [ ] **Step 1: Review current HTML structure**

Read the current index.html to understand existing section markup and class naming conventions.

```bash
cat index.html | head -100
```

- [ ] **Step 2: Insert Problem section HTML**

Add the new Problem section (after hero, before services). Use semantic `<section>` with `class="problema"` to match existing naming.

```html
<section class="problema">
  <div class="container">
    <h2>Los Desafíos que Enfrentas</h2>
    <p class="subtitle">Reconocemos los obstáculos que frenan tu crecimiento</p>
    
    <div class="problema-grid">
      <div class="problema-card">
        <div class="problema-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <!-- Target/bullseye icon SVG -->
            <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2"/>
            <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"/>
            <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <h3>Tu marca no refleja tu verdadero valor</h3>
        <p>Sin identidad visual clara, pierdes credibilidad ante clientes potenciales que deciden en 3 segundos si confían en ti.</p>
      </div>
      
      <div class="problema-card">
        <div class="problema-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <!-- Lightning/momentum icon SVG -->
            <path d="M24 4l6 12h12l-10 8 4 12-12-9-12 9 4-12-10-8h12l6-12z" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>
        <h3>Pierdes oportunidades por falta de presencia digital</h3>
        <p>Visibilidad online no es suficiente. Necesitas autoridad percibida que convierta visitantes en clientes reales.</p>
      </div>
      
      <div class="problema-card">
        <div class="problema-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <!-- Target/conversion icon SVG -->
            <rect x="8" y="8" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none"/>
            <circle cx="24" cy="24" r="6" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </div>
        <h3>Tu sitio web no convierte visitantes en clientes</h3>
        <p>Un sitio bonito sin estrategia de conversión es solo una tarjeta digital costosa. Necesitas un sistema que venda.</p>
      </div>
      
      <div class="problema-card">
        <div class="problema-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <!-- Positioning/chart icon SVG -->
            <path d="M8 40h32M32 30v10M24 20v20M16 26v14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>Compites en precio porque tu marca no comunica diferencia</h3>
        <p>Sin posicionamiento claro, clientes solo ven commodity, no valor único. El precio se convierte en tu único argumento.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Verify markup is valid**

Ensure the HTML validates and the section structure matches existing patterns. Check that classes are consistent with CSS naming conventions.

---

## Task 2: HTML Structure - Enhance Case Studies Section

**Files:**
- Modify: `index.html` (portfolio/cases section renamed to "Casos de Éxito")

**Context:** The "Proof" section demonstrates mastery with measurable results. This transforms the existing portfolio section into a results-focused proof element critical to the narrative arc.

- [ ] **Step 1: Review existing portfolio section**

Read the existing cases/portfolio section to understand current structure.

```bash
grep -n "portfolio\|casos\|proyectos" index.html | head -20
```

- [ ] **Step 2: Restructure with results focus**

Update each case card to highlight:
- Client type/name (bold)
- Big result number (terracota, large, prominent)
- Outcome statement (white text)
- Time frame (secondary golden text)

Example updated structure:
```html
<section class="casos-exito">
  <div class="container">
    <h2>Resultados Reales que Hablan</h2>
    <p class="subtitle">Transformaciones medibles en industrias diversas</p>
    
    <div class="casos-grid">
      <div class="caso-card">
        <div class="caso-result">
          <span class="resultado-numero">300%</span>
          <span class="resultado-label">Aumento en Leads</span>
        </div>
        <h3>Médica Especialista</h3>
        <p class="caso-outcome">De invisibilidad a especialista de referencia en su nicho</p>
        <p class="caso-timeframe">En 4 meses</p>
      </div>
      <!-- 5 more cards following same pattern -->
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add 6 case study cards**

Create 6 diverse case studies representing target audience (doctors, entrepreneurs, creators):
1. Médica Especialista | 300% leads
2. Emprendedor Tech | $50K/mes revenue
3. Creador Contenido | Monetization strategy
4. Inmobiliario | +12 properties
5. Coach/Consultor | 10x demand
6. Médico | #1 local search

---

## Task 3: HTML Structure - Add Social Proof Section

**Files:**
- Modify: `index.html` (new section after "Why Choose VITA")

**Context:** Social Proof section has three subsections: key metrics (count-up), testimonials carousel, and client logos. This is the final trust-building element before the CTA.

- [ ] **Step 1: Create metrics subsection**

```html
<section class="social-proof">
  <div class="container">
    <h2>Confianza Demostrada</h2>
    
    <!-- Metrics subsection -->
    <div class="metrics-container">
      <div class="metric-card">
        <span class="metric-number" data-count="150">0</span>
        <span class="metric-label">Campañas Exitosas</span>
      </div>
      <div class="metric-card">
        <span class="metric-number" data-count="4.9">0</span>
        <span class="metric-label">Rating Promedio</span>
      </div>
      <div class="metric-card">
        <span class="metric-number" data-count="92">0</span>
        <span class="metric-label">% Retención</span>
      </div>
      <div class="metric-card">
        <span class="metric-number" data-count="24">0</span>
        <span class="metric-label">Horas Respuesta</span>
      </div>
    </div>
```

- [ ] **Step 2: Create testimonials carousel HTML**

```html
    <!-- Testimonials carousel subsection -->
    <div class="testimonials-container">
      <div class="testimonial-carousel" id="testimonialCarousel">
        <div class="testimonial-slide active">
          <div class="testimonial-content">
            <div class="testimonial-stars">
              <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span>
            </div>
            <p class="testimonial-quote">"Jair transformó completamente mi presencia online. En 3 meses pasé de tener 2 clientes a tener una lista de espera de 6 meses. Su estrategia realmente funciona."</p>
            <p class="testimonial-author">María García, Médica Especialista</p>
            <p class="testimonial-result">+300% en leads cualificados</p>
          </div>
        </div>
        <!-- 3-4 more testimonial slides -->
      </div>
      <div class="carousel-controls">
        <button class="carousel-dot active" data-slide="0"></button>
        <button class="carousel-dot" data-slide="1"></button>
        <button class="carousel-dot" data-slide="2"></button>
        <button class="carousel-dot" data-slide="3"></button>
      </div>
    </div>

    <!-- Client logos subsection -->
    <div class="logos-container">
      <p class="logos-label">Confían en VITA</p>
      <div class="logos-grid">
        <!-- Placeholder logos - replace with actual client names/logos -->
        <div class="logo-item">Médicos</div>
        <div class="logo-item">Tech Startups</div>
        <div class="logo-item">Creadores</div>
        <!-- More logos -->
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add testimonial slides (3-4 total)**

Each slide with: stars, quote, author, result line. Use real testimonials if available, or placeholder text.

---

## Task 4: HTML Structure - Reorganize Narrative Arc

**Files:**
- Modify: `index.html` (reorder sections)

**Context:** The narrative arc order matters for psychological impact. Current order must follow: Hero → Problem → Services → Proof → Why → Social Proof → CTA → Founder → Contact.

- [ ] **Step 1: Document current section order**

List all sections in current HTML in order.

- [ ] **Step 2: Reorder sections to match narrative arc**

If sections are not in narrative order, reorder via git or file editing. Desired order:
1. Header/Nav
2. Hero (existing)
3. **Problem (new)**
4. Services (rename from Servicios)
5. **Case Studies / Proof (enhanced existing)**
6. Why Choose VITA (existing)
7. **Social Proof (new)**
8. CTA Section (existing or new if missing)
9. Founder / About (existing)
10. Contact (existing)
11. Footer (existing)

- [ ] **Step 3: Verify all section IDs are unique and descriptive**

Each section should have a unique `id` for anchor linking (hero, problema, servicios, casos, por-que, social-proof, cta, founder, contact).

---

## Task 5: CSS - Refine Spacing & Typography System

**Files:**
- Modify: `styles.css`

**Context:** Premium feel comes from generous spacing and clear typography hierarchy. The dark theme color system is already in place; now we refine spacing and typography.

- [ ] **Step 1: Enhance section padding**

Update section padding from current values to premium 60-80px (desktop). Use responsive scaling for tablet (40px) and mobile (24-32px).

```css
/* Add or update in styles.css */
section {
  padding: 80px 0;
}

@media (max-width: 1023px) {
  section {
    padding: 60px 0;
  }
}

@media (max-width: 767px) {
  section {
    padding: 40px 0;
  }
}
```

- [ ] **Step 2: Update card padding and gaps**

```css
.card, .problema-card, .caso-card, .metric-card {
  padding: 40px;
}

.grid {
  gap: 32px;
}

@media (max-width: 768px) {
  .card, .problema-card, .caso-card, .metric-card {
    padding: 32px;
  }
  .grid {
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .card, .problema-card, .caso-card, .metric-card {
    padding: 24px;
  }
  .grid {
    gap: 16px;
  }
}
```

- [ ] **Step 3: Refine typography hierarchy**

```css
/* Typography system using custom properties */
h1 {
  font-size: var(--font-size-4xl, 56px);
  font-family: var(--font-serif);
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: var(--font-size-3xl, 42px);
  font-family: var(--font-serif);
  font-weight: 700;
  line-height: 1.2;
}

h3 {
  font-size: var(--font-size-xl, 20px);
  font-family: var(--font-serif);
  font-weight: 600;
  line-height: 1.3;
}

p {
  font-size: var(--font-size-base, 16px);
  line-height: 1.7;
  color: var(--color-text);
}

.subtitle {
  font-size: var(--font-size-lg, 18px);
  color: var(--color-text-light);
  font-weight: 500;
}

@media (max-width: 768px) {
  h1 { font-size: 42px; }
  h2 { font-size: 32px; }
  h3 { font-size: 18px; }
  p { font-size: 15px; }
}

@media (max-width: 480px) {
  h1 { font-size: 28px; }
  h2 { font-size: 24px; }
  h3 { font-size: 16px; }
  p { font-size: 14px; }
}
```

- [ ] **Step 4: Update line heights for readability**

Ensure body text has 1.6-1.8 line-height on all screen sizes (already done in step 3, but verify consistency).

---

## Task 6: CSS - Style Problem Section

**Files:**
- Modify: `styles.css` (add .problema and related classes)

**Context:** Problem cards use dark background, subtle borders, and lift-on-hover animation with terracota glow. Icons are 48px SVG with golden color.

- [ ] **Step 1: Create problema section styles**

```css
.problema {
  padding: 80px 0;
  background: var(--color-cream); /* #1A1A1A */
}

.problema h2 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--color-text);
}

.problema .subtitle {
  text-align: center;
  margin-bottom: 60px;
}

.problema-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

.problema-card {
  background: var(--color-cream-dark); /* #252525 */
  border: 1px solid var(--color-border); /* #333333 */
  padding: 40px;
  border-radius: 12px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.problema-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(255, 122, 61, 0.1);
  border-color: var(--color-terracota);
}

.problema-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
  color: var(--color-terracota);
}

.problema-icon svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
}

.problema-card h3 {
  color: var(--color-text);
  margin-bottom: 12px;
}

.problema-card p {
  color: var(--color-text);
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .problema-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Verify responsive behavior on tablet (768px)**

Grid should become 1-column on tablet. Test.

- [ ] **Step 3: Add mobile styles (480px)**

Reduce padding and ensure text remains readable on small screens.

---

## Task 7: CSS - Style Case Studies Section

**Files:**
- Modify: `styles.css` (add .casos-exito and related classes)

**Context:** Case study cards feature large result numbers in terracota, centered layout, with gradient background and hover reveal. Numbers count up when section enters viewport (animated by GSAP).

- [ ] **Step 1: Create casos-exito styles**

```css
.casos-exito {
  background: var(--color-cream);
  padding: 80px 0;
}

.casos-exito h2 {
  text-align: center;
  color: var(--color-text);
  margin-bottom: 20px;
}

.casos-exito .subtitle {
  text-align: center;
  margin-bottom: 60px;
}

.casos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.caso-card {
  background: linear-gradient(135deg, rgba(255, 122, 61, 0.1) 0%, rgba(255, 122, 61, 0.05) 100%);
  border: 1px solid var(--color-border);
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.caso-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(255, 122, 61, 0.15);
  border-color: var(--color-terracota);
}

.caso-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.resultado-numero {
  font-size: 56px;
  font-weight: 700;
  color: var(--color-terracota);
  line-height: 1;
  margin-bottom: 8px;
  font-family: var(--font-sans);
}

.resultado-label {
  font-size: 14px;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.caso-card h3 {
  color: var(--color-text);
  margin-bottom: 12px;
  font-size: 18px;
}

.caso-outcome {
  color: var(--color-text);
  font-size: 15px;
  margin-bottom: 16px;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.caso-timeframe {
  font-size: 12px;
  color: var(--color-text-light);
  opacity: 0.8;
}

@media (max-width: 1023px) {
  .casos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .casos-grid {
    grid-template-columns: 1fr;
  }
  .resultado-numero {
    font-size: 42px;
  }
}
```

- [ ] **Step 2: Ensure gradient overlay effect is subtle**

The gradient background should enhance without overwhelming. Opacity at 0.05-0.1 is correct.

---

## Task 8: CSS - Style Social Proof Section

**Files:**
- Modify: `styles.css` (add .social-proof, .metrics-container, .testimonials-container, .logos-container)

**Context:** Three subsections with distinct styling: metrics with count-up animation, testimonials carousel with star ratings, and client logos grid.

- [ ] **Step 1: Create metrics subsection styles**

```css
.social-proof {
  background: var(--color-cream);
  padding: 80px 0;
}

.social-proof h2 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--color-text);
}

.metrics-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto 80px;
  text-align: center;
}

.metric-card {
  background: var(--color-cream-dark);
  border: 1px solid var(--color-border);
  padding: 40px 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.metric-card:hover {
  border-color: var(--color-terracota);
  box-shadow: 0 8px 24px rgba(255, 122, 61, 0.1);
}

.metric-number {
  display: block;
  font-size: 48px;
  font-weight: 700;
  color: var(--color-terracota);
  line-height: 1;
  margin-bottom: 12px;
}

.metric-label {
  display: block;
  font-size: 14px;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 1023px) {
  .metrics-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .metrics-container {
    grid-template-columns: 1fr;
  }
  .metric-number {
    font-size: 36px;
  }
}
```

- [ ] **Step 2: Create testimonials carousel styles**

```css
.testimonials-container {
  max-width: 900px;
  margin: 0 auto 80px;
}

.testimonial-carousel {
  position: relative;
  background: var(--color-cream-dark);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 60px 40px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.testimonial-slide {
  opacity: 0;
  position: absolute;
  transition: opacity 0.6s ease;
  text-align: center;
  width: 100%;
}

.testimonial-slide.active {
  opacity: 1;
  position: relative;
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial-stars {
  font-size: 24px;
  color: var(--color-terracota);
  margin-bottom: 24px;
  letter-spacing: 4px;
}

.testimonial-quote {
  font-size: 18px;
  font-family: var(--font-serif);
  color: var(--color-text);
  margin-bottom: 24px;
  line-height: 1.8;
  font-style: italic;
}

.testimonial-author {
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.testimonial-result {
  font-size: 14px;
  color: var(--color-text-light);
}

.carousel-controls {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-border);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot.active {
  background: var(--color-terracota);
  width: 32px;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .testimonial-carousel {
    padding: 40px 24px;
    min-height: 250px;
  }
  .testimonial-quote {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .testimonial-carousel {
    padding: 24px 16px;
  }
  .testimonial-quote {
    font-size: 14px;
  }
}
```

- [ ] **Step 3: Create logos subsection styles**

```css
.logos-container {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

.logos-label {
  color: var(--color-text-light);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 40px;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  align-items: center;
}

.logo-item {
  background: var(--color-cream-dark);
  border: 1px solid var(--color-border);
  padding: 24px;
  border-radius: 8px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-light);
  font-size: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.logo-item:hover {
  border-color: var(--color-terracota);
  box-shadow: 0 4px 16px rgba(255, 122, 61, 0.1);
}

@media (max-width: 1023px) {
  .logos-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .logos-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Task 9: CSS - Enhance Micro-Interactions & Hover States

**Files:**
- Modify: `styles.css` (add button, link, form input hover states)

**Context:** Micro-interactions use 0.2-0.3s timing for smooth premium feel. Buttons lift and glow, links animate underline, form inputs glow on focus. All follow @micro-interactions-design patterns.

- [ ] **Step 1: Enhance button hover states**

```css
button, .btn {
  background: var(--color-terracota);
  color: white;
  border: none;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

button:hover, .btn:hover {
  background: var(--color-terracota-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 122, 61, 0.3);
}

button:active, .btn:active {
  transform: translateY(0);
}

button:focus, .btn:focus {
  outline: 2px solid var(--color-terracota);
  outline-offset: 2px;
}
```

- [ ] **Step 2: Enhance link hover states with underline animation**

```css
a {
  position: relative;
  color: var(--color-terracota);
  text-decoration: none;
  transition: color 0.3s ease;
}

a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-terracota);
  transition: width 0.3s ease;
}

a:hover {
  color: var(--color-terracota-dark);
}

a:hover::after {
  width: 100%;
}
```

- [ ] **Step 3: Enhance form input focus states**

```css
input, textarea {
  background: var(--color-cream-dark);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  border-color: var(--color-terracota);
  box-shadow: 0 0 0 3px rgba(255, 122, 61, 0.1);
  outline: none;
}

input::placeholder, textarea::placeholder {
  color: var(--color-text-light);
  opacity: 0.6;
}
```

- [ ] **Step 4: Verify all transitions are 0.2-0.3s**

Check that hover/focus transitions follow @micro-interactions-design timing rules: 0.2-0.3s for snappy, premium feel.

---

## Task 10: JavaScript - Implement Number Count-Up Animations

**Files:**
- Modify: `script.js` (add countUpAnimation function)

**Context:** When metrics section enters viewport, numbers animate from 0 to target value over 2 seconds. Uses GSAP for smooth animation. Reference @gsap-animation-patterns for count-up technique.

- [ ] **Step 1: Create count-up function with GSAP**

```javascript
function initCountUpAnimations() {
  const countUpElements = document.querySelectorAll('[data-count]');
  
  countUpElements.forEach(element => {
    const targetValue = parseFloat(element.dataset.count);
    const isDecimal = targetValue % 1 !== 0;
    
    const obj = { value: 0 };
    const tween = gsap.to(obj, {
      value: targetValue,
      duration: 2,
      ease: 'power2.out',
      onUpdate: function() {
        if (isDecimal) {
          element.textContent = obj.value.toFixed(1);
        } else {
          element.textContent = Math.floor(obj.value);
        }
      }
    });
    
    // Pause until section is visible
    tween.pause();
    
    // Use ScrollTrigger to start animation when section enters viewport
    ScrollTrigger.create({
      trigger: element.closest('.metrics-container'),
      onEnter: () => tween.play(),
      once: true
    });
  });
}

// Call on page load
window.addEventListener('load', () => {
  initCountUpAnimations();
});
```

- [ ] **Step 2: Ensure GSAP ScrollTrigger is registered**

Verify that ScrollTrigger plugin is already registered at top of script.js:
```javascript
gsap.registerPlugin(ScrollTrigger);
```

- [ ] **Step 3: Test count-up animation**

Scroll to metrics section in browser. Numbers should animate from 0 to target value when section enters viewport.

- [ ] **Step 4: Verify animation only runs once**

Use `once: true` in ScrollTrigger to ensure animation plays only on first view.

---

## Task 11: JavaScript - Implement Testimonials Carousel

**Files:**
- Modify: `script.js` (add TestimonialCarousel class)

**Context:** Auto-rotating carousel with 5-second interval between slides. Clickable dots for manual navigation. Smooth fade transitions using GSAP. Reference @carousel-implementation for accessibility compliance.

- [ ] **Step 1: Create TestimonialCarousel class**

```javascript
class TestimonialCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.slides = this.container.querySelectorAll('.testimonial-slide');
    this.dots = document.querySelectorAll('.carousel-dot');
    this.currentSlide = 0;
    this.autoAdvanceInterval = null;
    
    this.init();
  }
  
  init() {
    // Setup dot click handlers
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Start auto-advance
    this.startAutoAdvance();
    
    // Pause on hover (optional, for better UX)
    this.container.addEventListener('mouseenter', () => this.stopAutoAdvance());
    this.container.addEventListener('mouseleave', () => this.startAutoAdvance());
  }
  
  goToSlide(index) {
    // Fade out current slide
    gsap.to(this.slides[this.currentSlide], {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut'
    });
    
    // Remove active class from current dot
    this.dots[this.currentSlide].classList.remove('active');
    
    // Update current slide index
    this.currentSlide = index;
    
    // Add active class to new dot
    this.dots[this.currentSlide].classList.add('active');
    
    // Fade in new slide
    gsap.to(this.slides[this.currentSlide], {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.inOut'
    });
  }
  
  advance() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }
  
  startAutoAdvance() {
    this.autoAdvanceInterval = setInterval(() => this.advance(), 5000);
  }
  
  stopAutoAdvance() {
    clearInterval(this.autoAdvanceInterval);
  }
}

// Initialize on page load
window.addEventListener('load', () => {
  new TestimonialCarousel('testimonialCarousel');
});
```

- [ ] **Step 2: Add keyboard navigation for accessibility**

```javascript
// In TestimonialCarousel.init():
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
  if (e.key === 'ArrowRight') this.advance();
});
```

- [ ] **Step 3: Test carousel functionality**

- Auto-advance every 5 seconds
- Click dots to navigate
- Pause on hover
- Arrow key navigation

- [ ] **Step 4: Verify accessibility**

- Dots have proper ARIA labels or semantic role
- Carousel is keyboard navigable
- Focus states visible

Reference @carousel-implementation for WCAG 2.2.2 compliance checklist.

---

## Task 12: JavaScript - Enhance Existing GSAP Scroll Animations

**Files:**
- Modify: `script.js` (enhance existing ScrollTrigger animations for new sections)

**Context:** The existing GSAP setup for hero and services sections should be extended to new sections (Problem, Proof, Social Proof). All use same pattern: fade-in + upward slide on scroll, staggered element delays.

- [ ] **Step 1: Review existing GSAP animation pattern**

Find the current scroll animation initialization. Should look like:
```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.card').forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: 100,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 85%'
    }
  });
});
```

- [ ] **Step 2: Extend animation to new section elements**

Add selectors for new sections:
```javascript
// Apply same animation to new section cards
gsap.utils.toArray('.problema-card, .caso-card, .metric-card, .logo-item').forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%'
    }
  });
});
```

- [ ] **Step 3: Add staggered animation to grids**

For grid layouts, use GSAP timeline with staggered delays:
```javascript
gsap.utils.toArray('.problema-grid, .casos-grid, .metrics-container').forEach((grid) => {
  const children = grid.querySelectorAll('.problema-card, .caso-card, .metric-card');
  
  gsap.from(children, {
    opacity: 0,
    y: 100,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: grid,
      start: 'top 85%'
    }
  });
});
```

- [ ] **Step 4: Test scroll animations**

Scroll to each section. Cards should fade in and slide up smoothly with staggered timing (0.1s between each).

- [ ] **Step 5: Verify performance on mobile**

Ensure animations don't cause jank on mobile. Monitor frame rate in DevTools.

---

## Task 13: JavaScript - Enhance Form Validation

**Files:**
- Modify: `script.js` (add form validation function)

**Context:** Real-time inline validation as user types. Error messages appear below field with aria-describedby linking. Reference @form-validation-ux for patterns.

- [ ] **Step 1: Create form validation function**

```javascript
function initFormValidation() {
  const form = document.querySelector('form');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    // Validate on input event (real-time)
    input.addEventListener('input', () => validateField(input));
    
    // Validate on blur event (final check)
    input.addEventListener('blur', () => validateField(input));
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) isValid = false;
    });
    
    if (!isValid) {
      e.preventDefault();
    }
  });
}

function validateField(field) {
  let isValid = true;
  let errorMessage = '';
  
  // Name validation
  if (field.name === 'name') {
    if (field.value.trim().length < 2) {
      isValid = false;
      errorMessage = 'El nombre debe tener al menos 2 caracteres';
    }
  }
  
  // Email validation
  if (field.name === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      isValid = false;
      errorMessage = 'Por favor ingresa un email válido';
    }
  }
  
  // Message validation
  if (field.name === 'message') {
    if (field.value.trim().length < 10) {
      isValid = false;
      errorMessage = 'El mensaje debe tener al menos 10 caracteres';
    }
  }
  
  // Update UI
  updateFieldError(field, isValid, errorMessage);
  return isValid;
}

function updateFieldError(field, isValid, errorMessage) {
  const errorElement = document.getElementById(`${field.name}-error`);
  
  if (!isValid) {
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = 'block';
    }
  } else {
    field.classList.remove('error');
    field.setAttribute('aria-invalid', 'false');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  }
}

// Initialize on page load
window.addEventListener('load', () => {
  initFormValidation();
});
```

- [ ] **Step 2: Add CSS error state styling**

```css
input.error, textarea.error {
  border-color: #ff6b6b;
}

.error-message {
  color: #ff6b6b;
  font-size: 12px;
  margin-top: 6px;
  display: none;
}

.error-message.show {
  display: block;
}
```

- [ ] **Step 3: Add HTML error elements in form**

Ensure contact form has error message placeholders:
```html
<input type="email" name="email" id="email" required aria-required="true" aria-describedby="email-error" />
<p id="email-error" class="error-message" role="alert"></p>
```

- [ ] **Step 4: Test validation**

Type invalid input → error appears below field
Type valid input → error disappears
Submit without valid fields → prevented

---

## Task 14: Responsive Design - Mobile Optimization

**Files:**
- Modify: `styles.css` (verify/enhance media queries)

**Context:** Dark theme works beautifully on mobile with proper touch targets (44px+), readable typography, and single-column layouts. Reference @responsive-design-mobile-first and @web-performance-optimization.

- [ ] **Step 1: Verify touch targets are 44px+**

All buttons, form inputs, clickable elements must be at least 44x44px on mobile:

```css
@media (max-width: 768px) {
  button, input, a.btn {
    min-height: 48px;
    min-width: 48px;
    font-size: 16px; /* Prevents iOS auto-zoom */
    padding: 12px 24px;
  }
}
```

- [ ] **Step 2: Verify typography scales appropriately**

H1: 56px → 28px, H2: 42px → 24px, body: 16px → 14px (all verified in Task 5, step 3).

- [ ] **Step 3: Verify no horizontal scroll**

Test that sections don't overflow on mobile. Container max-width and padding should prevent this.

- [ ] **Step 4: Test on real mobile device**

Use Chrome DevTools device emulation, then test on actual phone if possible. Performance target: <3s load on 4G.

---

## Task 15: Accessibility - WCAG AA Compliance Check

**Files:**
- Modify: `index.html`, `styles.css`, `script.js` (verify compliance)

**Context:** Dark theme uses WCAG AAA contrast ratios (7.8:1 golden on dark). Keyboard navigation works. Focus indicators visible. Animations respect prefers-reduced-motion. Reference @web-accessibility-wcag.

- [ ] **Step 1: Verify color contrast ratios**

Test with WebAIM contrast checker:
- White (#FFFFFF) on Dark (#1A1A1A) = 18.5:1 ✅ AAA
- Golden (#D4AF87) on Dark (#1A1A1A) = 7.8:1 ✅ AAA
- Terracota (#FF7A3D) on Dark (#1A1A1A) = 5.5:1 ✅ AA

Document ratios, ensure minimum 4.5:1 for normal text.

- [ ] **Step 2: Verify keyboard navigation**

Test that all interactive elements (buttons, links, form inputs) are keyboard accessible via Tab key. Focus order logical (top to bottom, left to right).

- [ ] **Step 3: Verify focus indicators**

All interactive elements should have visible 2px outline on focus:
```css
button:focus, a:focus, input:focus {
  outline: 2px solid var(--color-terracota);
  outline-offset: 2px;
}
```

- [ ] **Step 4: Implement prefers-reduced-motion**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Verify semantic HTML**

Check that page uses semantic elements: `<button>`, `<a>`, `<h1>-<h6>`, `<section>`, `<form>`, etc. No `<div onclick>` or `<span class="link">`.

- [ ] **Step 6: Verify form labels**

All inputs have associated `<label>` elements with `for` attribute matching input `id`.

---

## Task 16: Performance Optimization Check

**Files:**
- Modify: None (verify existing setup)

**Context:** Landing page targets <3s load on 4G mobile. GSAP is ~36KB gzipped (acceptable). Images should be <100KB hero, <50KB thumbnails. Reference @web-performance-optimization.

- [ ] **Step 1: Run Lighthouse audit**

Open Chrome DevTools → Lighthouse → Generate report. Target: 90+ Performance score.

- [ ] **Step 2: Verify image sizes**

Check that:
- Hero background/images < 100KB
- Case study cards < 50KB each
- Testimonial avatars < 30KB each

If images are larger, use ImageOptim or Squoosh to compress.

- [ ] **Step 3: Verify bundle size**

GSAP: ~36KB gzipped (acceptable)
Total JS (minified + gzipped) should be < 100KB

Check with: DevTools → Network → filter JS → Sum total gzipped size

- [ ] **Step 4: Verify Core Web Vitals targets**

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Monitor with Lighthouse or WebVitals library.

---

## Task 17: Testing - Visual Testing on All Breakpoints

**Files:**
- All modified files

**Context:** Test layout, typography, animations, and interactions on desktop, tablet, and mobile. Use browser DevTools for emulation, then real devices if available.

- [ ] **Step 1: Test desktop (1440px)**

- [ ] **Step 2: Test tablet (768px)**

- [ ] **Step 3: Test mobile (375px)**

For each breakpoint, verify:
- ✅ Typography readable
- ✅ No horizontal scroll
- ✅ Cards stack properly
- ✅ Buttons/inputs touch-accessible
- ✅ Animations smooth
- ✅ Images loaded
- ✅ Forms functional

- [ ] **Step 4: Test on real mobile device**

If possible, test on real iPhone and Android phone for authentic 4G performance, touch interactions, and viewport behavior.

---

## Task 18: Testing - Form & Interaction Testing

**Files:**
- script.js (form validation)
- Contact form HTML

**Context:** Test form validation, carousel navigation, animations. Ensure all user interactions work smoothly and provide clear feedback.

- [ ] **Step 1: Test contact form**

- [ ] **Step 2: Test carousel navigation**

- [ ] **Step 3: Test button hover states**

For each, verify:
- ✅ Validation messages appear/disappear
- ✅ Errors prevent submission
- ✅ Carousel auto-advances every 5s
- ✅ Dot clicks navigate correctly
- ✅ Keyboard (arrow keys) works
- ✅ Button hovers work on desktop and mobile
- ✅ Micro-interactions smooth and responsive

---

## Task 19: Commit Changes

**Files:**
- index.html
- styles.css
- script.js

**Context:** Commit all changes with descriptive message. Auto-commit enabled per preferences.

- [ ] **Step 1: Stage all modified files**

```bash
git add index.html styles.css script.js
```

- [ ] **Step 2: Review changes**

```bash
git diff --cached | head -200
```

- [ ] **Step 3: Commit with message**

```bash
git commit -m "feat: implement premium landing page redesign with narrative arc

- Add Problem section with 4 empathy-driven cards
- Enhance Case Studies section with results-focused layout and count-up animations
- Implement Social Proof section (metrics, testimonials carousel, client logos)
- Reorganize sections to follow narrative arc (Problem → Solution → Proof → Authority → Social Proof → CTA)
- Refine spacing (60-80px sections, 40px cards, 32px gaps) for premium feel
- Enhance typography hierarchy (56px H1, 42px H2, 1.7 line-height body)
- Style all new sections with dark theme colors (#1A1A1A, #252525, #FF7A3D, #D4AF87)
- Implement testimonials carousel with auto-advance, keyboard nav, WCAG compliance
- Add number count-up animations for metrics (GSAP ScrollTrigger)
- Enhance form validation with real-time feedback
- Implement micro-interactions (0.3s button hover, card lift, link underline animation)
- Optimize for mobile (44px+ touch targets, responsive grids, readable typography)
- Verify WCAG AA accessibility (contrast ratios, keyboard nav, prefers-reduced-motion)

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

- [ ] **Step 4: Verify commit**

```bash
git log --oneline | head -5
```

---

## Task 20: Deployment & Verification

**Files:**
- Live site

**Context:** Push changes to main branch (after user review if desired). Deploy to live server. Verify all sections visible, animations working, forms functional.

- [ ] **Step 1: Push to remote (if auto-push enabled)**

```bash
git push origin main
```

- [ ] **Step 2: Verify live deployment**

Visit live site URL and test:
- ✅ All new sections visible
- ✅ Animations smooth
- ✅ Form submits
- ✅ Carousel works
- ✅ Performance acceptable
- ✅ Mobile responsive

- [ ] **Step 3: Monitor for errors**

Check browser console and server logs for any errors after deployment.

- [ ] **Step 4: Document completion**

Mark all tasks complete. Landing page is now best-in-class premium personal branding site with narrative arc, refined interactions, and strong conversion focus.

---

## Success Criteria

✅ **Premium Feel:** Generous spacing (60-80px), refined typography hierarchy, sophisticated dark theme  
✅ **Narrative Arc:** Problem → Solution → Proof → Authority → Social Proof → CTA flow  
✅ **Conversion Focused:** Multiple CTAs, clear value prop, friction-free contact  
✅ **Animations:** Smooth scroll reveals, count-ups, carousel, micro-interactions (0.3s timing)  
✅ **Mobile Ready:** Responsive grids, 44px+ touch targets, readable typography, <3s load  
✅ **Accessible:** WCAG AA contrast, keyboard nav, focus indicators, prefers-reduced-motion  
✅ **Performance:** Lighthouse 90+, Core Web Vitals targets met  

---

**Plan Status:** Ready for Implementation  
**Estimated Timeline:** 2-3 days with subagent-driven development  
**Next Step:** Choose execution approach (Subagent-Driven or Inline Execution)
