/** @format */

/* <!--selecciono los elementos -->*/
const formulario = document.querySelector(".form-post");
const btn = document.getElementById("Guardar");
/*<!--creo el array donde se listaran todos los productos-->*/
let listaDeProductos = [];

/*<!-- aqui construyo el producto-->*/
function Producto(id, codigo, nombre, costo) {
  this.id = id;
  this.codigo = codigo;
  this.nombre = nombre;
  this.costo = costo;
}

/*<!- creo la funcion que me permita crear los objetos ademas de añadirlos al array->*/
function agregarProductos(id, codigo, nombre, costo) {
  let producto = new Producto(id, codigo, nombre, costo);
  listaDeProductos.push(producto);
  console.log(listaDeProductos);
}

/*<!--el boton al escuchar el click captuarara los valores de los inputs -->*/
btn.addEventListener("click", function (event) {
  event.preventDefault();

  /*<!--capto los valores de los inputs-->*/
  const id = document.getElementById("id").value;
  const codigo = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const costo = document.getElementById("costo").value;

  /*<!--agreo los productos -->*/
  agregarProductos(id, codigo, nombre, costo);
});
