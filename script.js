// Mobile Navigation Toggle
const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const nav = document.querySelector('.nav-menu');

if (navOpen && nav) {
  navOpen.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (navClose && nav) {
  navClose.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) {
      nav.classList.remove('active');
    }
  });
});

// Accessible keyboard navigation for hamburger icons
if (navOpen) {
  navOpen.setAttribute('tabindex', '0');
  navOpen.setAttribute('role', 'button');
  navOpen.setAttribute('aria-label', 'Open navigation menu');
  navOpen.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      nav.classList.add('active');
    }
  });
}

if (navClose) {
  navClose.setAttribute('tabindex', '0');
  navClose.setAttribute('role', 'button');
  navClose.setAttribute('aria-label', 'Close navigation menu');
  navClose.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      nav.classList.remove('active');
    }
  });
}
