# VITA Studios Complete Refactor Implementation Plan

> **For agentic workers:** Use ultrapowers:subagent-driven-development (recommended) or ultrapowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate all VITA Studios pages under a unified Terra color scheme (cinematic black/white aesthetic), extract duplicated CSS into a global stylesheet, optimize code for maintainability, and enhance responsive design and animations across all 6 pages.

**Architecture:** 
- Create `styles.css` as a shared stylesheet with common styles (reset, variables, nav, footer, buttons, animations, cursor system)
- Each HTML page will retain minimal inline styles for page-specific components
- Replace all Blue (#3B82F6) references with Terra (#C4503A) throughout
- Standardize animations, spacing, typography, and hover states
- Implement mobile-first responsive design improvements

**Tech Stack:** 
- HTML5, CSS3 (CSS Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (custom cursor system, smooth scroll, interactions)
- Google Fonts: Bebas Neue, Outfit, DM Sans, Clash Display

**Pages to refactor:** 6 total
1. index.html (reference - already using Terra)
2. agendar-sesion.html
3. paquete-esencia.html
4. paquete-presencia.html
5. propuesta-vita-club.html
6. vita_productions.html

---

## Phase 1: CSS Consolidation & Global Setup

### Task 1: Create Global Styles Sheet

**Files:**
- Create: `VITA studios/styles.css`

**Action:** Extract all shared/common styles into a global stylesheet

```css
/* ═══════════════════════════════════════════════════════════════ */
/* VITA STUDIOS - GLOBAL STYLES */
/* ═══════════════════════════════════════════════════════════════ */

/* ─── RESET & ROOT ──────────────────────────────────────────────────── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--white);
  cursor: none;
  line-height: 1.6;
}

/* ─── SCROLLBAR ────────────────────────────────────────────────────── */
::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  background: var(--bg);
}

::-webkit-scrollbar-thumb {
  background: var(--terra);
  border-radius: 0;
}

/* ─── LINKS ────────────────────────────────────────────────────────── */
a {
  color: inherit;
  text-decoration: none;
}

/* ─── ROOT VARIABLES ───────────────────────────────────────────────────── */
:root {
  /* Backgrounds */
  --bg: #000000;
  --bg2: #0A0A0A;
  --bg3: #111111;
  
  /* Text */
  --white: #FFFFFF;
  --off: #E8E8E8;
  
  /* Primary Color: Terra (Warm Red/Brown) */
  --terra: #C4503A;
  --terra2: #E06B52;
  
  /* Borders & Dividers */
  --muted: #555555;
  --border: rgba(255, 255, 255, 0.06);
  --border2: rgba(255, 255, 255, 0.10);
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 60px;
  --spacing-3xl: 80px;
  
  /* Transitions */
  --ease-in-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ─── CUSTOM CURSOR ────────────────────────────────────────────────────── */
#cursor-dot {
  width: 6px;
  height: 6px;
  background: var(--terra);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease, background 0.3s;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

#cursor-ring {
  width: 28px;
  height: 28px;
  border: 1px solid var(--terra2);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.18s var(--ease-out), width 0.3s, height 0.3s, opacity 0.3s, border-color 0.3s;
  opacity: 0.4;
  mix-blend-mode: difference;
}

.cursor-hover #cursor-dot {
  transform: translate(-50%, -50%) scale(2);
  background: var(--white);
}

.cursor-hover #cursor-ring {
  width: 44px;
  height: 44px;
  border-color: var(--white);
  opacity: 0.3;
}

.cursor-text-active #cursor-dot {
  opacity: 0;
}

.cursor-text-active #cursor-ring {
  width: 50px;
  height: 50px;
  opacity: 0.1;
  border-color: var(--terra);
}

/* ─── TYPOGRAPHY ────────────────────────────────────────────────────── */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', sans-serif;
  line-height: 1;
  letter-spacing: 0.02em;
}

/* ─── UTILITY CLASSES ──────────────────────────────────────────────────── */
.eyebrow {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--terra);
  display: inline-block;
  margin-bottom: 20px;
}

.eyebrow.large {
  font-size: 1.1rem;
  letter-spacing: 0.35em;
}

.grad-text {
  background: linear-gradient(135deg, var(--white) 0%, rgba(244, 244, 240, 0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── ANIMATIONS ───────────────────────────────────────────────────── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

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
    transform: translateY(48px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes textReveal {
  from {
    opacity: 0;
    transform: translateY(20px) skewY(1.5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) skewY(0deg);
  }
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(48px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes revealLeft {
  from {
    opacity: 0;
    transform: translateX(-48px) translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.08);
  }
}

@keyframes drift {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(30px);
    opacity: 0;
  }
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@keyframes scrollDot {
  to {
    top: 130%;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

/* Reveal utility classes */
.reveal {
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.9s var(--ease-in-out), transform 0.9s var(--ease-in-out);
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

.reveal-left {
  opacity: 0;
  transform: translateX(-48px) translateY(16px);
  transition: opacity 1s var(--ease-in-out), transform 1s var(--ease-in-out);
}

.reveal-left.visible {
  opacity: 1;
  transform: none;
}

/* ─── BUTTONS ──────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Outfit', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 14px 30px;
  transition: all 0.25s var(--ease-in-out);
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 0;
}

.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0;
  transition: opacity 0.25s;
  z-index: -1;
}

.btn:hover::before {
  opacity: 0.08;
}

.btn-primary {
  background: var(--terra);
  color: white;
}

.btn-primary:hover {
  background: var(--terra2);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(196, 80, 58, 0.35);
}

.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--white);
  background: transparent;
}

.btn-outline:hover {
  border-color: var(--terra);
  color: var(--terra);
  transform: translateY(-2px);
}

.btn-terra {
  background: var(--terra);
  color: white;
}

.btn-terra:hover {
  background: var(--terra2);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(196, 80, 58, 0.35);
}

.btn-sm {
  padding: 10px 20px;
  font-size: 0.65rem;
}

/* ─── NAVIGATION ───────────────────────────────────────────────────── */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  padding: 24px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s var(--ease-in-out);
}

nav.solid {
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 16px 60px;
  border-bottom: 1px solid var(--border);
}

.nav-logo img {
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  align-items: center;
}

.nav-links a {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(244, 244, 240, 0.5);
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: var(--terra);
  transition: width 0.3s var(--ease-in-out);
}

.nav-links a:hover {
  color: var(--white);
}

.nav-links a:hover::after {
  width: 100%;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--white);
  transition: transform 0.3s, opacity 0.3s;
}

.burger.open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
}

.burger.open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.mob {
  display: flex;
  position: fixed;
  inset: 0;
  z-index: 490;
  background: var(--bg);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  pointer-events: none;
  transform: translateX(100%);
  transition: transform 0.45s var(--ease-in-out);
  backdrop-filter: blur(20px);
}

.mob.open {
  transform: translateX(0);
  pointer-events: all;
}

.mob img {
  height: 44px;
  margin-bottom: 8px;
  opacity: 0;
  transition: opacity 0.4s 0.1s;
}

.mob.open img {
  opacity: 1;
}

.mob a {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem;
  letter-spacing: 0.04em;
  color: rgba(244, 244, 240, 0.6);
  transition: color 0.2s, opacity 0.35s, transform 0.35s;
  opacity: 0;
  transform: translateX(30px);
}

.mob.open a:nth-child(2) {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.15s;
}

.mob.open a:nth-child(3) {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.2s;
}

.mob.open a:nth-child(4) {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.25s;
}

.mob.open a:nth-child(5) {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.3s;
}

.mob.open a:nth-child(6) {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.35s;
}

.mob a:hover {
  color: var(--white);
}

/* ─── RESPONSIVE ────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  nav {
    padding: 16px 20px;
  }

  .burger {
    display: flex;
  }

  .nav-links {
    display: none;
  }
}

@media (max-width: 480px) {
  :root {
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 40px;
  }

  nav {
    padding: 12px 16px;
  }

  h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
  }
}
```

- [ ] **Step 1: Create `/VITA studios/styles.css` with content above**

Run: 
```bash
cd "/c/Users/bykai/OneDrive/Documents/GitHub/Vitastudios"
```

- [ ] **Step 2: Verify file created**

Run:
```bash
ls -lh "VITA studios/styles.css"
```

Expected: File exists with ~15KB size

---

### Task 2: Create JavaScript Utilities File

**Files:**
- Create: `VITA studios/script.js`

**Action:** Extract cursor system and shared JavaScript utilities

```javascript
// ═══════════════════════════════════════════════════════════════
// VITA STUDIOS - SHARED JAVASCRIPT UTILITIES
// ═══════════════════════════════════════════════════════════════

// ─── CUSTOM CURSOR SYSTEM ─────────────────────────────────────
class CustomCursor {
  constructor() {
    this.dot = document.getElementById('cursor-dot');
    this.ring = document.getElementById('cursor-ring');
    this.x = 0;
    this.y = 0;

    if (!this.dot || !this.ring) {
      console.warn('Cursor elements not found');
      return;
    }

    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => this.move(e));
    document.addEventListener('mouseenter', () => this.show());
    document.addEventListener('mouseleave', () => this.hide());

    // Detect hoverable elements
    document.addEventListener('mouseover', (e) => {
      if (this.isHoverable(e.target)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (this.isHoverable(e.target)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    // Detect text input
    document.addEventListener('focusin', (e) => {
      if (e.target.matches('input, textarea, [contenteditable]')) {
        document.body.classList.add('cursor-text-active');
      }
    });

    document.addEventListener('focusout', (e) => {
      if (e.target.matches('input, textarea, [contenteditable]')) {
        document.body.classList.remove('cursor-text-active');
      }
    });
  }

  move(e) {
    this.x = e.clientX;
    this.y = e.clientY;

    if (this.dot) {
      this.dot.style.transform = `translate(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px))`;
    }

    if (this.ring) {
      this.ring.style.transform = `translate(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px))`;
    }
  }

  show() {
    if (this.dot) this.dot.style.display = 'block';
    if (this.ring) this.ring.style.display = 'block';
  }

  hide() {
    if (this.dot) this.dot.style.display = 'none';
    if (this.ring) this.ring.style.display = 'none';
  }

  isHoverable(element) {
    return element.matches('a, button, input, textarea, [role="button"]');
  }
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────────
class ScrollReveal {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };
    this.observer = new IntersectionObserver(
      (entries) => this.onIntersection(entries),
      this.observerOptions
    );
    this.init();
  }

  init() {
    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
      this.observer.observe(el);
    });
  }

  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// ─── NAVIGATION SCROLL BEHAVIOR ────────────────────────────────
class NavSolidOnScroll {
  constructor(navSelector = 'nav') {
    this.nav = document.querySelector(navSelector);
    if (!this.nav) return;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.checkScroll());
  }

  checkScroll() {
    if (window.scrollY > 50) {
      this.nav.classList.add('solid');
    } else {
      this.nav.classList.remove('solid');
    }
  }
}

// ─── MOBILE MENU TOGGLE ────────────────────────────────────────
class MobileMenuToggle {
  constructor() {
    this.burger = document.querySelector('.burger');
    this.mob = document.querySelector('.mob');
    this.links = document.querySelectorAll('.mob a');

    if (!this.burger || !this.mob) return;
    this.init();
  }

  init() {
    this.burger.addEventListener('click', () => this.toggle());
    this.links.forEach((link) => {
      link.addEventListener('click', () => this.close());
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.burger') && !e.target.closest('.mob')) {
        this.close();
      }
    });
  }

  toggle() {
    this.burger.classList.toggle('open');
    this.mob.classList.toggle('open');
  }

  close() {
    this.burger.classList.remove('open');
    this.mob.classList.remove('open');
  }
}

// ─── SMOOTH SCROLL LINKS ───────────────────────────────────────
class SmoothScrollLinks {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

// ─── STAT COUNTER ANIMATION ────────────────────────────────────
class StatCounter {
  constructor() {
    this.stats = document.querySelectorAll('.stat-cell');
    this.observer = new IntersectionObserver(
      (entries) => this.onIntersection(entries),
      { threshold: 0.5 }
    );
    this.init();
  }

  init() {
    this.stats.forEach((stat) => this.observer.observe(stat));
  }

  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// ─── INITIALIZE ALL UTILITIES ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  new CustomCursor();
  new ScrollReveal();
  new NavSolidOnScroll();
  new MobileMenuToggle();
  new SmoothScrollLinks();
  new StatCounter();
});

// ─── UTILITY FUNCTIONS ────────────────────────────────────────
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

- [ ] **Step 1: Create `/VITA studios/script.js` with content above**

- [ ] **Step 2: Verify file created**

Run:
```bash
ls -lh "VITA studios/script.js"
```

Expected: File exists with ~5KB size

---

## Phase 2: Page Refactoring

### Task 3: Refactor index.html (Reference Page)

**Files:**
- Modify: `VITA studios/index.html`

**Action:** Link global stylesheet, clean up inline styles, optimize structure, keep page-specific animations

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Vita Studio</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=Clash+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <style>
    /* Page-specific styles only */
    .hero {
      min-height: 150vh;
      background: var(--bg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 40px;
      position: relative;
      overflow: hidden;
      text-align: center;
    }

    .hero-noise {
      position: absolute;
      inset: 0;
      opacity: 0.03;
      pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 200px;
    }

    .hero-glow {
      position: absolute;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(196, 80, 58, 0.07) 0%, transparent 65%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      animation: pulseGlow 7s ease-in-out infinite;
    }

    .hero-glow2 {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(196, 80, 58, 0.04) 0%, transparent 70%);
      bottom: -10%;
      right: -5%;
      pointer-events: none;
      animation: pulseGlow 10s ease-in-out infinite reverse;
    }

    .hero-center {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    .hero-logo-big {
      width: clamp(380px, 52vw, 800px);
      height: auto;
      opacity: 0;
      animation: fadeUp 0.9s 0.2s forwards;
      filter: drop-shadow(0 0 120px rgba(196, 80, 58, 0.3));
      background: transparent;
    }

    .hero-identity {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(0.85rem, 1.3vw, 1.05rem);
      font-weight: 300;
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.55);
      opacity: 0;
      animation: textReveal 0.8s 0.45s var(--ease-in-out) forwards;
      font-style: italic;
      margin-top: 48px;
      line-height: 1.6;
    }

    .hero-divider {
      width: 1px;
      height: clamp(80px, 10vh, 140px);
      background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.25), transparent);
      margin: clamp(80px, 8vh, 100px) auto;
      opacity: 0;
      animation: fadeUp 0.6s 0.7s forwards;
    }

    .hero-tagline {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(1.4rem, 2.8vw, 2.4rem);
      letter-spacing: 0.45em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.3);
      opacity: 0;
      animation: textReveal 0.8s 0.5s var(--ease-in-out) forwards;
    }

    .hero-intro {
      font-size: clamp(1rem, 1.5vw, 1.15rem);
      line-height: 1.9;
      color: rgba(255, 255, 255, 0.45);
      max-width: 560px;
      margin: 0 auto;
      opacity: 0;
      animation: textReveal 0.9s 0.9s var(--ease-in-out) forwards;
    }

    .hero-intro strong {
      color: rgba(244, 244, 240, 0.75);
      font-weight: 500;
    }

    .hero-cta-group {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: clamp(48px, 6vh, 72px);
      margin-bottom: clamp(180px, 20vh, 320px);
      opacity: 0;
      animation: fadeUp 0.7s 1.1s forwards;
    }

    .hero-scroll {
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      opacity: 0;
      animation: fadeUp 0.7s 1.4s forwards;
      cursor: pointer;
      background: none;
      border: none;
    }

    .scroll-line {
      width: 1px;
      height: 50px;
      background: linear-gradient(180deg, transparent, var(--terra));
      position: relative;
      overflow: hidden;
    }

    .hero-scroll span {
      font-size: 0.5rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .hero-scroll-dot {
      position: absolute;
      width: 100%;
      background: var(--white);
      animation: scrollDot 2s 1.6s infinite;
      height: 30%;
      top: -30%;
    }

    .hero-particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      animation: drift linear infinite;
    }

    /* Marquee */
    .marquee {
      overflow: hidden;
      padding: 20px 0;
      background: var(--bg2);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 22s linear infinite;
    }

    .marquee-item {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 0 36px;
      white-space: nowrap;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(244, 244, 240, 0.18);
    }

    .marquee-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--terra);
      flex-shrink: 0;
    }

    .marquee-item.hi {
      color: rgba(244, 244, 240, 0.5);
    }

    /* Stats Band */
    .stats-band {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background: var(--bg2);
      border-bottom: 1px solid var(--border);
    }

    .stat-cell {
      padding: 56px 48px;
      border-right: 1px solid var(--border);
      position: relative;
    }

    .stat-cell:last-child {
      border-right: none;
    }

    .stat-cell::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0;
      background: linear-gradient(90deg, var(--terra), transparent);
      transition: width 0.8s var(--ease-in-out);
    }

    .stat-cell.visible::before {
      width: 100%;
    }

    .stat-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 6rem;
      color: var(--white);
      line-height: 1;
    }

    .stat-num span {
      color: var(--terra);
    }

    .stat-label {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
      margin-top: 16px;
    }

    @media (max-width: 1024px) {
      .stats-band {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .stats-band {
        grid-template-columns: 1fr;
      }

      .stat-cell {
        border-right: none;
        border-bottom: 1px solid var(--border);
        padding: 40px 24px;
      }

      .stat-cell:last-child {
        border-bottom: none;
      }

      .stat-num {
        font-size: 3rem;
      }

      .hero {
        min-height: 100vh;
        padding: 0 20px;
      }
    }
  </style>
</head>
<body>
  <!-- Cursor system -->
  <div id="cursor-dot"></div>
  <div id="cursor-ring"></div>

  <!-- Navigation -->
  <nav>
    <a href="index.html" class="nav-logo">
      <img src="assets/logo.svg" alt="VITA Studio" />
    </a>
    <ul class="nav-links">
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#portafolio">Portafolio</a></li>
      <li><a href="#testimonios">Testimonios</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <button class="burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>

  <!-- Mobile menu -->
  <div class="mob">
    <img src="assets/logo.svg" alt="VITA Studio" />
    <a href="#servicios">Servicios</a>
    <a href="#portafolio">Portafolio</a>
    <a href="#testimonios">Testimonios</a>
    <a href="#contacto">Contacto</a>
  </div>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-noise"></div>
    <div class="hero-glow"></div>
    <div class="hero-glow2"></div>
    
    <div class="hero-center">
      <img class="hero-logo-big" src="assets/logo.svg" alt="VITA Studio" />
      <p class="hero-identity">Cine y Producción Audiovisual</p>
      <div class="hero-divider"></div>
      <h1 class="hero-tagline">CREAMOS HISTORIAS</h1>
      <p class="hero-intro">Transformamos tu visión en <strong>experiencias visuales únicas</strong> que impactan y perduran</p>
      <div class="hero-cta-group">
        <a href="agendar-sesion.html" class="btn btn-primary">Agendar Sesión</a>
        <a href="#portafolio" class="btn btn-outline">Ver Portafolio</a>
      </div>
    </div>

    <button class="hero-scroll" aria-label="Scroll down">
      <span>DESPLÁZATE</span>
      <div class="scroll-line">
        <div class="hero-scroll-dot"></div>
      </div>
    </button>
  </section>

  <!-- Rest of the page content remains the same -->
  <!-- [Include all existing sections: marquee, stats, testimonials, etc.] -->

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 1: Backup current index.html**

Run:
```bash
cp "/c/Users/bykai/OneDrive/Documents/GitHub/Vitastudios/VITA studios/index.html" "/c/Users/bykai/OneDrive/Documents/GitHub/Vitastudios/VITA studios/index.html.backup"
```

- [ ] **Step 2: Update index.html with new structure**

(Replace full file with optimized version)

- [ ] **Step 3: Test in browser**

Open: `file:///c/Users/bykai/OneDrive/Documents/GitHub/Vitastudios/VITA%20studios/index.html`

