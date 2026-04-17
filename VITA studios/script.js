/**
 * CustomCursor - Tracks mouse position and manages custom cursor behavior
 */
class CustomCursor {
  constructor() {
    this.cursorDot = document.getElementById('cursor-dot');
    this.cursorRing = document.getElementById('cursor-ring');

    if (!this.cursorDot || !this.cursorRing) {
      return;
    }

    this.mouseX = 0;
    this.mouseY = 0;
    this.isVisible = true;
    this.rafPending = false;

    this.boundMouseMove = (e) => this.onMouseMove(e);
    this.boundShow = () => this.show();
    this.boundHide = () => this.hide();

    this.init();
  }

  init() {
    document.addEventListener('mousemove', this.boundMouseMove);
    document.addEventListener('mouseenter', this.boundShow);
    document.addEventListener('mouseleave', this.boundHide);
  }

  onMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    // Check for hoverable elements
    this.checkHoverableElements(e.target);

    // Check for text input focus
    this.checkTextInputFocus(e.target);

    // Batch DOM updates with requestAnimationFrame
    if (!this.rafPending) {
      this.rafPending = true;
      requestAnimationFrame(() => this.updateCursorPosition());
    }
  }

  updateCursorPosition() {
    if (this.cursorDot) {
      this.cursorDot.style.left = this.mouseX + 'px';
      this.cursorDot.style.top = this.mouseY + 'px';
    }
    if (this.cursorRing) {
      this.cursorRing.style.left = this.mouseX + 'px';
      this.cursorRing.style.top = this.mouseY + 'px';
    }
    this.rafPending = false;
  }

  checkHoverableElements(target) {
    const isHoverable = target.matches('a, button, input, textarea, [role="button"]') ||
                        target.closest('a, button, input, textarea, [role="button"]');

    if (isHoverable) {
      document.body.classList.add('cursor-hover');
    } else {
      document.body.classList.remove('cursor-hover');
    }
  }

  checkTextInputFocus(target) {
    const isTextInput = target.matches('input, textarea, [contenteditable]') ||
                        target.closest('input, textarea, [contenteditable]');

    if (isTextInput) {
      document.body.classList.add('cursor-text-active');
    } else {
      document.body.classList.remove('cursor-text-active');
    }
  }

  show() {
    this.isVisible = true;
    if (this.cursorDot) this.cursorDot.style.opacity = '1';
    if (this.cursorRing) this.cursorRing.style.opacity = '1';
  }

  hide() {
    this.isVisible = false;
    if (this.cursorDot) this.cursorDot.style.opacity = '0';
    if (this.cursorRing) this.cursorRing.style.opacity = '0';
  }

  destroy() {
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseenter', this.boundShow);
    document.removeEventListener('mouseleave', this.boundHide);
  }
}

/**
 * ScrollReveal - Uses IntersectionObserver to reveal elements on scroll
 */
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

    destroy() {
        this.observer.disconnect();
    }
}

/**
 * NavSolidOnScroll - Adds solid class to nav when scrolling down
 */
class NavSolidOnScroll {
  constructor() {
    this.nav = document.querySelector('nav');

    if (!this.nav) {
      return;
    }

    this.scrollThreshold = 50;
    this.boundOnScroll = throttle(() => this.onScroll(), 100);

    this.init();
  }

  init() {
    window.addEventListener('scroll', this.boundOnScroll);
    // Initial check
    this.onScroll();
  }

  onScroll() {
    if (window.scrollY > this.scrollThreshold) {
      this.nav.classList.add('solid');
    } else {
      this.nav.classList.remove('solid');
    }
  }

  destroy() {
    window.removeEventListener('scroll', this.boundOnScroll);
  }
}

/**
 * MobileMenuToggle - Handles mobile menu open/close behavior
 */
class MobileMenuToggle {
  static instance = null;

  constructor() {
    // Ensure only one instance
    if (MobileMenuToggle.instance) {
      return MobileMenuToggle.instance;
    }

    this.burger = document.querySelector('.burger');
    this.menu = document.querySelector('.mob');

    if (!this.burger || !this.menu) {
      return;
    }

    this.boundToggle = (e) => {
      e.stopPropagation();
      this.toggleMenu();
    };

    this.boundCloseMenu = () => this.closeMenu();

    this.boundClickOutside = (e) => {
      if (!this.burger.contains(e.target) && !this.menu.contains(e.target)) {
        this.closeMenu();
      }
    };

    MobileMenuToggle.instance = this;
    this.init();
  }

