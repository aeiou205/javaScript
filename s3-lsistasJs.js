//crear un array
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
let alumno = ["daniel","suarez","nava"]

console.log(alumno.length)

// Acceder a un elmento de array mediante su indice

let apellido = alumno[1]
let segundoApellido = alumno[alumno.length -1]
console.log(apellido,segundoApellido)

// //Recorrer un Array
alumno.forEach(function(daniel,alumno ){
     console.log(daniel,alumno+1);
})

//Añadir un elemento al final de un array
let  nuevaLongitud = alumno.push('ICO')
alumno.forEach(function(daniel,alumno ){
    console.log(daniel,alumno+1);
})

//Elimar el ultimo elemento de un array
let ultimo = alumno.pop()
alumno.forEach(function(daniel,alumno ){
    console.log(daniel,alumno+1);
})

//Añadir un elemento al principio de un Array
let nuevalongitud = alumno.unshift('alumno:')
alumno.forEach(function(daniel,alumno ){
    console.log(daniel,alumno+1);
})
//Encontrar el índice de un elemento del Arra
alumno.push('nava')
let pos = alumno.indexOf('daniel')

alumno.forEach(function(daniel,alumno ){
    console.log(daniel,alumno+1);
})

//Eliminar un único elemento mediante su posición
let elementoEliminado = alumno.splice(1, 1)
alumno.forEach(function(daniel,alumno ){
    console.log(daniel,alumno+1);
})

//Eliminar varios elemntos a partir de una posicion
//con splice() no solo se puede eliminar elementos del array, si no que tambien
//podemos extraerlos guardando en un nuevo array,
//con esto se modifica el origen del array

let carreras = ['ico','sistemas','indusrtrial']
console.log(carreras)

let posi = 1, numElementos = 2
let elementosElimandos = carreras.splice(posi, numElementos)
console.log(carreras)

//copiar un array

let alumno2 = alumno.slice();
console.log(alumno2)
let posi2 = 1,numElemntos= 3
let eliminarElemnts = alumno2.splice(posi2,numElemntos)
console.log(alumno2)
let alumno3 = alumno.slice();

//Acceso a elemntos de un array
//0 a length-1
//con stringno se puede
console.log(alumno3[0])
alumno.forEach(function(daniel,alumno ){
    console.log(alumno3[alumno+1]);
})