Verify:
- Logo and hero section display correctly
- Navigation works
- Custom cursor visible
- Scroll animations trigger
- Stats counter animates on scroll
- Mobile menu toggles

- [ ] **Step 4: Commit**

```bash
git add "VITA studios/index.html" "VITA studios/styles.css" "VITA studios/script.js"
git commit -m "refactor: consolidate styles and optimize index.html with Terra theme"
```

---

### Task 4: Refactor agendar-sesion.html

**Files:**
- Modify: `VITA studios/agendar-sesion.html`

**Action:** Update BLUE → TERRA, link global stylesheet, optimize form styles

- [ ] **Step 1: Backup original**

```bash
cp "/c/Users/bykai/OneDrive/Documents/GitHub/Vitastudios/VITA studios/agendar-sesion.html" "/c/Users/bykai/OneDrive/Documents/GitHub/Vitastudios/VITA studios/agendar-sesion.html.backup"
```

- [ ] **Step 2: Replace BLUE colors with TERRA in CSS**

Replace all instances:
- `#3B82F6` → `#C4503A`
- `#60A5FA` → `#E06B52`
- `var(--blue)` → `var(--terra)`
- `var(--blue2)` → `var(--terra2)`

- [ ] **Step 3: Link global stylesheet at top of `<style>` block**

