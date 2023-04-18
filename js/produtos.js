// const setaDrop1 = document.querySelector(".triangulo1");
// const setaDrop2 = document.querySelector(".triangulo2");
// const setaDrop3 = document.querySelector(".triangulo3");
// const setaDrop4 = document.querySelector(".triangulo4");

const triangulo1 = document.getElementById("tri1");
const triangulo2 = document.getElementById("tri2");
const triangulo3 = document.getElementById("tri3");
const triangulo4 = document.getElementById("tri4");

const triangulo5 = document.getElementById("tri5");
const triangulo6 = document.getElementById("tri6");
const triangulo7 = document.getElementById("tri7");
const triangulo8 = document.getElementById("tri8");

triangulo1.addEventListener("click", () => {
  triangulo1.classList.toggle("active");
});

triangulo2.addEventListener("click", () => {
  triangulo2.classList.toggle("active");
});

triangulo3.addEventListener("click", () => {
  triangulo3.classList.toggle("active");
});

triangulo4.addEventListener("click", () => {
  triangulo4.classList.toggle("active");
});

const btnFiltro = document.getElementById("btnFiltro");

btnFiltro.addEventListener("click", () => {
  btnFiltro.classList.toggle("active");
});

triangulo5.addEventListener("click", () => {
  triangulo5.classList.toggle("active");
  console.log("chack");
});

triangulo6.addEventListener("click", () => {
  triangulo6.classList.toggle("active");
  console.log("chack");
});

triangulo7.addEventListener("click", () => {
  triangulo7.classList.toggle("active");
  console.log("chack");
});

triangulo8.addEventListener("click", () => {
  triangulo8.classList.toggle("active");
  console.log("chack");
});
