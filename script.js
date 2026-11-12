const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}


let paginaActual = 0;
const totalPaginas = 3; // Ahora tenemos 3 páginas en total

function cambiarPagina(direccion) {
  // Ocultar la página actual
  document.getElementById(`pagina-${paginaActual + 1}`).style.display = "none";
  
  // Calcular la nueva página de forma circular (1 -> 2 -> 3 -> 1)
  paginaActual = (paginaActual + direccion + totalPaginas) % totalPaginas;
  
  // Mostrar la nueva página
  document.getElementById(`pagina-${paginaActual + 1}`).style.display = "block";
}









document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // CAMBIO AUTOMÁTICO CÍCLICO CADA 4 SEGUNDOS
  let slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4000);

  // CONTROL MANUAL CON LAS FLECHAS (Reinicia el tiempo automático al hacer clic)
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(currentSlide - 1);
    });
  }
});