

//KATA 1: Muestre un “¡Hola Mundo!” por consola

/*function mostrarSaludo (){
    console.log("Hola mundo");
}*/

/*mostrarSaludo();*/

//KATA 2: Lea tu nombre y devuelva un “¡Hola tuNombre!”

/*function leerNombre(){
    let nombre= "Claudia";
    console.log("hola " + nombre)
}
leerNombre();*/

//KATA 3 Lea un número y devuelva el doble

/*function readNumber (){
    let numero= 10;
    return console.log(numero * 2);
}
readNumber();*/

// KATA 4 : Lea un número y devuelva la mitad

/*function readNumber (){
    let numero= 10;
    return console.log(numero / 2);
}
readNumber();*/

// KATA 5 : Lea dos números y devuelva el mayor

/*function returnMaxNum(){
    let numero1  = 10;
    let numero2 = 25;
    if (numero1 >= numero2){
        return console.log("El numero mayor es: " + numero1)
    }
    else{
        console.log("El mayor es: " + numero2)
    }
}
returnMaxNum();*/

//KATA 6 : Lea tres números y devuelva el mayor.

/*function maxValue () {
    let numero1 = 21;
    let numero2 = 3;
    let numero3 = 5;

    let resultado;

    if(numero1 < numero2){
        resultado = numero2;
    }else{
        resultado = numero1;
    }

    if(numero3 > resultado ){
        resultado = numero3;
    }

     return resultado;
}
console.log(maxValue());*/

//KATA 7 : Lea dos números e indique si son iguales.

/*function compareNumebers () {

    let numero1 = 15;
    let numero2 = 23;
     
    if(numero1 !== numero2){
        return (`los numeros ${numero1} y ${numero2} NO son iguales`)
    }else{
        return (`los numeros ${numero1} y ${numero2} son iguales`)
    }
}

console.log(compareNumebers());*/

//KATA 8 : Lea dos nombres e indique si son iguales.

/*function compareNames () {
    let nombre1 = "Yamila";
    let nombre2 = "Soledad"

    if( nombre1 != nombre2){

    }
}*/

//Devolver cuantas veces se repite "rojo"
/*function numeroDeVecesRojo () {

    let colores = ["rojo","verde","rojo","azul","negro","rojo","blanco"];
    let contador = 0;

    for (let i= 0; i< colores.length; i++){
        console.log(colores[i])
        if (colores[i] === "rojo") {
            contador++;
        }
    }
    console.log("Número de veces que aparece 'rojo': " + contador);
}
numeroDeVecesRojo()*/

//KATA 9 : Lea dos nombres e indique si son iguales.

/*function readName () {
    let name1 = prompt("Nombre 1");
    let name2 = prompt("nombre 2");

    if( name1 !== name2){
        console.log("Los nombres no son iguales")
    }else{
        console.log("Los nombres son iguales")
    }
}
readName();*/

// KATA 10 : Lea dos números y devuelva “Verdadero” si los dos son positivos o los dos son
//  negativos. En caso contrario, que devuelva “Falso”.

/*function positiveOrnegativeNumber () {
    let entrada1 = prompt("Por favor, ingresa un número:");
    let numero1 = Number(entrada1);

    let entrada2 = prompt("Por favor, ingresa OTRO un número:");
    let numero2 = Number(entrada2);

    if((numero1 > 0  && numero2 > 0) || (numero1 < 0 && numero2 < 0)){
        return `Verdadero, el numero ${numero1} y el ${numero2} son positivos o negativos.`;
    }else {
        return `Falso, el numero ${numero1} y el ${numero2} contienen numeros negativos y positivos.`
    }

}
console.log(positiveOrnegativeNumber())*/

//KATA 11 : Lea dos números y devuelva “Verdadero” si uno es negativo y el otro positivo. En
//caso contrario, que devuelva “Falso”.

function positiveAndNegativeNumber (a,b) {
    let entrada1 = prompt("Por favor, ingresa un número:");
    let numero1 = Number(entrada1);

    let entrada2 = prompt("Por favor, ingresa OTRO un número:");
    let numero2 = Number(entrada2);

    if((numero1 > 0  && numero2  < 0) || (numero1 < 0 && numero2 > 0)){
        return "Verdadero";
    }else {
        return `Falso`
    }

}

console.log(positiveAndNegativeNumber(14,-2));