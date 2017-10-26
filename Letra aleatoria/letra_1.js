
var num_min=97;
var num_max=122;

// numero aleatorio
num_ale = Math.random() * (num_max - num_min) + num_min;

// asignamos a la variable solo numeros enteros(sin decimales)
num_ale = Math.round (num_ale);
// transforma el numero en letra
letra_ale =String.fromCharCode(num_ale);

 // alert(letra_ale);

 var n = 1;
  while (n < 6) {
    alert("Intento número "+ n);
   var respuesta = prompt(" Introduce una letra ");
        n++;
     if (letra_ale != respuesta) {
       alert("No has acertado,intentalo de nuevo!");
     }
     if (letra_ale == respuesta) {
       alert("Has acertado,felicidadees!");
        break;
     }
 }
      alert(" ************* F I N ****************")


/*

var num_min=97;
var num_max=122;

// numero aleatorio
num_ale = Math.random() * (num_max - num_min) + num_min;

// asignamos a la variable solo numeros enteros(sin decimales)
num_ale = Math.round (num_ale);
// transforma el numero en letra
letra_ale =String.fromCharCode(num_ale);

//  alert(letra_ale);

var n = 1;
 while (n < 6) {
   alert("Intento número "+ n);
  var numero = prompt("Introduce un numero desde el 97 al 122");
   numero=parseInt(numero);
    n++;
  if ((numero < 96) || (numero > 123)) {
   alert ("vuelve a introducirlo");
    }
  if (numero != numero) {
    alert("Introducelo bien MELON");
    }
  if (numero == num_ale) {
    alert("Enhorabuena la letra es + letra_ale");
   break;
    }
 }
    alert(" ************* F I N ****************")
*/
