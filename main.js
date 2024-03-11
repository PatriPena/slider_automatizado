/*
 * función JS para controlar a transición automática de diapositivas
*/

/* Comezamos definindo unha función chamada `autoTransition` 
   que será a que se ocupe de controlar a transición automática de diapositivas
   */
function autoTransition() {
  /* seleccionar tódolas diapositivas da presentación: 
     que son tódolos elementos (inputs) nos que o atributo "id" comeza con "slide"
     */
  const slides = document.querySelectorAll('input[id^="slide"]');  
  /* inicializamos unha variable `index` co valor inicial de 0. 
     Esta variable vai seguir o índice actual da diapositiva que está a ser mostrada.
     */
  let index = 0;
  /* nesta outra variable se almacenará o identificador do intervalo de tempo, 
     que poderá ser utilizado para reter información útil ao deter a transición automática.
     */
  let intervalId; // Variable to store the interval ID, garda o identificador do intervalo de tempo

  /* definir unha función para ir cambiando á próxima diapositiva */
  function nextSlide() {
    /* este código marca a diapositiva actual como seleccionada. 
       A diapositiva actual é determinada polo valor do índice `index`.
       */
    slides[index].checked = true;
    /* a seguinte liña incrementa o índice en 1.
       Se o índice resultante é maior que a cantidade total de diapositivas (`slides.length`), 
       entón volvemos ao comezo da presentación empregando o operador de módulo (%).
       */
    index = (index + 1) % slides.length;
  }
  
  /* función que inicia a transición automática. 
     Utiliza un intervalo de tempo para chamar a función `nextSlide` cada 5000 milisegundos (ou 5 segundos) 
     */
  function startAutoTransition() {
    intervalId = setInterval(nextSlide, 5000);
    /* ao establecer o intervalo de tempo usando a función `setInterval`, se Chama a función `nextSlide` cada 5000 milisegundos e garda o identificador do intervalo de tempo na variable `intervalId`.*/
  }
  
  /* función para deter a transición automática. Utiliza a función `clearInterval` para eliminar o intervalo de tempo gardado na variable `intervalId`.*/
  function stopAutoTransition() {
    /* detén o intervalo de tempo identificado por `intervalId`, o que para a transición automática. */
    clearInterval(intervalId);
  }

  // comezar a transición automática cando se carga a páxina
  startAutoTransition();

  // Stop auto transition on hover
  /* seleccionar o elemento HTML coa clase "wrap" e almacenalo na variable wrap. Este elemento é o contedor principal que envolve as diapositivas 
  */
  const wrap = document.querySelector(".wrap");
  /* engadir escoita para o evento "mouseenter" no elemento wrap. 
     Cando o rato entra neste contedor, chama á función stopAutoTransition.
     Isto significa que cando se move o rato sobre esta área, 
     a transición automática das diapositivas detense.
     */
  wrap.addEventListener("mouseenter", stopAutoTransition);
  /* engadir escoita para o evento "mouseleave" no elemento wrap.
     Cando o rato sae deste contedor, chama á función startAutoTransition.
     Isto significa que cando se move o rato fóra da área da presentación, 
     a transición automática das diapositivas volve a comezar.
     */
  wrap.addEventListener("mouseleave", startAutoTransition);
}

/* window.onload é unha función que se executa cando a páxina web se cargou completamente.
   esta función inclue a chamada a función autoTransition() 
   que inicia a transición automática das diapositivas
   */
window.onload = function () {
  autoTransition();
};




/*
Este tamén é un código f¡de transición automatica pero non se para no 'hover' como o anterior*/


// Define a function to automatically transition slides/* 
function autoTransition() {
    // Select all the slide input elements
    const slides = document.querySelectorAll('input[id^="slide"]');
    let index = 0;

    // Transition to the next slide
    function nextSlide() {
        slides[index].checked = true;
        index = (index + 1) % slides.length;
    }

    // Set an interval to transition to the next slide every few seconds
    setInterval(nextSlide, 2500); // Change 5000 to adjust the time interval (in milliseconds)
}

// Call the function to start auto transition when the page loads
window.onload = function() {
    autoTransition();
};

 
/*
 ------- Explicación do código ---------
 
 Este código en JavaScript define unha función chamada `autoTransition` para controlar a transición automática das diapositivas dunha presentación. Vou explicar liña por liña:

1. `function autoTransition() {`: Definimos a función `autoTransition`.

2. `const slides = document.querySelectorAll('input[id^="slide"]');`: Aquí seleccionamos todos os elementos de entrada (inputs) nos que o atributo "id" comeza con "slide". Estes elementos deberían representar as diapositivas da presentación.

3. `let index = 0;`: Inicializamos unha variable chamada `index` co valor 0, que gardará o índice da diapositiva actual.

4. `function nextSlide() {`: Definimos unha función chamada `nextSlide` que avanzará á seguinte diapositiva.

5. `slides[index].checked = true;`: Marcamos a diapositiva actual como seleccionada. O índice `index` indica a diapositiva actual.

6. `index = (index + 1) % slides.length;`: Incrementamos o índice en 1 e usamos o operador módulo (%) para asegurarnos de que o índice non excede o número total de diapositivas. Se `index` é igual a `slides.length`, volvemos ao inicio da presentación.

7. `setInterval(nextSlide, 5000);`: Usamos `setInterval` para chamar a función `nextSlide` cada 5000 milisegundos (5 segundos). Isto fará que a presentación avance automaticamente.

8. `window.onload = function() { autoTransition(); };`: Esta liña chama á función `autoTransition` cando a páxina cargue completamente. Isto asegura que a transición automática comece cando a páxina estea lista.
*/


//menu desplegable

const body = document.body;
const topNav = document.querySelector(".top-nav");
const menuToggle = topNav.querySelector(".menu-toggle");
const menuClose = topNav.querySelector(".menu-close");
const menuWrapper = topNav.querySelector(".menu-wrapper");
const topBannerOverlay = document.querySelector(".top-banner-overlay");
const isOpenedClass = "is-opened";
const isMovedClass = "is-moved";
const noTransitionClass = "no-transition";
let resize;

menuToggle.addEventListener("click", () => {
  menuWrapper.classList.toggle(isOpenedClass);
  topBannerOverlay.classList.toggle(isMovedClass);
});

menuClose.addEventListener("click", () => {
  menuWrapper.classList.remove(isOpenedClass);
  topBannerOverlay.classList.remove(isMovedClass);
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape" && menuWrapper.classList.contains(isOpenedClass)) {
    menuClose.click();
  }
});

window.addEventListener("resize", () => {
  body.classList.add(noTransitionClass);
  clearTimeout(resize);
  resize = setTimeout(() => {
    body.classList.remove(noTransitionClass);
  }, 500);
});

