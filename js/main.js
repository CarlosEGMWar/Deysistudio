// Mobile menu
const toggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('nav-overlay');
const closeBtn = document.getElementById('nav-close');

function openMenu() {
  mobileNav.classList.add('open');
  overlay.style.display = 'block';
  setTimeout(() => overlay.classList.add('open'), 10);
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileNav.classList.remove('open');
  overlay.classList.remove('open');
  setTimeout(() => { overlay.style.display = 'none'; }, 300);
  document.body.style.overflow = '';
}

if (toggle) toggle.addEventListener('click', openMenu);
if (overlay) overlay.addEventListener('click', closeMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);

// Header scroll shrink
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.12)';
  } else {
    header.style.boxShadow = '0 1px 20px rgba(0,0,0,0.07)';
  }
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
