// Smooth scroll offset for fixed header and simple active-link updates
const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('#mainNav');
    if (nav && nav.classList.contains('show') && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

// Portfolio category filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    portfolioItems.forEach(item => {
      item.classList.toggle('d-none', filter !== 'all' && item.dataset.category !== filter);
    });
  });
});

// Bootstrap form validation demo (front-end only; no backend connected)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    if (!contactForm.checkValidity()) {
      contactForm.classList.add('was-validated');
      return;
    }
    const formNote = document.getElementById('formNote');
    formNote.textContent = 'Thanks! Your message is ready. Connect a backend or email service to receive submissions.';
    formNote.classList.add('text-success');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
}
