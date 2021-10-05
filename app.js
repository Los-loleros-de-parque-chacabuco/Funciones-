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

// function cuenta(numero) {
//     if (numero >= 5 && numero <= 10) {
//         numero += 1;
//         var multiplicacion = 1;
//         for (n = 1; n < numero; n++) {
//             multiplicacion *= n;
//         }
//         alert(multiplicacion);
//     } else if (4 >= numero) {
//         if (numero > 0) {
//             alert(numero);
//         } else alert(numero * -1);
//     } else if (numero >= 11) {
//         alert(numero * 2);
//     }
// }
// cuenta(parseInt(prompt("Ingrese un numero")));

//6) Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 
// // (Ejercicio: Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).)

// var edad = parseInt(prompt("ingrese su edad"))
// var pedido = prompt("ingrese el numero de la bebida que desee tomar ")
// var precio = 0
// switch (pedido) {
//     case "jugo":

//         alert("vale $70")
//         precio = 70
//         break;

//     case "agua":

//         alert("vale $50")
//         precio = 50
//         break;

//     case "cerveza":
//         function compra(x, y) {
//             if (x < 18 && y == "cerveza") {
//                 alert("disculpa sos menor de edad no podes consumir alcohol")
            

//             } else {
//                 alert("vale $100")
//                 precio = 100
//             }
//         }
//         compra(edad, pedido)
//         break;

//     default:
//         alert("gracias, vuelva pronto")
//         break;
// }
// var pagar = parseInt(prompt("¿Con cuanto quiere pagar?"))
// function cobrar(a, j) {
//     if (a > j) {
//         alert(a - j + " este es tu vuelto")
//     } else { alert("Disculpa te falta plata") }
// }
// cobrar(pagar, precio)

// 7) Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.
do{
var horas= parseInt(prompt("¿Cuantas horas quieres ingresar?"))
var minutos= parseInt(prompt("¿Cuantas minutos quieres ingresar?"))
var segundos= parseInt(prompt("¿Cuantas segundo quieres ingresar?"))
}while(horas<0 && segundos<0 && minutos<0)