  init() {
    // Toggle menu when burger is clicked
    this.burger.addEventListener('click', this.boundToggle);

    // Close menu when a link is clicked
    const menuLinks = this.menu.querySelectorAll('a');
    menuLinks.forEach((link) => {
      link.addEventListener('click', this.boundCloseMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', this.boundClickOutside);

    // Store reference to links for cleanup
    this.menuLinks = menuLinks;
  }

  toggleMenu() {
    this.burger.classList.toggle('open');
    this.menu.classList.toggle('open');
  }

  closeMenu() {
    this.burger.classList.remove('open');
    this.menu.classList.remove('open');
  }

  destroy() {
    this.burger.removeEventListener('click', this.boundToggle);
    this.menuLinks.forEach((link) => {
      link.removeEventListener('click', this.boundCloseMenu);
    });
    document.removeEventListener('click', this.boundClickOutside);
    MobileMenuToggle.instance = null;
  }
}

/**
 * SmoothScrollLinks - Smooth scroll to anchor links
 */
class SmoothScrollLinks {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.boundHandlers = new Map();
    this.init();
  }

  init() {
    this.links.forEach((link) => {
      const handler = (e) => {
        const href = link.getAttribute('href');

        // Skip if href is just '#'
        if (href === '#') {
          return;
        }

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      };
      this.boundHandlers.set(link, handler);
      link.addEventListener('click', handler);
    });
  }

  destroy() {
    this.links.forEach((link) => {
      const handler = this.boundHandlers.get(link);
      if (handler) {
        link.removeEventListener('click', handler);
      }
    });
    this.boundHandlers.clear();
  }
}

/**
 * StatCounter - Animate stat numbers when they come into view
 */
class StatCounter {
  constructor() {
    this.stats = document.querySelectorAll('.stat-cell');
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    this.init();
  }

  init() {
    this.stats.forEach((stat) => {
      this.observer.observe(stat);
    });
  }

  destroy() {
    this.observer.disconnect();
  }
}

/**
 * Utility Functions
 */

/**
 * debounce - Returns a debounced version of the function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * throttle - Returns a throttled version of the function
 * @param {Function} func - Function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

/**
 * TrackSelection - Handle track selection and form population
 */
class TrackSelection {
  constructor() {
    this.trackButtons = document.querySelectorAll('[data-action="select-track"]');
    this.boundHandlers = new Map();
    this.init();
  }

  init() {
    this.trackButtons.forEach((button) => {
      const handler = (e) => {
        e.preventDefault();

        const track = button.dataset.track;

        // Set active track
        document.documentElement.setAttribute('data-active-track', track);

        // Update form hidden field
        const trackField = document.getElementById('trackField');
        if (trackField) {
          trackField.value = track;
        }

        // Scroll to services smoothly
        setTimeout(() => {
          const servicios = document.getElementById('servicios');
          if (servicios) {
            servicios.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      };
      this.boundHandlers.set(button, handler);
      button.addEventListener('click', handler);
    });
  }

  destroy() {
    this.trackButtons.forEach((button) => {
      const handler = this.boundHandlers.get(button);
      if (handler) {
        button.removeEventListener('click', handler);
      }
    });
    this.boundHandlers.clear();
  }
}

/**
 * FormSubmission - Handle contact form submission with Supabase
 */
class FormSubmission {
  constructor() {
    this.contactForm = document.getElementById('contactForm');
    this.formFeedback = document.getElementById('formFeedback');

    if (!this.contactForm) {
      return;
    }

    // Supabase Configuration
    this.SUPABASE_URL = 'https://mjotemmimojrscwcntwa.supabase.co';
    this.SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qb3RlbW1pbW9qcnNjd2NudHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NDM1NzEsImV4cCI6MjA5MjAxOTU3MX0.GjE3aP646AFLgFTuhRVaADkNJVZPDZpDs45B-_qbmWg';

    this.boundSubmit = (e) => this.handleSubmit(e);
    this.init();
  }

  init() {
    this.contactForm.addEventListener('submit', this.boundSubmit);
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Show loading state
    const submitBtn = this.contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    try {
      // Get form data
      const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        servicio: document.getElementById('servicio').value,
        mensaje: document.getElementById('mensaje').value,
        track: document.documentElement.getAttribute('data-active-track') || 'neutral'
      };

      // Send to Supabase
      const response = await fetch(`${this.SUPABASE_URL}/rest/v1/consultas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.SUPABASE_KEY}`,
          'apikey': this.SUPABASE_KEY
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Show success message
      if (this.formFeedback) {
        this.formFeedback.textContent = '✓ Consulta enviada exitosamente. Te responderé pronto.';
        this.formFeedback.className = 'form-feedback success';
      }

      // Reset form
      setTimeout(() => {
        this.contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Clear feedback after 5 seconds
        setTimeout(() => {
          if (this.formFeedback) {
            this.formFeedback.textContent = '';
            this.formFeedback.className = 'form-feedback';
          }
        }, 5000);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      if (this.formFeedback) {
        this.formFeedback.textContent = 'Error al enviar. Intenta de nuevo.';
        this.formFeedback.className = 'form-feedback error';
      }

      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  destroy() {
    if (this.contactForm) {
      this.contactForm.removeEventListener('submit', this.boundSubmit);
    }
  }
}

/**
 * Initialize all utilities when DOM is ready
 */
const instances = {};

document.addEventListener('DOMContentLoaded', () => {
  instances.customCursor = new CustomCursor();
  instances.scrollReveal = new ScrollReveal();
  instances.navSolidOnScroll = new NavSolidOnScroll();
  instances.mobileMenuToggle = new MobileMenuToggle();
  instances.smoothScrollLinks = new SmoothScrollLinks();
  instances.statCounter = new StatCounter();
  instances.trackSelection = new TrackSelection();
  instances.formSubmission = new FormSubmission();
});

/**
 * Clean up all instances on unload
 */
window.addEventListener('unload', () => {
  Object.values(instances).forEach((instance) => {
    if (instance && typeof instance.destroy === 'function') {
      instance.destroy();
    }
  });
});

/**
 * Scroll Animations with Intersection Observer
 */
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

// Portfolio Carousel - Elegant Fade Overlay
class PortfolioCarousel {
    constructor() {
        this.carouselTrack = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('indicators');
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.modalName = document.getElementById('modalName');
        this.modalClose = document.querySelector('.modal-close');

        if (!this.carouselTrack) return;

        this.currentIndex = 0;
        this.items = document.querySelectorAll('.carousel-item');
        this.totalItems = this.items.length;
        this.autoRotateInterval = null;
        this.isNavigating = false;

        this.init();
    }

    init() {
        this.createIndicators();
        this.updateCarousel();
        this.prevBtn.addEventListener('click', (e) => { e.preventDefault(); this.previous(); this.resetAutoRotate(); });
        this.nextBtn.addEventListener('click', (e) => { e.preventDefault(); this.next(); this.resetAutoRotate(); });
        this.setupImageClickListeners();
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        // Pause on hover
        const wrapper = document.querySelector('.carousel-wrapper');
        wrapper.addEventListener('mouseenter', () => this.stopAutoRotate());
        wrapper.addEventListener('mouseleave', () => this.startAutoRotate());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigateWithKey(() => this.previous());
            if (e.key === 'ArrowRight') this.navigateWithKey(() => this.next());
        });

        this.startAutoRotate();
    }

    createIndicators() {
        for (let i = 0; i < this.totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator' + (i === 0 ? ' active' : '');
            indicator.addEventListener('click', () => { this.goToSlide(i); this.resetAutoRotate(); });
            this.indicatorsContainer.appendChild(indicator);
        }
    }

    updateCarousel() {
        this.items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });
        document.querySelectorAll('.indicator').forEach((ind, index) => {
            ind.classList.toggle('active', index === this.currentIndex);
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalItems;
        this.updateCarousel();
    }

    previous() {
        this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    navigateWithKey(callback) {
        if (this.isNavigating) return;
        this.isNavigating = true;
        callback();
        this.resetAutoRotate();
        setTimeout(() => { this.isNavigating = false; }, 500);
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => this.next(), 5000);
    }

    stopAutoRotate() {
        clearInterval(this.autoRotateInterval);
    }

    resetAutoRotate() {
        this.stopAutoRotate();
        this.startAutoRotate();
    }

    setupImageClickListeners() {
        document.querySelectorAll('.case-image').forEach(img => {
            img.addEventListener('click', () => {
                const fullImageSrc = img.getAttribute('data-full');
                const caseName = img.closest('.carousel-item').querySelector('.case-name').textContent;
                this.openModal(fullImageSrc, caseName);
            });
        });
    }

    openModal(imageSrc, caseName) {
        this.modalImage.src = imageSrc;
        this.modalName.textContent = caseName;
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        this.stopAutoRotate();
    }

    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        this.startAutoRotate();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioCarousel();
});

/**
 * Datos de campañas
 */
const campaignsData = {
    1: {
        id: 1,
        name: 'Doctor Wilber',
        category: 'Profesional de Salud',
        folder: 'campañas/Doctor Wilber',
        images: ['Doctor Wilber.jpg']
    },
    2: {
        id: 2,
        name: 'Rosa de Oro',
        category: 'E-commerce',
        folder: 'campañas/Rosa de Oro',
        images: ['Rosa de Oro.gif']
    },
    3: {
        id: 3,
        name: 'Renace',
        category: 'Bienestar',
        folder: 'campañas/Renace',
        images: ['Renace.gif']
    },
    4: {
        id: 4,
        name: 'Hinaitu',
        category: 'Consultoría',
        folder: 'campañas/HINAITU',
        images: ['HINAITU.gif']
    },
    5: {
        id: 5,
        name: 'Dra. Vannia',
        category: 'Profesional de Salud',
        folder: 'campañas/Doctora Vannia Maldonado',
        images: ['Doctora Vannia Maldonado.png']
    },
    6: {
        id: 6,
        name: 'Dr. José Luis',
        category: 'Profesional de Salud',
        folder: 'campañas/Doctor Jose Luis vivas',
        images: ['Doctor Jose Luis vivas.png']
    },
    7: {
        id: 7,
        name: 'Dra. Karen',
        category: 'Profesional de Salud',
        folder: 'campañas/Doctora Karen Astuñague',
        images: ['Doctora Karen Astuñague.gif']
    }
};

/**
 * CampaignModal - Gestiona galería de campaña con carousel interior
 */
class CampaignModal {
    constructor() {
        this.modal = document.getElementById('campaign-modal');
        this.modalContent = this.modal?.querySelector('.modal-content');
        this.campaignBody = document.getElementById('campaign-body');
        this.closeBtn = this.modal?.querySelector('.modal-close');
        this.isOpen = false;
        this.currentImageIndex = 0;
        this.currentCampaign = null;

        this.init();
    }

    init() {
        if (!this.modal || !this.campaignBody) return;

        this.closeBtn?.addEventListener('click', () => this.close());

        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        document.addEventListener('keydown', (e) => {
            if (this.isOpen) {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowLeft') this.prevImage();
                if (e.key === 'ArrowRight') this.nextImage();
            }
        });

        document.addEventListener('openCampaign', (e) => {
            this.open(e.detail.caseId);
        });
    }

    open(caseId) {
        const campaign = campaignsData[caseId];
        if (!campaign || this.isOpen) return;

        this.isOpen = true;
        this.currentCampaign = campaign;
        this.currentImageIndex = 0;

        this.render();

        this.modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.body.style.overscrollBehavior = 'contain';

        requestAnimationFrame(() => {
            this.modalContent.scrollTop = 0;
        });
    }

    render() {
        const campaign = this.currentCampaign;
        const imageCount = campaign.images.length;
        const currentImage = campaign.images[this.currentImageIndex];
        const imagePath = `${campaign.folder}/${currentImage}`;

        const hasMultiple = imageCount > 1;

        this.campaignBody.innerHTML = `
            <div class="campaign-header">
                <h2 class="campaign-title">${campaign.name}</h2>
                <p class="campaign-category">${campaign.category}</p>
            </div>

            <div class="campaign-gallery">
                <div class="campaign-image-wrapper">
                    <img
                        src="${imagePath}"
                        alt="${campaign.name}"
                        loading="lazy"
                        decoding="async"
                        class="campaign-gallery-img"
                    >
                    ${hasMultiple ? `
                        <button class="gallery-nav gallery-prev" aria-label="Imagen anterior">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button class="gallery-nav gallery-next" aria-label="Siguiente imagen">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    ` : ''}
                </div>

                ${hasMultiple ? `
                    <div class="gallery-indicators">
                        ${campaign.images.map((_, idx) => `
                            <button
                                class="indicator ${idx === this.currentImageIndex ? 'active' : ''}"
                                data-index="${idx}"
                                aria-label="Ir a imagen ${idx + 1}"
                            ></button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <div class="campaign-footer">
                <p>${hasMultiple ? `${this.currentImageIndex + 1} de ${imageCount} • ` : ''}Campaña de branding • ${campaign.name}</p>
            </div>
        `;

        if (hasMultiple) {
            this.attachGalleryListeners();
        }
    }

    attachGalleryListeners() {
        const prevBtn = this.campaignBody.querySelector('.gallery-prev');
        const nextBtn = this.campaignBody.querySelector('.gallery-next');
        const indicators = this.campaignBody.querySelectorAll('.indicator');

        prevBtn?.addEventListener('click', () => this.prevImage());
        nextBtn?.addEventListener('click', () => this.nextImage());

        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                this.currentImageIndex = parseInt(indicator.dataset.index);
                this.render();
            });
        });
    }

    prevImage() {
        if (!this.currentCampaign) return;
        const imageCount = this.currentCampaign.images.length;
        this.currentImageIndex = (this.currentImageIndex - 1 + imageCount) % imageCount;
        this.render();
    }

    nextImage() {
        if (!this.currentCampaign) return;
        const imageCount = this.currentCampaign.images.length;
        this.currentImageIndex = (this.currentImageIndex + 1) % imageCount;
        this.render();
    }

    close() {
        if (!this.isOpen) return;
        this.isOpen = false;
        this.currentCampaign = null;
        this.currentImageIndex = 0;

        this.modal.classList.remove('open');
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';
    }
}

/**
 * CasosCarousel - Carousel para casos de éxito con navegación por flechas
 */
class CasosCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.currentSlide = document.getElementById('current-slide');
        this.currentIndex = 0;
        this.slideCount = this.slides.length;

        this.init();
    }

    init() {
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());

        // Click en casos para abrir modal
        document.querySelectorAll('.caso-card.clickable').forEach(card => {
            card.addEventListener('click', (e) => this.openCampaign(e));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        this.updateSlide();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
        this.updateSlide();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slideCount;
        this.updateSlide();
    }

    updateSlide() {
        const offset = -this.currentIndex * 100;

        // Usar transform con translateZ para GPU acceleration
        this.track.style.transform = `translateX(${offset}%) translateZ(0)`;
        this.track.style.willChange = 'transform';

        this.currentSlide.textContent = this.currentIndex + 1;

        // Remover will-change después de animación
        this.track.addEventListener('transitionend', () => {
            this.track.style.willChange = 'auto';
        }, { once: true });
    }

    openCampaign(e) {
        const slide = e.currentTarget.closest('.carousel-slide');
        const caseId = parseInt(slide?.dataset.caseId);

        if (caseId) {
            const event = new CustomEvent('openCampaign', { detail: { caseId } });
            document.dispatchEvent(event);
        }
    }
}

/**
 * LeadPopup - Manages the lead magnet popup trigger and form submission
 */
class LeadPopup {
  constructor() {
    this.popupElement = document.getElementById('lead-popup');
    this.popupForm = document.getElementById('popup-form');
    this.popupClose = document.querySelector('.popup-close');
    this.isOpen = false;
    this.triggerDelay = 10000; // 10 seconds
    this.dismissedKey = 'vita_popup_dismissed';

    if (this.popupElement) {
      this.init();
    }
  }

  init() {
    // Check if popup was previously dismissed
    if (this.isDismissed()) {
      return;
    }

    // Set timeout to show popup after 10 seconds
    setTimeout(() => this.show(), this.triggerDelay);

    // Add close button click listener
    if (this.popupClose) {
      this.popupClose.addEventListener('click', () => this.close());
    }

    // Add background click listener
    this.popupElement.addEventListener('click', (e) => {
      if (e.target === this.popupElement) {
        this.close();
      }
    });

    // Add ESC key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Add form submit listener
    if (this.popupForm) {
      this.popupForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  }

  show() {
    this.popupElement.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.isOpen = true;
  }

  close() {
    this.popupElement.classList.remove('active');
    document.body.style.overflow = '';
    this.isOpen = false;
    this.setDismissed();
  }

  handleSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('popup-name');
    const emailInput = document.getElementById('popup-email');

    const lead = {
      name: nameInput.value,
      email: emailInput.value,
      source: 'popup'
    };

    // Get existing leads from localStorage
    const leads = JSON.parse(localStorage.getItem('vita_leads')) || [];

    // Add new lead
    leads.push(lead);

    // Save back to localStorage
    localStorage.setItem('vita_leads', JSON.stringify(leads));

    // Redirect to lead magnet page
    window.location.href = 'lead-magnet.html';
  }

  setDismissed() {
    localStorage.setItem(this.dismissedKey, 'true');
  }

  isDismissed() {
    return localStorage.getItem(this.dismissedKey) === 'true';
  }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.carousel-container')) {
        new CasosCarousel();
    }
    if (document.getElementById('campaign-modal')) {
        new CampaignModal();
    }
    new LeadPopup();
});