Add before inline styles:
```html
<link rel="stylesheet" href="styles.css" />
```

- [ ] **Step 4: Extract common styles, keep form-specific only**

Remove duplicated: cursor system, nav, animations, buttons
Keep: form layout, form inputs, form validation

- [ ] **Step 5: Add script link**

Before `</body>`:
```html
<script src="script.js"></script>
```

- [ ] **Step 6: Test in browser**

Verify:
- Form displays with Terra color scheme
- Input fields have correct styling
- Buttons have Terra hover state
- Custom cursor works
- Mobile responsive

- [ ] **Step 7: Commit**

```bash
git add "VITA studios/agendar-sesion.html"
git commit -m "refactor: apply Terra theme to agendar-sesion.html"
```

---

### Task 5: Refactor paquete-esencia.html

**Files:**
- Modify: `VITA studios/paquete-esencia.html`

Same pattern as Task 4:

- [ ] **Step 1: Backup**
- [ ] **Step 2: Link global stylesheet**
- [ ] **Step 3: Replace BLUE → TERRA**
- [ ] **Step 4: Remove duplicated CSS**
- [ ] **Step 5: Add script.js**
- [ ] **Step 6: Test thoroughly**
- [ ] **Step 7: Commit**

```bash
git add "VITA studios/paquete-esencia.html"
git commit -m "refactor: apply Terra theme to paquete-esencia.html"
```

