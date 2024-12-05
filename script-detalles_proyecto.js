// Seleccionar todos los elementos que tienen la clase 'fade-in'
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach((el, index) => {
        // Añadir un retraso basado en el atributo 'data-order'
        const order = el.dataset.order || index;
        el.style.transitionDelay = `${order * 0.3}s`;
    });

    // Hacer visibles los elementos cuando se encuentren en el viewport
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeElements.forEach(el => observer.observe(el));
});