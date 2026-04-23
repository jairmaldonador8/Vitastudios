// ════════════════════════════════════════════════════════════
// ANIMATED GRAIN GRADIENT BACKGROUND
// ════════════════════════════════════════════════════════════

function initAnimatedBackground() {
  const canvas = document.getElementById('grain-canvas');
  if (!canvas) {
    console.warn('grain-canvas not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  // Paper Design Shader Parameters
  const config = {
    colorBack: 'hsl(0, 0%, 10%)',          // Negro profundo
    softness: 0.70,
    intensity: 0.35,
    noise: 0,
    shape: 'corners',
    colors: [
      'hsl(14, 88%, 55%)',                 // Naranja cálido
      'hsl(22, 80%, 50%)',                 // Naranja dorado
      'hsl(8, 90%, 45%)',                  // Rojo-naranja profundo
    ]
  };

  // Convertir HSL a RGB
  function hslToRgb(hsl) {
    const match = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (!match) return [0, 0, 0];

    let h = parseInt(match[1]) / 360;
    let s = parseInt(match[2]) / 100;
    let l = parseInt(match[3]) / 100;

    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function drawFrame() {
    // Fondo base
    const bgRgb = hslToRgb(config.colorBack);
    ctx.fillStyle = `rgb(${bgRgb[0]}, ${bgRgb[1]}, ${bgRgb[2]})`;
    ctx.fillRect(0, 0, width, height);

    // Gradientes radiales desde esquinas
    const cornerDistance = Math.sqrt(width ** 2 + height ** 2) / 2;

    config.colors.forEach((color, index) => {
      const positions = [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: 0, y: height },
        { x: width, y: height }
      ];

      const pos = positions[index % positions.length];
      const gradient = ctx.createRadialGradient(
        pos.x, pos.y, 0,
        pos.x, pos.y,
        cornerDistance * (1 - config.softness + 0.2)
      );

      const rgb = hslToRgb(color);
      gradient.addColorStop(0, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${config.intensity})`);
      gradient.addColorStop(1, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    });

    requestAnimationFrame(drawFrame);
  }

  drawFrame();

  // Handle window resize
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
}

// ════════════════════════════════════════════════════════════
// GSAP + ScrollTrigger Animations
// ════════════════════════════════════════════════════════════

gsap.registerPlugin(ScrollTrigger);

// Hero Parallax
function initHeroParallax() {
  const heroVisual = document.querySelector('.visual-placeholder');
  if (heroVisual) {
    gsap.to(heroVisual, {
      y: -50,
      scrollTrigger: {
        trigger: '#hero',
        scrub: 1,
        start: 'top top',
        end: 'bottom top',
      },
    });
  }
}

// Floating Shapes Animation
function animateFloatingShapes() {
  gsap.to('.shape-1', {
    y: -20,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
  gsap.to('.shape-2', {
    y: 20,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 1,
  });
  gsap.to('.shape-3', {
    y: -15,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: 2,
  });
}

// Section Titles Animation
function animateSectionTitles() {
  const titles = document.querySelectorAll('.section-title');
  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: 'top 50%',
        },
      }
    );
  });
}

// Section Subtitles Animation
function animateSectionSubtitles() {
  const subtitles = document.querySelectorAll('.section-subtitle');
  subtitles.forEach((subtitle) => {
    gsap.fromTo(
      subtitle,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: subtitle,
          start: 'top 80%',
        },
      }
    );
  });
}

// Service Cards Animation
function animateServiceCards() {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      }
    );

    // Hover effect
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -4,
        duration: 0.3,
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
      });
    });
  });
}

// Problema Cards Animation
function animateProblemaCards() {
  const cards = document.querySelectorAll('.problema-card');
  cards.forEach((card, index) => {
    // Initial animation is in CSS, but we can enhance hover with GSAP
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        duration: 0.3,
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
      });
    });
  });
}

// Case Study Cards Animation
function animateCasoCards() {
  const cards = document.querySelectorAll('.caso-card');
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      }
    );

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
      });
    });
  });
}

// Metrics Cards Animation
function animateMetricsCards() {
  const cards = document.querySelectorAll('.metric-card');
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.metrics-container',
          start: 'top 80%',
        },
      }
    );
  });
}

// Portfolio Cards Animation
function animatePortfolioCards() {
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: index * 0.12,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
      }
    );

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
      });
    });
  });
}

// Why Cards Animation
function animateWhyCards() {
  const cards = document.querySelectorAll('.why-card');
  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      }
    );

    const number = card.querySelector('.why-number');
    if (number) {
      gsap.fromTo(
        number,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          delay: index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    }
  });
}

// CTA Box Animation
function animateCtaBox() {
  const ctaBox = document.querySelector('.cta-box');
  if (ctaBox) {
    const h2 = ctaBox.querySelector('h2');
    const p = ctaBox.querySelector('p');
    const button = ctaBox.querySelector('.cta-primary');

    gsap.fromTo(h2, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ctaBox,
        start: 'top 80%',
      },
    });

    gsap.fromTo(p, { opacity: 0, y: 20 }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.1,
      scrollTrigger: {
        trigger: ctaBox,
        start: 'top 80%',
      },
    });

    gsap.fromTo(button, { opacity: 0, scale: 0.95 }, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0.2,
      scrollTrigger: {
        trigger: ctaBox,
        start: 'top 80%',
      },
    });
  }
}

// Founder Section Animation
function animateFounderSection() {
  const founderImage = document.querySelector('.image-placeholder');
  const founderText = document.querySelector('.founder-text');

  if (founderImage) {
    gsap.fromTo(founderImage, { opacity: 0, x: -40 }, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.founder',
        start: 'top 80%',
      },
    });
  }

  if (founderText) {
    gsap.fromTo(founderText, { opacity: 0, x: 40 }, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.founder',
        start: 'top 80%',
      },
    });
  }
}

// Contact Form Animation
function animateContactForm() {
  const contactForm = document.querySelector('.contact-form');
  const contactInfo = document.querySelector('.contact-info');

  if (contactForm) {
    gsap.fromTo(contactForm, { opacity: 0, y: 40 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.contacto',
        start: 'top 80%',
      },
    });
  }

  if (contactInfo) {
    gsap.fromTo(contactInfo, { opacity: 0, y: 40 }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.1,
      scrollTrigger: {
        trigger: '.contacto',
        start: 'top 80%',
      },
    });
  }
}

// Contact Method Buttons Animation
function animateContactMethods() {
  const buttons = document.querySelectorAll('.contact-method-btn');
  buttons.forEach((button, index) => {
    gsap.fromTo(
      button,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: '.contact-methods',
          start: 'top 80%',
        },
      }
    );
  });
}

// ============================================
// TASK 10: Number Count-Up Animations
// ============================================

function initCountUpAnimations() {
  const countUpElements = document.querySelectorAll('[data-count]');

  if (countUpElements.length === 0) return;

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

// ============================================
// TASK 11: Testimonials Carousel
// ============================================

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

    // Pause on hover
    this.container.addEventListener('mouseenter', () => this.stopAutoAdvance());
    this.container.addEventListener('mouseleave', () => this.startAutoAdvance());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
        this.stopAutoAdvance();
        this.startAutoAdvance();
      }
      if (e.key === 'ArrowRight') {
        this.advance();
        this.stopAutoAdvance();
        this.startAutoAdvance();
      }
    });
  }

  goToSlide(index) {
    // Fade out and scale down current slide
    gsap.to(this.slides[this.currentSlide], {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    });

    // Remove active class from current dot
    this.dots[this.currentSlide].classList.remove('active');

    // Update current slide index
    this.currentSlide = index;

    // Add active class to new dot
    this.dots[this.currentSlide].classList.add('active');

    // Fade in and scale up new slide
    gsap.fromTo(this.slides[this.currentSlide],
      { opacity: 0, scale: 1.05 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    );
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

// ============================================
// TASK 12: Enhance Existing Scroll Animations
// ============================================

function initScrollAnimations() {
  // Apply animations to all card elements (existing + new)
  const cardSelectors = [
    '.card',                    // Existing cards
    '.problema-card',          // New: Problem cards (Task 1)
    '.caso-card',              // Enhanced: Case study cards (Task 2)
    '.metric-card',            // New: Metric cards (Task 3)
    '.logo-item'               // New: Logo items (Task 3)
  ];

  cardSelectors.forEach(selector => {
    gsap.utils.toArray(document.querySelectorAll(selector)).forEach((element) => {
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
  });

  // Staggered animations for grid layouts
  const gridSelectors = [
    '.problema-grid',
    '.casos-grid',
    '.metrics-container',
    '.logos-grid'
  ];

  gridSelectors.forEach(selector => {
    const grids = document.querySelectorAll(selector);
    grids.forEach(grid => {
      const children = grid.querySelectorAll('> div');

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
  });
}

// ============================================
// TASK 13: Form Validation
// ============================================

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
  if (field.name === 'name' || field.id === 'name') {
    if (field.value.trim().length < 2) {
      isValid = false;
      errorMessage = 'El nombre debe tener al menos 2 caracteres';
    }
  }

  // Email validation
  if (field.name === 'email' || field.id === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      isValid = false;
      errorMessage = 'Por favor ingresa un email válido';
    }
  }

  // Message validation
  if (field.name === 'message' || field.id === 'message') {
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
  // Try to find error element by ID pattern: {fieldName}-error
  const errorElementId = `${field.name || field.id}-error`;
  const errorElement = document.getElementById(errorElementId);

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

// Initialize all animations
function initAnimations() {
  initSplashScreen();
  initAnimatedBackground();
  initBeforeAfterSlider();
  initHeroParallax();
  animateFloatingShapes();
  animateSectionTitles();
  animateSectionSubtitles();
  animateProblemaCards();
  animateServiceCards();
  animateCasoCards();
  animateMetricsCards();
  animatePortfolioCards();
  animateWhyCards();
  animateCtaBox();
  animateFounderSection();
  animateContactForm();
  animateContactMethods();
  initCountUpAnimations();
  initScrollAnimations();
  initFormValidation();
}

// Initialize testimonials carousel on page load
window.addEventListener('load', () => {
  new TestimonialCarousel('testimonialCarousel');
});

// ════════════════════════════════════════════════════════════
// Mobile Navigation
// ════════════════════════════════════════════════════════════

const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMobile.classList.toggle('active');
});

document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMobile.classList.remove('active');
  });
});

// ════════════════════════════════════════════════════════════
// Booking Modal
// ════════════════════════════════════════════════════════════

const bookingModal = document.getElementById('booking-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const ctaButtons = document.querySelectorAll('[id^="cta-"]');

ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    bookingModal.classList.add('active');
    modalOverlay.classList.add('active');
  });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

function closeModal() {
  bookingModal.classList.remove('active');
  modalOverlay.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ════════════════════════════════════════════════════════════
// Splash Screen with Logo Animation
// ════════════════════════════════════════════════════════════

function initSplashScreen() {
  const splashScreen = document.getElementById('splash-screen');
  const splashLogo = document.getElementById('splash-logo');

  if (!splashScreen || !splashLogo) {
    console.warn('Splash screen elements not found');
    return;
  }

  // Trigger the glow animation on logo
  splashLogo.classList.add('animate');

  // After 2 seconds, fade out and hide splash screen
  setTimeout(() => {
    splashScreen.style.opacity = '0';
    splashScreen.style.pointerEvents = 'none';

    // Remove from DOM after fade completes
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 800);
  }, 2000);
}

// ════════════════════════════════════════════════════════════
// Forms
// ════════════════════════════════════════════════════════════

const contactForm = document.getElementById('contact-form');
const bookingForm = document.getElementById('booking-form');

if (contactForm) {
  contactForm.addEventListener('submit', handleContactForm);
}

if (bookingForm) {
  bookingForm.addEventListener('submit', handleBookingForm);
}

function handleContactForm(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const whatsappMessage = `Hola, mi nombre es ${data.name}. Mi correo es ${data.email}. ${data.message}`;
  const whatsappURL = `https://wa.me/528181782508?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, '_blank');
  alert('Gracias por tu mensaje. Te contactaremos pronto.');
  contactForm.reset();
}

function handleBookingForm(e) {
  e.preventDefault();

  const formData = new FormData(bookingForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  const whatsappMessage = `Hola Jair, mi nombre es ${data.name}. Mi teléfono es ${data.phone}. Mi correo es ${data.email}. ${data.message || 'Quiero agendar una consulta.'}`;
  const whatsappURL = `https://wa.me/528181782508?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, '_blank');
  closeModal();
  bookingForm.reset();
  alert('Tu solicitud ha sido enviada a WhatsApp. Te contactaremos pronto.');
}

// ════════════════════════════════════════════════════════════
// Smooth Scroll
// ════════════════════════════════════════════════════════════

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ════════════════════════════════════════════════════════════
// Before/After Slider - Optimized Mobile-First
// ════════════════════════════════════════════════════════════

class BeforeAfterSlider {
  constructor() {
    this.transformer = document.getElementById('timelineTransformer');
    this.afterPreview = document.querySelector('.after-preview');
    this.dragOverlay = document.getElementById('dragOverlay');
    this.handle = document.getElementById('timelineHandle');
    this.progressFill = document.getElementById('progressFill');
    this.progressLabel = document.getElementById('progressLabel');
    this.stateMarkers = document.querySelectorAll('.state-marker');

    if (!this.transformer) return;

    this.isDragging = false;
    this.currentPercent = 0;
    this.states = [
      { percent: 0, label: 'Feo' },
      { percent: 25, label: 'Mejorando' },
      { percent: 50, label: 'Medio' },
      { percent: 75, label: 'Casi' },
      { percent: 100, label: 'Pro' }
    ];

    this.init();
  }

  init() {
    this.dragOverlay.addEventListener('mousedown', (e) => this.handleStart(e));
    this.dragOverlay.addEventListener('touchstart', (e) => this.handleStart(e));
    document.addEventListener('mousemove', (e) => this.handleMove(e));
    document.addEventListener('touchmove', (e) => this.handleMove(e));
    document.addEventListener('mouseup', () => this.handleEnd());
    document.addEventListener('touchend', () => this.handleEnd());

    this.stateMarkers.forEach(marker => {
      marker.addEventListener('click', (e) => {
        const targetPercent = parseInt(marker.dataset.percent);
        this.setSliderPosition(targetPercent);
      });
    });
  }

  handleStart(e) {
    this.isDragging = true;
    this.dragOverlay.classList.add('is-dragging');
    this.handle.classList.add('is-dragging');
    this.transformer.classList.add('is-dragging');
    this.updatePosition(e);
  }

  handleMove(e) {
    if (!this.isDragging) return;
    this.updatePosition(e);
  }

  handleEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.dragOverlay.classList.remove('is-dragging');
    this.handle.classList.remove('is-dragging');
    this.transformer.classList.remove('is-dragging');
  }

  updatePosition(e) {
    const rect = this.transformer.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    this.setSliderPosition(percent);
  }

  setSliderPosition(percent) {
    this.currentPercent = percent;

    // Update after-preview position (transform translateX from -100% to 0%)
    const translatePercent = -100 + percent;
    this.afterPreview.style.transform = `translateX(${translatePercent}%)`;

    // Update handle position
    this.handle.style.left = `${percent}%`;

    // Update progress bar
    this.progressFill.style.width = `${percent}%`;

    // Find and update label
    const currentState = this.states.reduce((closest, state) => {
      return Math.abs(state.percent - percent) < Math.abs(closest.percent - percent) ? state : closest;
    });
    this.progressLabel.textContent = `${Math.round(percent)}% Diseño ${currentState.label}`;
  }
}

// Initialize slider when DOM is ready
function initBeforeAfterSlider() {
  new BeforeAfterSlider();
}

// ════════════════════════════════════════════════════════════
// Initialize on DOM Ready
// ════════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
