/** @format */

// 1. Variables
var nombre = "Gonzalo"; // Variable global
let edad = 25; // Variable local
const ciudad = "Lima"; // Constante

// 2. Tipos de Datos
let numero = 42; // Número
let texto = "Hola, mundo"; // String
let esVerdadero = true; // Boolean
let objeto = { clave: "valor" }; // Objeto
let arreglo = [1, 2, 3]; // Array
let nulo = null; // Null
let indefinido; // Undefined

// 3. Operadores Aritméticos
let suma = 5 + 3;
let resta = 5 - 3;
let multiplicacion = 5 * 3;
let division = 5 / 3;

// 4. Estructuras de Control
if (edad >= 18) {
  console.log("Eres adulto.");
} else {
  console.log("Eres menor de edad.");
}

switch (ciudad) {
  case "Lima":
    console.log("Estás en Lima.");
    break;
  case "Arequipa":
    console.log("Estás en Arequipa.");
    break;
  default:
    console.log("No estás en Perú.");
}

// 5. Funciones
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Gonzalo")); // Llamada a la función

const sumar = function (a, b) {
  return a + b;
};
console.log(sumar(5, 3)); // Llamada a la función

const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3)); // Llamada a la función

// 6. Arrays
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // manzana
frutas.push("uva"); // Agregar elemento
frutas.forEach((fruta) => {
  console.log(fruta);
});

// 7. Objetos
let persona = {
  nombre: "Gonzalo",
  edad: 25,
  ciudad: "Lima",
  saludar: function () {
    return `Hola, soy ${this.nombre}.`;
  },
};
console.log(persona.nombre); // Gonzalo
console.log(persona.saludar()); // Hola, soy Gonzalo.

// 8. Manipulación del DOM
document.body.innerHTML += `<div id="miElemento">Contenido original</div>`;
document.getElementById("miElemento").innerText = "Nuevo contenido"; // Cambiar contenido
document.body.innerHTML += `<button id="miBoton">Haz clic aquí</button>`;
document.getElementById("miBoton").addEventListener("click", function () {
  alert("¡Botón clickeado!");
});

// 9. Promesas
let promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Operación fallida");
  }
});

promesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });

// 10. Módulos (Ejemplo)
const PI = 3.14;
function calcularArea(radio) {
  return PI * radio * radio;
}
console.log(`Área: ${calcularArea(5)}`);
