# Research Brief: VITA Studios Landing Page Stack

**Date:** 2026-04-17  
**Status:** Research Complete  
**Topics:** Vanilla JS, Form Services, Minimalist Animations

---

## Context

Building a **minimalist aesthetic landing page** with:
- Vanilla HTML/CSS/JS (no frameworks)
- Dynamic content switching (two tracks: médicos vs. retail)
- Form submission integration
- Subtle animations

Research validates the tech stack and best practices for 2026.

---

## Key Findings

### 1. Dynamic Content Switching (Vanilla JS)

**Modern CSS is Powerful Enough:**
- CSS features like `:has()`, container queries, and view transitions now handle interactions previously requiring JavaScript
- For our "two tracks" UI, **CSS Custom Properties + vanilla JS event delegation** is the recommended approach
- **No framework needed** — HTML/CSS/JS vanilla is sufficient and performant

**Implementation Pattern:**
```
- Define state with CSS classes (.track-medicos, .track-retail)
- Use event delegation: document.addEventListener('click', (e) => {...})
- Toggle classes with JavaScript
- CSS handles visibility, animations, and styling
```

**Trade-off:** Simple interactive state management vs. framework overhead. For our scope, vanilla is perfect.

---

### 2. Form Submission Service (2026 Landscape)

**Formspree Still Viable:**
- Formspree remains widely used for static sites
- Cost: $10/month for 200 submissions/month (adequate for startup phase)
- Includes email notifications, basic dashboard

**Alternatives Ranked by Use Case:**

| Service | Cost | Features | Best For |
|---------|------|----------|----------|
| **Staticforms** | Free | Email only, no dashboard | MVP/minimal cost |
| **Basin** | Free | Minimal, no account | Simplest option |
| **Formgrid** | $8/month | Form builder + backend | More features than Formspree |
| **Getform** | $19/month | Full-featured, file uploads | Growing startups |

**Recommendation for MVP:** 
- **Start with Staticforms (free)** — simple email-only, perfect for Phase 1
- **Upgrade to Formspree ($10/month)** — when need dashboard/history

---

### 3. Minimalist & Aesthetic Animations (2026 Trends)

**Key Principles:**
- **Performance-first:** Avoid auto-play videos, heavy GIFs
- **SVG over GIFs:** SVG animations = 5-50 KB vs. GIF = 1+ MB
- **Micro-interactions:** Subtle hover effects, not distracting animations
- **Scroll storytelling:** Content unfolds as user scrolls (especially mobile)

**What Works in 2026:**
- ✅ Hover transitions on buttons/cards
- ✅ Scroll-triggered content reveals
- ✅ SVG icon animations
- ✅ Smooth scroll navigation
- ✅ Color/opacity transitions

**What to Avoid:**
- ❌ Auto-play videos in hero
- ❌ Excessive animations (distracting from message)
- ❌ Heavy GIF files
- ❌ Animations that hurt Core Web Vitals

**Implementation:** CSS transitions + vanilla JS for scroll triggers

---

## Recommended Stack

### HTML/CSS/JS
- **HTML5** — semantic structure
- **CSS3** with custom properties — theming, layouts, animations
- **Vanilla JavaScript** — event delegation, state management, scroll triggers
- **No build tool required** for MVP

### Form Service
- **MVP (Phase 1):** Staticforms (free) or Basin
- **Phase 2:** Upgrade to Formspree ($10/month) when metrics needed

### Animations & Performance
- SVG files for icons/illustrations
- CSS transitions for state changes
- JavaScript for scroll-triggered reveals
- Optimize images (lazy-load if needed)

### Deployment
- **Continue with Vercel** (current setup)
- Static site hosting (no server changes needed)

---

## Implementation Notes

### Two Tracks Mechanism
```javascript
// Simple state toggle
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-track]')) {
    const track = e.target.dataset.track;
    document.documentElement.setAttribute('data-active-track', track);
    // CSS rules handle display/animation
  }
});
```

### CSS Custom Properties for Theming
```css
:root {
  --color-medicos-accent: /* doctor-specific color */;
  --color-retail-accent: /* retail-specific color */;
}

[data-active-track="medicos"] {
  --accent: var(--color-medicos-accent);
}

[data-active-track="retail"] {
  --accent: var(--color-retail-accent);
}
```

### Scroll Animations (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
```

---

## Performance Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **Page Size:** < 500 KB (excluding images)
- **Core Web Vitals:** All green

**How to achieve:**
- Minimize CSS/JS files
- Lazy-load images
- Optimize SVGs
- Avoid render-blocking resources

---

## No Architecture Blockers

✅ Vanilla JS is sufficient for dynamic content switching  
✅ Form service integrations are straightforward (POST request)  
✅ Animations are performant with CSS + vanilla JS  
✅ No need for frameworks, build tools, or backend  
✅ MVP can launch today with this stack  

---

## Sources

- [CSS in 2026: The new features reshaping frontend development](https://blog.logrocket.com/css-in-2026/)
- [Building Async Page Transitions in Vanilla JavaScript](https://tympanus.net/codrops/2026/02/26/building-async-page-transitions-in-vanilla-javascript/)
- [Formspree Alternatives in 2026: Open Source, Cheaper, and Self-Hostable](https://formgrid.dev/blog/formspree-alternatives-in-2026-open-source-cheaper-and-self-hostable)
- [Staticforms - Free Form Backend](https://www.staticforms.dev/)
- [Minimalist Landing Page Design: 2026 Trends & Tips](https://www.webstacks.com/blog/minimalist-landing-page-design-trends)
- [40 best landing page examples of 2026](https://unbounce.com/landing-page-examples/best-landing-page-examples/)
