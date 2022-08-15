let foo = 42;    // foo ahora es un número
foo     = 'bar'; // foo ahora es un string
foo     = true; // foo ahora es un booleano


let nombre;
nombre = prompt("Introduce tu nombre");

let nombre2;
nombre = prompt("Introduce tu nombre");

document.write("Bienvenido/a a mi sitio web, " + nombre);

let nombre3;

nombre = prompt("Introduce tu nombre");

if (nombre != null){
	document.write("Bienvenido/a a mi sitio web, " + nombre + ".");
} else {
	alert("No has introducido nada. Recarga la página para intentarlo de nuevo.");
}

