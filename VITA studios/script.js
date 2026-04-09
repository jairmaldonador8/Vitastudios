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
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.init();
  }

  init() {
    this.elements.forEach((el) => {
      this.observer.observe(el);
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
