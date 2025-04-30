// Realizar un juego para adivinar un número. Para ello pedir un número N, y luego ir pidiendo números indicando “mayor” o “menor” según sea mayor o menor con respecto a N. El proceso termina cuando el usuario acierta.

function juegoAdivinarNumero() {
  // Generar un número aleatorio entre 1 y 100
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intentos = 0;
  let adivinado = false;
  let mensaje =
    "¡Bienvenido al juego de adivinar el número!\n\n" +
    "He pensado un número entre 1 y 100.\n";

  // Bucle principal del juego
  while (!adivinado) {
    // Pedir un número al usuario
    const intento = parseInt(prompt(mensaje + "Intenta adivinar el número:"));
    intentos++;

    // Verificar si es un número válido
    if (isNaN(intento)) {
      mensaje = "Por favor, introduce un número válido.\n\n";
      continue;
    }

    // Comparar con el número secreto
    if (intento === numeroSecreto) {
      adivinado = true;
      alert(
        `¡Felicidades! Has adivinado el número ${numeroSecreto} en ${intentos} intentos.`
      );
    } else if (intento < numeroSecreto) {
      mensaje = `El número ${intento} es MENOR que el número secreto.\n\n`;
    } else {
      mensaje = `El número ${intento} es MAYOR que el número secreto.\n\n`;
    }
  }
}

// Ejecutar el juego
juegoAdivinarNumero();
