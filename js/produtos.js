// const setaDrop1 = document.querySelector(".triangulo1");
// const setaDrop2 = document.querySelector(".triangulo2");
// const setaDrop3 = document.querySelector(".triangulo3");
// const setaDrop4 = document.querySelector(".triangulo4");

const triangulos = document.getElementsByClassName("triangulo");

for (const triangulo of triangulos) {
  triangulo.addEventListener("click", () => {
    triangulo.classList.toggle("active");
  });
}

const btnFiltro = document.getElementById("btnFiltro");

btnFiltro.addEventListener("click", () => {
  btnFiltro.classList.toggle("active");
});