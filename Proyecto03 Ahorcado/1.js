// Inicializamos
var lista_Array = ['lunes','martes','miercoles','jueves','viernes'];
var lista_rand = Math.floor(Math.random()* lista_Array.length);
var palabra = lista_Array [lista_rand];

var intentos=5;

 //console.log(palabra);

  // reemplaza palabra por "0" el /g: realiza una búsqueda global (todas las ocurrencias)
  var Reem = palabra.replace(/./g,'0');
  var palabra_array = Reem.split("");
  //console.log(Reem);
  //console.log(palabra_array);

  while(intentos>0)
  {         // Pedimos letra a usuario
   letra=prompt("Introduce una letra del abecedario de la a 'a' la 'z' ");
      while(!isNaN(letra)){
       letra=prompt("Introduce una letra del abecedario por favor.");
        console.log(letra);
        }
   // console.log(letra);
   // Inicio recorro una palabra
   var encontrada = false;
   for (var i=0; i<palabra.length; i++)
   {
     if (letra == palabra.charAt(i)) {
       palabra_array[i] = letra;
       encontrada = true;
       //break;
     }
   }

   if(!encontrada)
   {
     //alert("No has acertado");
     console.log("No has acertado");
     intentos-- ;
     console.log("Te quedan " + intentos + " intentos");
   }

   console.log(palabra_array.join(""));

   if(palabra_array.join("") == palabra )
   {
     console.log("Bien !!!");
     break;
   }
 }
