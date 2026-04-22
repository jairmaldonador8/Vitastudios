/* ============================================================================
   VITA Studio — Main Application Logic
   Custom Cursor, Navbar, Navigation, Forms, Modals
   ============================================================================ */

// ─────────────────────────────────────────────────────────────────────────
// 1. Custom Cursor
// ─────────────────────────────────────────────────────────────────────────

class CustomCursor {
  constructor() {
    this.dot = document.getElementById('cursor-dot');
    this.ring = document.getElementById('cursor-ring');
    this.x = 0;
    this.y = 0;
    this.dotX = 0;
    this.dotY = 0;
    this.isMoving = false;

    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    document.addEventListener('mouseenter', () => this.show());
    document.addEventListener('mouseleave', () => this.hide());

    // Hover states
    this.setupHoverStates();

    this.animate();
  }

  onMouseMove(e) {
    this.x = e.clientX;
    this.y = e.clientY;

    // Position ring immediately
    this.ring.style.left = this.x - 16 + 'px';
    this.ring.style.top = this.y - 16 + 'px';

    this.isMoving = true;
    clearTimeout(this.moveTimeout);
    this.moveTimeout = setTimeout(() => {
      this.isMoving = false;
    }, 100);
  }

  animate() {
    // Dot follows with easing
    this.dotX += (this.x - this.dotX) * 0.2;
    this.dotY += (this.y - this.dotY) * 0.2;

    this.dot.style.left = this.dotX - 4 + 'px';
    this.dot.style.top = this.dotY - 4 + 'px';

    requestAnimationFrame(() => this.animate());
  }

  show() {
    this.dot.style.opacity = '0.7';
    this.ring.style.opacity = '0.4';
  }

  hide() {
    this.dot.style.opacity = '0';
    this.ring.style.opacity = '0';
  }

  setupHoverStates() {
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-card, input, textarea');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('is-hovering');
      });

      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('is-hovering');
      });
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 2. Navbar Scroll Behavior
// ─────────────────────────────────────────────────────────────────────────

