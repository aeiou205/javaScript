//Operadores de asignacion

// Asignacion 

///https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#asignacion
//seguir revisando el link


// operadores de comparacion
// operadores aritmeticos

//     x = y   //Asignación
//     x = x + y   //Asignación de adición
//     x = x - y   //Asignación de resta
//     x = x * y   //Asignación de multiplicación
//     x = x / y   //Asignación de división
//     x = x % y   //Asignación de residuo
//     x = x ** y  //Asignación de exponenciación
//     x = x << y  //Asignación de desplazamiento a la izquierda
//     x = x >> y  //Asignación de desplazamiento a la derecha
//     x = x >>> y //Asignación de desplazamiento a la derecha sin signo
//     x = x & y   //Asignación AND bit a bit
//     x = x ^ y   //Asignación XOR bit a bit
//     x = x | y   //Asignación OR bit a bit
//     x && (x = y)    //Asignación AND lógico
//     x || (x = y)    //Asignación OR lógico
//     x || (x = y)   //Asignación de anulación lógica   

//     como la mayoria de las expresiones, asignaciones como x = y tiene un valor de 
//     retorno, Se puede recuperar package. ej asignando la expresion o registrandola


//valores de retorno y encademiento-----------------------------------------------
    x = 2
    y = 3
    const z = (x = y); // O de forma equivalente: const z = x 
    console.log(z)
    console.log(x)
    
    x += y
    console.log(x)
    x1 = x **= y
    console.log(x1)

//Desestructuracion---------------------------------------------------------------
    var foo = ['one', 'two', 'three'];
    console.log(foo)

    var one = foo[0];
    console.log(one)

    var two = foo[1];
    console.log(two)

    var therr = foo[2];
    console.log(therr)

    var [one, two, three] = foo; 
    console.log(foo)

//Operadores bit a bit

    var a = 4;
    var b = 1;
    console.log(a & b) //Devuelve un uno en cada posición del bit para los que los bits correspondientes de ambos operandos son unos.
    console.log(a | b) //DEVUELVE 0 EN CADA POSICION BIT 
    console.log(a ^ b) //Devuelve un cero en cada posicion 
    console.log(~ a)   //
    console.log(a << b)
    console.log(a >> b)
    console.log(a >>> b)

    console.log(15 & 9)
    console.log(15 | 9)
    console.log(15 ^ 9)
    console.log(~15)
    console.log(~9)















     

// operadores logicos
    




// operadores de cadena

// operadores condicional 

// operador coma 

// operadores unarios

// operadores relacionales
// //











