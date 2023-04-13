const setaDrop1 = document.querySelector(".triangulo1");
const setaDrop2 = document.querySelector(".triangulo2");
const setaDrop3 = document.querySelector(".triangulo3");
const setaDrop4 = document.querySelector(".triangulo4");

setaDrop1.addEventListener("click", () => {
  setaDrop1.classList.toggle("active");
});

setaDrop2.addEventListener("click", () => {
  setaDrop2.classList.toggle("active");
});

setaDrop3.addEventListener("click", () => {
  setaDrop3.classList.toggle("active");
});

setaDrop4.addEventListener("click", () => {
  setaDrop4.classList.toggle("active");
});
