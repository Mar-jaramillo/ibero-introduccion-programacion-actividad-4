//  Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.

function calcularCuadrados() {
  let numero;
  let mensaje = "";

  do {
    // Leer el número del usuario (incluyendo el mensaje de resultado anterior si existe)
    numero = parseFloat(
      prompt(mensaje + "Introduce un número (negativo para terminar):")
    );

    // Resetear el mensaje para la próxima iteración
    mensaje = "";

    // Verificar si el número es negativo
    if (numero < 0) {
      alert("Número negativo introducido. Programa terminado.");
      break;
    }

    // Verificar si es un número válido
    if (isNaN(numero)) {
      mensaje = "Por favor introduce un número válido.\n\n";
      continue;
    }

    // Calcular el cuadrado
    const cuadrado = numero * numero;

    // Mostrar el resultado y preparar el mensaje para la próxima iteración
    mensaje = `El cuadrado de ${numero} es: ${cuadrado}\n\n`;
  } while (true); // El bucle se ejecutará hasta que se introduzca un número negativo
}

// Ejecutar la función
calcularCuadrados();
