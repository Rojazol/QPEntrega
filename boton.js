


const scrollTopBtn = document.getElementById('scroll-top');

// Mostrar el bot�n al hacer scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block"; // Muestra el bot�n
    } else {
        scrollTopBtn.style.display = "none"; // Oculta el bot�n
    }
};

// Al hacer clic, volver arriba
scrollTopBtn.onclick = function(e) {
    e.preventDefault(); // Evita la acci�n por defecto del enlace
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
};
