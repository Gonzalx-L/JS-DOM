/** @format */

const btn = document.getElementById("Calcular");

function cualEsMayor() {
  const numero_1 = Number(document.getElementById("numero_1").value);
  const numero_2 = Number(document.getElementById("numero_2").value);
  resultado.textContent = "";
  if (numero_1 > numero_2) {
    resultado.textContent = "El número 1 es mayor.";
  } else if (numero_1 < numero_2) {
    resultado.textContent = "El número 2 es mayor.";
  }
  if (numero_1 === numero_2) {
    resultado.textContent = "Los números son iguales.";
  }
}

function multiplicacion() {
  const numero_1 = Number(document.getElementById("numero_1").value);
  const numero_2 = Number(document.getElementById("numero_2").value);
  const resM = numero_1 * numero_2;
  resultado.textContent = "";
  if (numero_1 && numero_2 > 0) {
    resultadoMultiplicacion.textContent = "los numeros son positivos" + resM;
  }
  if (numero_1 && numero_2 < 0) {
    resultadoMultiplicacion.textContent = "los numeros son negativos" + resM;
  }
}
btn.addEventListener("click", cualEsMayor());
btn.addEventListener("click", multiplicacion());
