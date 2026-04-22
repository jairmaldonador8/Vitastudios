// ════════════════════════════════════════════════════════════
// ANIMATED GRAIN GRADIENT BACKGROUND
// ════════════════════════════════════════════════════════════

function initAnimatedBackground() {
  const canvas = document.getElementById('grain-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  // Grain noise generation
  function generateGrain() {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255;
      data[i] = noise;
      data[i + 1] = noise;
      data[i + 2] = noise;
      data[i + 3] = 255;
    }

    return imageData;
  }

  let grainTime = 0;
  const bgElement = document.getElementById('animated-bg');
  const colors = [
    'linear-gradient(135deg, #FFF8F3 0%, #F5EBE0 50%, #FFF8F3 100%)',
    'linear-gradient(135deg, #F5EBE0 0%, #FFF8F3 50%, #F5EBE0 100%)',
    'linear-gradient(135deg, #FFF8F3 0%, rgba(200, 90, 58, 0.05) 50%, #FFF8F3 100%)',
  ];

  let currentColorIndex = 0;

  function animateBackground() {
    grainTime += 0.005;

    // Grain animation
    const grain = generateGrain();
    ctx.putImageData(grain, 0, 0);

    // Breathing gradient effect
    const progress = Math.sin(grainTime * 0.5) * 0.5 + 0.5;
    const nextColorIndex = Math.floor(grainTime * 0.3) % colors.length;

    if (nextColorIndex !== currentColorIndex) {
      currentColorIndex = nextColorIndex;
      bgElement.style.background = colors[currentColorIndex];
    }

    // Subtle opacity breathing
    const opacity = 0.025 + Math.sin(grainTime * 0.3) * 0.01;
    canvas.style.opacity = opacity;

    requestAnimationFrame(animateBackground);
  }

  animateBackground();

  // Handle window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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

// Initialize all animations
function initAnimations() {
  initAnimatedBackground();
  initHeroParallax();
  animateFloatingShapes();
  animateSectionTitles();
  animateSectionSubtitles();
  animateServiceCards();
  animatePortfolioCards();
  animateWhyCards();
  animateCtaBox();
  animateFounderSection();
  animateContactForm();
}

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
// Initialize on DOM Ready
// ════════════════════════════════════════════════════════════

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
