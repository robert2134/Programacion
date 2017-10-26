  // pide un numero
  var numero = prompt("Introduce un numero entre el 1 y el 100");

  // muestra numero entero
   numero=parseInt(numero);

// comrueba que esta dentro limite
    while ((numero > 100) || (numero != numero )){
        alert("vuelve a introducirlo");
        numero=prompt("Introduce un numero entre el 1 y el 100");
        numero=parseInt(numero);
       }
      console.log(("La tabla del ")+numero);

//tabla de multiplicar
    for (var cont=1; cont<=10; cont++) {
    console.log(numero + " x " + cont + " = " + cont * numero);
     }
