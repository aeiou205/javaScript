// Un script consiste en una lista de enunciadios que se van ejecutando a medida que se cargan.


//if else
let numero = 10
if (numero >=10){
    console.log("Buenas, que tal, acabas de hacer un if ")
}
else {
    console.log("que tal parece que caiste en un mayor a 10")
}

//if anadidados
numero = numero+10
if (numero<10){
    console.log("El numero esta en un rango de 10");
}else if (numero>10 && numero <=20){
    console.log("Su numero esta en un rango de 10-20");
}else {
    console.log("su numero es mayor a 20");
}

//switch
switch (numero){
    case 10:
        console.log("numero es 10");
        break;
    case 20:
        console.log("numero es 20");
        break;
        
    case 30:
        console.log("numero es 30");
        break;
    default:
        break;
}

//condicion verdadera o falsa
// condicion return si o no
let isMember = 1;
if (isMember==1){
console.log("La cuaota es de: "+(isMember ? "$2.00" : "$10.00"));
}

var stop = false,age = 23;
age >18?(
    console.log("OK, puedes continuar")//,location.assign("continue.html")

):(
    stop = true,
    console.log("Disculpa, eres menor de edad")
);
