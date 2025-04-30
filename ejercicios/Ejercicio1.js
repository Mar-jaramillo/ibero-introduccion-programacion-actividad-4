//  Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.

function calcularCuadrados() {
  let numero;

  do {
    // Leer el número del usuario
    numero = parseFloat(
      prompt("Introduce un número (negativo para terminar):")
    );

    // Verificar si el número es negativo
    if (numero < 0) {
      console.log("Número negativo introducido. Programa terminado.");
      break;
    }

    // Calcular y mostrar el cuadrado
    const cuadrado = numero * numero;
    console.log(`El cuadrado de ${numero} es: ${cuadrado}`);
  } while (true); // El bucle se ejecutará hasta que se introduzca un número negativo
}

// Ejecutar la función
calcularCuadrados();
