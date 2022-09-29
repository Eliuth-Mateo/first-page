const typed = new Typed(".typed", {
  strings: [
    '<i class="nombre">Mateo</i>',
    '<i class="nombre">=>%.!</i>',
    '<i class="nombre">Debug!</i>',
  ],

  //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

var iconoDesplegale = document.querySelector(".btn");
iconoDesplegale.addEventListener("click", desplegarMenu);
function desplegarMenu () {
  var menudDesplegable = document.querySelector(".section1_info");
  menudDesplegable.classList.toggle("desplegar_info");
} 

const section_1 = document.getElementById("contenido1");
const section_2 = document.getElementById("contenido2");
const cargarSection = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    } else {
      entrada.target.classList.remove("visible");
    }
  });
};
const observador = new IntersectionObserver(cargarSection, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});
observador.observe(section_1);
observador.observe(section_2);