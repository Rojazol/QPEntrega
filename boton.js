


const scrollTopBtn = document.getElementById('scroll-top');

// Mostrar el botón al hacer scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block"; // Muestra el botón
    } else {
        scrollTopBtn.style.display = "none"; // Oculta el botón
    }
};

// Al hacer clic, volver arriba
scrollTopBtn.onclick = function(e) {
    e.preventDefault(); // Evita la acción por defecto del enlace
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
};