class NavbarScroll {
  constructor() {
    this.nav = document.querySelector('nav');
    this.lastScrollY = 0;
    this.ticking = false;

    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    this.lastScrollY = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => this.update());
      this.ticking = true;
    }
  }

  update() {
    if (this.lastScrollY > 80) {
      this.nav.classList.add('scrolled');
    } else {
      this.nav.classList.remove('scrolled');
    }

    this.ticking = false;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 3. Mobile Menu Toggle
// ─────────────────────────────────────────────────────────────────────────

class MobileMenuToggle {
  constructor() {
    this.toggle = document.querySelector('.nav-toggle');
    this.navLinks = document.querySelector('.nav-links');
    this.links = document.querySelectorAll('.nav-links a');

    this.init();
  }

  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());

    // Close menu on link click
    this.links.forEach((link) => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.navLinks.classList.toggle('open');
  }

  closeMenu() {
    this.navLinks.classList.remove('open');
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 4. Smooth Scroll Links
// ─────────────────────────────────────────────────────────────────────────

class SmoothScrollLinks {
  constructor() {
    this.links = document.querySelectorAll('a[href^="#"]');
    this.init();
  }

  init() {
    this.links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 5. Portfolio / Campaign Modal
// ─────────────────────────────────────────────────────────────────────────

const campaignsData = {
  1: {
    name: 'Doctor Wilber',
    images: ['campañas/Doctor Wilber/Doctor Wilber.jpg'],
  },
  2: {
    name: 'Rosa de Oro',
    images: ['campañas/Rosa de Oro/Rosa de Oro.gif'],
  },
  3: {
    name: 'Renace',
    images: ['campañas/Renace/Renace.gif'],
  },
  4: {
    name: 'Hinaitu',
    images: ['campañas/HINAITU/HINAITU.gif'],
  },
  5: {
    name: 'Dra. Vannia Maldonado',
    images: ['campañas/Doctora Vannia Maldonado/Doctora Vannia Maldonado.png'],
  },
  6: {
    name: 'Dr. José Luis Vivas',
    images: ['campañas/Doctor Jose Luis vivas/Doctor Jose Luis vivas.png'],
  },
  7: {
    name: 'Dra. Karen Astuñague',
    images: ['campañas/Doctora Karen Astuñague/Doctora Karen Astuñague.gif'],
  },
};

class CampaignModal {
  constructor() {
    this.modal = document.getElementById('campaign-modal');
    this.modalContent = this.modal.querySelector('.modal-content');
    this.closeBtn = this.modal.querySelector('.modal-close');
    this.navPrev = this.modal.querySelector('.modal-prev');
    this.navNext = this.modal.querySelector('.modal-next');
    this.counter = this.modal.querySelector('.modal-counter');
    this.currentCaseId = null;
    this.currentImageIndex = 0;

    this.init();
  }

  init() {
    // Close button
    this.closeBtn.addEventListener('click', () => this.close());

    // Close on outside click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prevImage();
      if (e.key === 'ArrowRight') this.nextImage();
    });

    // Click portfolio cards
    document.querySelectorAll('.portfolio-card').forEach((card) => {
      card.addEventListener('click', () => {
        const caseId = card.getAttribute('data-case-id');
        this.open(caseId);
      });
    });

    // Nav buttons
    if (this.navPrev) this.navPrev.addEventListener('click', () => this.prevImage());
    if (this.navNext) this.navNext.addEventListener('click', () => this.nextImage());
  }

  open(caseId) {
    this.currentCaseId = caseId;
    this.currentImageIndex = 0;
    const campaign = campaignsData[caseId];

    if (!campaign) return;

    this.render(campaign);
    this.modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  render(campaign) {
    const images = campaign.images;
    const currentImage = images[this.currentImageIndex];

    this.modalContent.innerHTML = `<img src="${currentImage}" alt="${campaign.name}" class="modal-image">`;

    // Show/hide nav if multiple images
    if (images.length > 1) {
      this.counter.textContent = `${this.currentImageIndex + 1} / ${images.length}`;
      this.modal.querySelector('.modal-nav').style.display = 'flex';
    } else {
      this.modal.querySelector('.modal-nav').style.display = 'none';
    }
  }

  prevImage() {
    const campaign = campaignsData[this.currentCaseId];
    if (!campaign) return;

    this.currentImageIndex = (this.currentImageIndex - 1 + campaign.images.length) % campaign.images.length;
    this.render(campaign);
  }

  nextImage() {
    const campaign = campaignsData[this.currentCaseId];
    if (!campaign) return;

    this.currentImageIndex = (this.currentImageIndex + 1) % campaign.images.length;
    this.render(campaign);
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 6. Contact Form Handler
// ─────────────────────────────────────────────────────────────────────────

class ContactFormHandler {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.init();
  }

  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.form.querySelector('#name').value;
    const email = this.form.querySelector('#email').value;
    const message = this.form.querySelector('#message').value;

    if (!name || !email || !message) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Save to localStorage
    const contacts = JSON.parse(localStorage.getItem('vita_contacts') || '[]');
    contacts.push({ name, email, message, timestamp: new Date().toISOString() });
    localStorage.setItem('vita_contacts', JSON.stringify(contacts));

    // Send to WhatsApp (alternative: you could use an API here)
    const whatsappMessage = `Hola VITA Studio, soy ${name}. ${message} Mi correo es ${email}`;
    const whatsappLink = `https://wa.me/528181782508?text=${encodeURIComponent(whatsappMessage)}`;

    // Show success message
    alert('¡Mensaje enviado! Te contactaremos pronto.');

    // Reset form
    this.form.reset();

    // Optional: redirect to WhatsApp
    // window.open(whatsappLink, '_blank');
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 7. Lead Popup Handler
// ─────────────────────────────────────────────────────────────────────────

class LeadPopup {
  constructor() {
    this.popup = document.getElementById('lead-popup');
    this.form = document.getElementById('popup-form');
    this.closeBtn = this.popup.querySelector('.popup-close');
    this.ctas = document.querySelectorAll('.hero-cta');
    this.popupShown = false;
    this.popupTimeout = null;

    this.init();
  }

  init() {
    // Close button
    this.closeBtn.addEventListener('click', () => this.close());

    // Close on outside click
    this.popup.addEventListener('click', (e) => {
      if (e.target === this.popup) this.close();
    });

    // Form submit
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // CTA buttons
    this.ctas.forEach((btn) => {
      btn.addEventListener('click', () => this.open());
    });

    // Auto-show after 10 seconds (unless dismissed)
    if (!localStorage.getItem('vita_popup_dismissed')) {
      this.popupTimeout = setTimeout(() => this.open(), 10000);
    }
  }

  open() {
    this.popup.classList.add('active');
    this.popupShown = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.popup.classList.remove('active');
    localStorage.setItem('vita_popup_dismissed', 'true');
    document.body.style.overflow = 'auto';
    clearTimeout(this.popupTimeout);
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = this.form.querySelector('#popup-name').value;
    const email = this.form.querySelector('#popup-email').value;

    if (!name || !email) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Save to localStorage
    const leads = JSON.parse(localStorage.getItem('vita_leads') || '[]');
    leads.push({ name, email, timestamp: new Date().toISOString() });
    localStorage.setItem('vita_leads', JSON.stringify(leads));

    // Redirect to lead magnet page
    window.location.href = 'lead-magnet.html?email=' + encodeURIComponent(email);
  }
}

// ─────────────────────────────────────────────────────────────────────────
// 8. Initialization on DOM Ready
// ─────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  new CustomCursor();
  new NavbarScroll();
  new MobileMenuToggle();
  new SmoothScrollLinks();
  new CampaignModal();
  new ContactFormHandler();
  new LeadPopup();
});