---

### Task 6: Refactor paquete-presencia.html

**Files:**
- Modify: `VITA studios/paquete-presencia.html`

Same pattern as Task 4-5

- [ ] **Step 1-7:** Follow same process

```bash
git add "VITA studios/paquete-presencia.html"
git commit -m "refactor: apply Terra theme to paquete-presencia.html"
```

---

### Task 7: Refactor propuesta-vita-club.html

**Files:**
- Modify: `VITA studios/propuesta-vita-club.html`

Same pattern as Task 4-6

- [ ] **Step 1-7:** Follow same process

```bash
git add "VITA studios/propuesta-vita-club.html"
git commit -m "refactor: apply Terra theme to propuesta-vita-club.html"
```

---

### Task 8: Refactor vita_productions.html

**Files:**
- Modify: `VITA studios/vita_productions.html`

Same pattern as all previous pages

- [ ] **Step 1-7:** Follow same process

```bash
git add "VITA studios/vita_productions.html"
git commit -m "refactor: apply Terra theme to vita_productions.html"
```

---

## Phase 3: Verification & Testing

### Task 9: Cross-Page Testing

- [ ] **Step 1: Test all pages load**

Run through each page in browser:
1. `index.html` — Hero, stats, marquee
2. `agendar-sesion.html` — Form layout
3. `paquete-esencia.html` — Package info
4. `paquete-presencia.html` — Package info
5. `propuesta-vita-club.html` — Proposal
6. `vita_productions.html` — Productions

