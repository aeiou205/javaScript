//Tipos de datos y estrcuturas en javaScript

//Tipado dinamico

let foo = 42; //foo ahora es un numero
console.log(foo)
foo = 'bar'; //foo ahora es un string
console.log(foo)
foo = 'true'; //foo ahora es un booleano
console.log(foo)

//Estrcuturas y tipos de datos
//El ultimo estandar ECMASscript define nuevo tipos:
//seis tipos de datos primitivos, controlados por el "operador_typeof"

Undefined: typeof instance === "undefined"
Boolean: typeof instance === "boolean"
Number: typeof instance === "number"
String: typeof instance === "string"
BigInt: typeof instance === "bigint"
Symbol: typeof instance === "symbol"

Null: typeof instance === "object". Tipo primitivo especial que tiene 
un uso adicional para su valor: si el objeto no se hereda, se muestra null;

Object: typeof instance === "object". Tipo estructural especial que 
no es de datos pero para cualquier instancia de objeto construido que 
también se utiliza como estructuras de datos: new Object, new Array, 
new Map, new Set, new WeakMap, new WeakSet, new Date y casi todo 
lo hecho con la palabra clave new;

Function: una estructura sin datos, aunque también responde al operador 
typeof: typeof instance === "function". Esta simplemente es una 
forma abreviada para funciones, aunque cada constructor de funciones se 
deriva del constructor Object.

tener en cuenta que para saber el tipo de dato es necesario usar el tipeof para 
verificar el tipo de dato

la forma correcta de saber que objeto estamos usando es usar la plabra reservada instanceof



//Valores primitivos-----------------------------------------------------------------------
todos los tipos, excepto los objetos, definen valores inmutables (es decodeURI, valores
    qie no se pueden cambiar).Por ejemplo (y a diferencia de C), las cadenas son 
    inmutables.Nos referimos a los valores de estos tipos como "valores primitivos"


tipo Boolean da como resultado true o false

tipo null es igual a un valor null o 0

tipo undefined una variable que ha sido asignado a un valor tiene un valor undefined
-----------------------------------------------------------------------------------------
tipo Number 
El tipo es para numeros grandes de 2 a la 53 -1 que representan decimales 
representan NAN(no es un numero) -infiity +infinityu (el valor mas chico y grande)

tambien podemos comprobar su un numero esta en el rango de numeros de punto flotante
de doble precision mediante umber.isSfeInteger()
a si como Number. Max SAFE_INTEGER y Number .Min Safe INteger
------------------------------------------------------------------------------------------------
Begint es un primitivo numerico en javaScript que puede respresentar 
numeros enteros con precision arbitraria 

Un BiginT se crea agreando n al final de un numero entero o llamdo al constructor

const x = 2n ** 53n;
9007199254740992n
const y = x + 1n;
9007199254740993n

podemos hacer operaciones aritmeticas basicas con begint +*-/
Un BigInt se comporta como un Number en los casos en que se convierte a Boolean:}
if, ||, &&, Boolean, !.
Los BigInt no se pueden utilizar indistintamente con los Number. En su lugar, se lanzará 
un TypeError.

Tipo String-----------------------------------------------------------------------
las cadenas de JavaScript son inmutables
Una subcadena de la original seleccionando letras individuales o usando String.substr().
Una concatenación de dos cadenas usando el operador de concatenación (+) o String.concat()

Las cadenas son el denominador común de muchas APIs (campos de entrada 
    —inputs—, valores de almacenamiento local, respuestas XMLHttpRequest cuando 
    se usa responseText, etc.) y puede resultar tentador trabajar solo con cadenas.

    Una subcadena de la original seleccionando letras individuales o usando 
    String.substr().

    Una concatenación de dos cadenas usando el operador de concatenación (+) o 
    String.concat().

Tipo Symbol
    Un símbolo es un valor primitivo único e inmutable y se puede utilizar como
    clave de una propiedad de objeto (ve más abajo). En algunos lenguajes de
    programación, los símbolos se denominan "átomos".

    En ciencias de la computación, un objeto es un valor en la memoria al 
    que posiblemente hace referencia un identificador.

Propiedades
    En JavaScript, los objetos se pueden ver como una colección de propiedades.
    Con la sintaxis de objeto literal (en-US), se inicia un conjunto limitado 
    de propiedades; luego se pueden agregar y eliminar propiedades 

    Hay dos tipos de propiedades de objeto que tienen ciertos atributos: la 
    propiedad data y la propiedad accessor.











