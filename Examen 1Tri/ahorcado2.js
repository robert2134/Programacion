// Inicializamos
var lista_Array = ['lunes','martes','miercoles','jueves','viernes'];
var lista_rand = Math.floor(Math.random()* lista_Array.length);
var palabra = lista_Array [lista_rand];
var final= true;

// variable temporal de la palabra oculta
var tempReem= [];

 console.log(palabra);

  // reemplaza palabra por "0" el /g: realiza una búsqueda global (todas las ocurrencias)
  var Reem = palabra.replace(/./g,'0');
  //var palabra_array = Reem.split("");
  console.log(Reem);
  //console.log(palabra_array);

  // estructura if para solicitar el numero de intentos

  var intentos = parseInt(prompt("Introduce numero de intentos entre 5 y 10"));
   while ((intentos <= 4) || (intentos >= 11)){
       alert("vuelve a introducirlo");
       intentos=parseInt(prompt("Introduce un numero entre el 5 y el 10"));
    }
     alert("Tienes "+ intentos + " para adivinarlo");

  while(intentos>-1)
  {

         // Pedimos letra a usuario
   letra=prompt("Introduce una letra del abecedario de la a 'a' la 'z' ");
      while(!isNaN(letra)){
      letra=prompt("Introduce una letra del abecedario por favor.");
       console.log(letra);
      }
        // console.log(letra);

   // Inicio recorro una palabra
   var encontrada=false;

   for (var i=0; i<palabra.length +1; i++) {
     if (letra == palabra.charAt(i)) {
       encontrada=true;
       tempReem = tempReem + letra;
     } if (letra=="fin"){
       final=false;
     } else {
       tempReem = tempReem + Reem.charAt(i);
       console.log(tempReem);
     }
   }
   if ((!encontrada) {
     alert("No has acertado....Te quedan " + intentos + " intentos");
     intentos-- ;
     } if (intentos == -1){
       alert("La palabra a adivinar era " + palabra);
     } if(tempReem == palabra ) {
     alert("ole ole y ole!!! y te han sobrado "+ intentos + " intentos");
     break;
   }

   var Reem = tempReem;
   var tempReem =[];
 }
