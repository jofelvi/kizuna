/**
 * Marca con [data-seen] cada elemento [data-inview] la primera vez que entra en pantalla.
 * El CSS decide qué animar con esa marca (ver «Movimiento» en global.css).
 * Solo cuando el observador existe se agrega html.motion, que es lo único que oculta
 * algo antes de verlo: si este script no corre, la página se ve completa y quieta.
 */
const targets = document.querySelectorAll<HTMLElement>('[data-inview]');

if ('IntersectionObserver' in window && targets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute('data-seen', '');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  document.documentElement.classList.add('motion');
  targets.forEach((target) => observer.observe(target));
}
