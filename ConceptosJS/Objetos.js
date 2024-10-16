/** @format */
/*<!-- lo que tenemos aca es un array de obejetos>*/
// const persona = [
//   {
//     id: 1,
//     nombre: "gonzalo",
//     apellido: "lozano",
//     Number: 7,
//   },
//   {
//     id: 2,
//     nombre: "Ivan",
//     apellido: "Drago",
//     Number: 4,
//   },
// ];
/*<!-- para acceder a un array de objetos primero tengo que ubicar la posicion del objeto y luego a la 
propiedad del obejeto en este caso nombre >*/
// document.write(persona[1].nombre);

/*<!- al ser una tarea repetitiva podemos optimizar el proceso usando una funcion->*/
function Addperson(id, nombre, apellido, Number) {
  return {
    id: id,
    nombre: nombre,
    apellido: apellido,
    Number: Number,
  };
}
let Addperson_2 = Addperson(3, "Tony", "Kroos", 0);
let Addperson_3 = Addperson(4, "Thomas", "Muller", 21);
let Addperson_4 = Addperson(5, "Mario", "Balotelli", 9);
let Addperson_5 = Addperson(6, "Jude", "Bellingan", 5);

const persona_guardadas = [Addperson_2, Addperson_3, Addperson_4, Addperson_5];
console.log(persona_guardadas);
