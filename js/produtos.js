// const setaDrop1 = document.querySelector(".triangulo1");
// const setaDrop2 = document.querySelector(".triangulo2");
// const setaDrop3 = document.querySelector(".triangulo3");
// const setaDrop4 = document.querySelector(".triangulo4");

const triangulo1 = document.getElementById("tri1");
const triangulo2 = document.getElementById("tri2");
const triangulo3 = document.getElementById("tri3");
const triangulo4 = document.getElementById("tri4");

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
