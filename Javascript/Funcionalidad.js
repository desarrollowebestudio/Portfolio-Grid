// Identificación Elementos
const barraNavegacion = document.querySelector('#barra-navegacion');
const botonMenuNavegacion = document.querySelector('#boton-menu-navegacion');
const botonCerrarNavegacion = document.querySelector('#boton-cerrar-navegacion');
const navegacionLateral = document.querySelector('#navegacion-lateral');
const fechaFooter = document.querySelector('#fecha-footer');

// Funcionalidad Navegación Lateral
botonMenuNavegacion.addEventListener('click', function () {
  navegacionLateral.classList.add('visible');
});

botonCerrarNavegacion.addEventListener('click', function () {
  navegacionLateral.classList.remove('visible');
});

// Posicionamiento Barra Navegación
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 60) { barraNavegacion.classList.add('fija'); } 
  else { barraNavegacion.classList.remove('fija'); }
});

// Obtención Fecha Actual
fechaFooter.innerHTML = new Date().getFullYear();
