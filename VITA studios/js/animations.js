/* ============================================================================
   VITA Studio — Animation System
   GSAP 3 + ScrollTrigger + Lenis
   ============================================================================ */

// ─────────────────────────────────────────────────────────────────────────
// 1. Lenis Smooth Scroll Setup
// ─────────────────────────────────────────────────────────────────────────

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time * 1000);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ─────────────────────────────────────────────────────────────────────────
// 2. Register ScrollTrigger Plugin
// ─────────────────────────────────────────────────────────────────────────

gsap.registerPlugin(ScrollTrigger);

// Sync ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ─────────────────────────────────────────────────────────────────────────
// 3. Split Text into Words (for staggered animations)
// ─────────────────────────────────────────────────────────────────────────

function splitTextIntoWords(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const text = element.textContent;
    const words = text.split(' ');
    const wrappedWords = words.map(word => `<span class="word">${word}</span>`).join(' ');
    element.innerHTML = wrappedWords;
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 4. Loader Animation (Intro Cinematográfico)
// ─────────────────────────────────────────────────────────────────────────

function initLoaderAnimation() {
  const loader = document.getElementById('loader');
  const loaderLogo = document.querySelector('.loader-logo');
  const loaderDivider = document.querySelector('.loader-divider');
  const loaderText = document.querySelector('.loader-text');
  const whatsappFloat = document.getElementById('whatsapp-float');

  const tl = gsap.timeline();

  // Logo fade-in + scale
  tl.from(loaderLogo, {
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: 'expo.out',
  }, 0);

  // Divider scaleX
  tl.from(loaderDivider, {
    scaleX: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    transformOrigin: 'center',
  }, 0.3);

  // Text fade-in
  tl.from(loaderText, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.out',
  }, 0.6);

  // Pausa
  tl.to({}, { duration: 0.8 });

  // Panel sube (clip-path slide up)
  tl.to(loader, {
    clipPath: 'inset(0 0 100% 0)',
    duration: 0.8,
    ease: 'power4.inOut',
    onComplete: () => {
      loader.style.display = 'none';
      // Show WhatsApp button
      whatsappFloat.classList.add('visible');
      // Trigger hero animations
      initHeroAnimation();
    },
  }, '-=0.2');

  return tl;
}

// ─────────────────────────────────────────────────────────────────────────
// 4.5. Hero Entrance Animation
// ─────────────────────────────────────────────────────────────────────────

function initHeroAnimation() {
  splitTextIntoWords('.hero-headline');

  const heroWords = document.querySelectorAll('.hero-headline .word');

  gsap.from(heroWords, {
    opacity: 0,
    y: 60,
    duration: 1.2,
    stagger: 0.06,
    ease: 'expo.out',
    delay: 0.2,
  });

  gsap.from('.hero-subheadline', {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'expo.out',
    delay: 0.6,
  });

  gsap.from('.hero-cta', {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: 'back.out',
    delay: 1,
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 5. Section Headings — Reveal with ScrollTrigger
// ─────────────────────────────────────────────────────────────────────────

function initSectionHeadings() {
  const sectionHeadings = document.querySelectorAll('#servicios h2, #portafolio h2, #resultados h2, #founder h2, #contacto h2');

  sectionHeadings.forEach((heading) => {
    splitTextIntoWords(heading);

    const words = heading.querySelectorAll('.word');

    gsap.from(words, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 80%',
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 6. Service Cards — Stagger on Scroll
// ─────────────────────────────────────────────────────────────────────────

function initServiceCards() {
  const serviceCards = document.querySelectorAll('.service-card');

  gsap.from(serviceCards, {
    scrollTrigger: {
      trigger: '#servicios',
      start: 'top 70%',
      markers: false,
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 7. Portfolio Cards — Clip-Path Image Reveal
// ─────────────────────────────────────────────────────────────────────────

function initPortfolioCards() {
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  portfolioCards.forEach((card) => {
    const img = card.querySelector('img');

    // Set initial clip-path
    gsap.set(img, {
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0,
    });

    gsap.to(img, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        markers: false,
      },
      clipPath: 'inset(0% 0 0 0)',
      opacity: 1,
      duration: 1.2,
      ease: 'power4.out',
      onComplete: () => {
        card.classList.add('loaded');
      },
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 8. Stats Counter — Animate Numbers on Scroll
// ─────────────────────────────────────────────────────────────────────────

function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');

  statNumbers.forEach((stat) => {
    const targetValue = parseInt(stat.getAttribute('data-value'), 10);

    gsap.to(stat, {
      scrollTrigger: {
        trigger: '#resultados',
        start: 'top 60%',
        markers: false,
      },
      textContent: targetValue,
      duration: 2.5,
      ease: 'power2.out',
      snap: { textContent: 1 }, // Only whole numbers
      onUpdate: () => {
        stat.textContent = Math.floor(gsap.getProperty(stat, 'textContent'));
      },
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 9. Founder Section — Image & Text Stagger
// ─────────────────────────────────────────────────────────────────────────

function initFounderSection() {
  const founderPhoto = document.querySelector('.founder-photo-placeholder');
  const founderContent = document.querySelector('.founder-content');

  gsap.from(founderPhoto, {
    scrollTrigger: {
      trigger: '#founder',
      start: 'top 70%',
      markers: false,
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from(founderContent, {
    scrollTrigger: {
      trigger: '#founder',
      start: 'top 70%',
      markers: false,
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power3.out',
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 10. Contact Form — Fade In
// ─────────────────────────────────────────────────────────────────────────

function initContactForm() {
  const contactForm = document.querySelector('#contact-form');

  gsap.from(contactForm, {
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 70%',
      markers: false,
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 11. Section Dividers — Scale Animation
// ─────────────────────────────────────────────────────────────────────────

function initDividers() {
  const dividers = document.querySelectorAll('.section-divider');

  dividers.forEach((divider) => {
    gsap.from(divider, {
      scrollTrigger: {
        trigger: divider,
        start: 'center 80%',
        markers: false,
      },
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.inOut',
      transformOrigin: 'center',
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────
// 12. Initialization
// ─────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure everything is ready
  setTimeout(() => {
    // Start loader animation first
    initLoaderAnimation();

    // Rest of animations are triggered after loader completes
    setTimeout(() => {
      initSectionHeadings();
      initServiceCards();
      initPortfolioCards();
      initStatsCounter();
      initFounderSection();
      initContactForm();
      initDividers();

      // Refresh ScrollTrigger to calculate positions
      ScrollTrigger.refresh();
    }, 3500); // Wait for loader to complete (~3.5s)
  }, 100);
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
