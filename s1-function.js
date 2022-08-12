// create a function with pharameters (function palñabra reservada)
const rectangulo = function(x){
    return x * x;
}
console.log(rectangulo(22));

//-----------------------------------------
//create a function that not return values, single show a text in the function
const hacerSonido = function() {
    console.log('Pling');
}

hacerSonido();
//------------------------------------------
//we create a function where use a for (for( X=1 ; x<3; x++))
const potencia = function(base, exponente){
    let resultado = 1 
    for (let cuenta = 0; cuenta< exponente; cuenta++){
        resultado *=base;
    }
    return resultado;
};
console.log(potencia(2,10)); //podemos imprimir una function vacia desde un console.log
//-------------------------------------------
//vincualaciones y alcances (cada vinculacion tiene un alcance)
//vinculaciones con let y const 
let x = 10
    if (true){
        let y = 20;
        var z = 30;
        console.log(x + y + z);
    }
// como se pude observar marca un error por que no estan definidas 
console.log(x+z);
// y no es visible porque esta fuera del rango
//------------------------------------------
const dividirEnDos = function(numero){
    return numero/2;
};
let numero = 10;
console.log(dividirEnDos(100));
console.log(numero);

//-----------Alcanze anidado------------
//---------
const humus = function(factor){
    const ingrediente = function(cantidad, unidad, nombre){
        let cantidadIngrediente = cantidad * factor;
        if(cantidadIngrediente>1){
            unidad += "s";

        }
        console.log(`${cantidadInredientes} ${unidad} ${nombre}`);
    };
    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.25,"taza","tahini");
    ingrediente(0.25,"taza","jugo de limon");
    ingrediente(2, "cucharada", "aceite de oliva"),
    ingrediente(0.5,"cucharadita","comino");
};
//----funtciones como valores
let lanzarMisiles= function(){
    sistemaDeMisiles.lanzar("ahora");

};

if(modoseguro){
    lanzarMisiles = function(){
      
    };
}

