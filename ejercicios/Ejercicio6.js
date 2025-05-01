// Solicitamos al usuario que ingrese un número entre 0 y 10
let numeroIngresado = parseInt(prompt("Ingresa un número entre 0 y 10"));

// Verificamos si el valor ingresado no es un número o está fuera del rango
if (isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 10) {
  // Muestra un mensaje de error si el dato no es valido
  alert("Entrada incorrecta. Por favor, ingresa un número del 0 al 10.");
} else {
  // Aqui se inicia una cadena vacía para guardar el texto con la tabla de multiplicar
  let resultadoFinal = "";

  // Bucle para generar las multiplicaciones del 1 al 10
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    // Se hace la multiplicación y se guarda el resultado como una línea de texto.
    resultadoFinal += `${numeroIngresado} x ${multiplicador} = ${numeroIngresado * multiplicador}\n`;
  }

  // Muestramos la tabla completa en una ventana emergente
  alert(`La tabla de multiplicar del ${numeroIngresado} es:\n${resultadoFinal}`);
  }