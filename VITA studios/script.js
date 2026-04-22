// Mobile Navigation
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

// Booking Modal
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

// Forms
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

// Smooth scroll
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
