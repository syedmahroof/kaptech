/* ── Navbar scroll ─────────────────────────────── */
const navbar = document.getElementById('navbar');
const btt    = document.getElementById('btt');
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 80);
    if (btt) btt.classList.toggle('vis', y > 400);
}, { passive: true });

/* ── Mobile nav ────────────────────────────────── */
function toggleNav() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── Scroll reveal ──────────────────────────────── */
const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 70);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Active nav link ────────────────────────────── */
(function() {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href !== '#' && page === href) a.classList.add('active-page');
    });
})();
