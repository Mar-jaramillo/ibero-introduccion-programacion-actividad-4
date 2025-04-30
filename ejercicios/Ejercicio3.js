// Programa que calcula el producto de los 10 primeros números impares

function calcularProductoImpares() {
  // Inicialización de variables
  let producto = 1;
  let contador = 0;
  let numeroActual = 1;
  let numerosUsados = [];

  // Bucle para encontrar y multiplicar los 10 primeros números impares
  while (contador < 10) {
    // Si el número es impar
    if (numeroActual % 2 !== 0) {
      // Multiplicar por el producto acumulado
      producto *= numeroActual;
      // Guardar el número para mostrarlo después
      numerosUsados.push(numeroActual);
      // Incrementar el contador de impares encontrados
      contador++;
    }
    // Pasar al siguiente número
    numeroActual++;
  }

  // Mostrar los números usados y el resultado
  const mensaje =
    `Los 10 primeros números impares son: ${numerosUsados.join(", ")}\n\n` +
    `El producto de estos números es: ${producto.toLocaleString()}`;

  // Mostrar el resultado
  alert(mensaje);

  return {
    numerosImpares: numerosUsados,
    resultado: producto,
  };
}

// Ejecución del programa
calcularProductoImpares();
