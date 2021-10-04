// //1) Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

// (function () {
//     let edad = parseInt(prompt("Ingrese su edad"))
//     alert(edad * 7)
// })();

//2 Crear una función que reciba un nombre y devuelva un saludo.

// (function () {
//     let nombre = prompt("Ingrese su nombre")
//     alert("Hola" + " " + nombre)
// })();

//3 Crear una función que salude.

// function saludo(nombre){
//     alert("Hola " + nombre)
// }

// saludo(prompt("Ingrese su nombre"))

//4 Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).


// function convertido(temperatura) {
//    let celsius = window.confirm("Tu temperatura fue Celsius?")
//     if(celsius === true){
//         let temperaturaConvertida = temperatura + 32;
//         alert("Tu temperatura de " + temperatura + " grados Celsius, equivale a " + temperaturaConvertida + " grados Farenheit" )
//     }
//     else{
//         let temperaturaConvertida = temperatura - 32;
//         alert("Tu temperatura de " + temperatura + " grados Farenheit, equivale a " + temperaturaConvertida + " grados Celsius" )
//     }
// }   
// convertido(parseInt(prompt("Ingrese una temperatura")))

// 5) Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
// 6 → 6! = 720
// 4 → |4| = 4
// -8 → |-8| = 8
// 50 → 100
// 11 → 22

function cuenta (numero) {
    if (numero >=5 && numero <=10){
        numero+=1
        var multiplicacion=1;
        for(n=1;n<numero;n++){
        multiplicacion*=n;
         }
         alert(multiplicacion)
    }
    else{

    }
    
}
do{

cuenta(parseInt(prompt("Ingrese un numero")));

}while(numero >=5 && numero <=10)
