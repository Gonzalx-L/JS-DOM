/**
 *
 *
 * @format
 */

function Productos(id, nombre, codigo, categoria) {
  /* Este es el constructor para un producto X */
  this.id = id;
  this.nombre = nombre;
  this.codigo = codigo;
  this.categoria = categoria;
}

function agregarProductos(id, nombre, codigo, categoria) {
  let producto = new Productos(id, nombre, codigo, categoria);
  arrayProductos.push(producto);
  /*con el push agrego al final */
}
let arrayProductos = [];

agregarProductos(1, "ps5", 11, "video juego");
agregarProductos(1, "ps5", 11, "video juego");
agregarProductos(1, "ps5", 11, "video juego");
agregarProductos(1, "ps5", 11, "video juego");
agregarProductos(1, "ps5", 11, "video juego");
console.log(arrayProductos);
