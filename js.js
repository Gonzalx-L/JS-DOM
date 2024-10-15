/** @format */
const btn = document.querySelector("button");
const codigoColor = document.getElementById("codigoColor");
const name_aleatorio = document.getElementById("name_aleatorio");

function color() {
  let code_colors = [
    "#5d6c7e",
    "#FF5733",
    "#93FF57",
    "#2357FF",
    "#F393FF",
    "#33FFF3",
    "#a3FF33",
  ];

  const changeColors =
    code_colors[Math.floor(Math.random() * code_colors.length)];
  document.body.style.background = changeColors;
  name_aleatorio.style.color = changeColors;
}
function changeName() {
  const Nombres = [
    "Juan",
    "María",
    "Pedro",
    "Ana",
    "Luis",
    "Sofía",
    "Carlos",
    "Lucía",
    "Miguel",
    "Elena",
    "Javier",
    "Laura",
    "Andrés",
    "Gabriela",
    "Santiago",
    "Paula",
    "Fernando",
    "Marta",
    "Diego",
    "Camila",
  ];

  const name_random = Nombres[Math.floor(Math.random() * Nombres.length)];

  name_aleatorio.textContent = name_random;
}

btn.addEventListener("click", color);

btn.addEventListener("click", changeName);