- [ ] **Step 2: Verify color consistency**

All pages should use:
- Primary: `#C4503A` (Terra)
- Accent: `#E06B52` (Terra2)
- Background: `#000000` (black)
- Text: `#FFFFFF` (white)

- [ ] **Step 3: Test interactivity**

- Custom cursor appears on all pages
- Navigation highlights on hover
- Buttons show Terra color on hover
- Mobile menu toggles
- Form inputs focus state
- Scroll animations trigger

- [ ] **Step 4: Test responsive design**

Mobile (320px), Tablet (768px), Desktop (1440px):
- Navigation adapts
- Hamburger menu appears on mobile
- Text sizes scale properly
- Forms remain usable

- [ ] **Step 5: Commit verification**

```bash
git add -A
git commit -m "test: verify all pages theme consistency and functionality"
```

---

### Task 10: Final Quality Check & Documentation

- [ ] **Step 1: Check CSS file size**

Run:
```bash
wc -l "VITA studios/styles.css" "VITA studios/script.js"
```

- [ ] **Step 2: Verify no console errors**

Check browser DevTools console for errors on each page

- [ ] **Step 3: Test page load performance**

All pages should load in <2 seconds

- [ ] **Step 4: Create CHANGELOG**

Document changes made:
- CSS consolidation
- Color scheme update
- JavaScript utilities extraction
- Responsive improvements

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "docs: update changelog and finalize refactor"
git push origin main
```

---

## Success Criteria

✅ All 6 pages use consistent Terra color scheme
✅ Global stylesheet reduces code duplication by ~70%
✅ Custom cursor works on all pages
✅ Mobile responsive on all pages
✅ Animations smooth and performant
✅ No console errors
✅ All links work (internal and external)
✅ Forms functional and styled consistently
✅ All commits follow convention

---

**End of Plan**

Next step: Choose execution method (Subagent-Driven or Inline Execution).
