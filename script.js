
const toggle = document.querySelector(".menu-toggle");
const navs = document.querySelectorAll(".nav");

if (toggle && navs.length > 0) {
  toggle.addEventListener("click", () => {
    let isOpen = false;

    navs.forEach(nav => {
      isOpen = nav.classList.toggle("open");
    });

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navs.forEach(nav => {
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navs.forEach(n => n.classList.remove("open"));
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  });
}


// =====================================
// PAGINACIÓN DE RESEÑAS
// =====================================

let paginaActual = 0;
const totalPaginas = 3;

function cambiarPagina(direccion) {
  const paginaAnterior = document.getElementById(`pagina-${paginaActual + 1}`);

  if (paginaAnterior) {
    paginaAnterior.style.display = "none";
  }

  paginaActual = (paginaActual + direccion + totalPaginas) % totalPaginas;

  const paginaNueva = document.getElementById(`pagina-${paginaActual + 1}`);

  if (paginaNueva) {
    paginaNueva.style.display = "block";
  }
}


// =====================================
// SLIDER DE BANNERS
// =====================================

document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');

  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = null;
  let autoplayActivo = true;

  function showSlide(index) {

    slides[currentSlide].classList.remove('active');

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
  }

  // Cambio automático cada 4 segundos
  function iniciarSlider() {

    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 4000);

  }

  // Detener definitivamente el cambio automático
  function detenerSlider() {

    clearInterval(slideInterval);

    autoplayActivo = false;

  }

  // Iniciar automáticamente
  iniciarSlider();

  // Flecha siguiente
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {

      detenerSlider();

      showSlide(currentSlide + 1);

    });
  }

  // Flecha anterior
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {

      detenerSlider();

      showSlide(currentSlide - 1);

    });
  }

});
