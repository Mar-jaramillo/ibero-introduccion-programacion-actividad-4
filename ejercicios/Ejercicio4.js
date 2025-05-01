let numero = parseInt(prompt("Ingresa un número entero positivo para calcular su factorial:")); 

if (isNaN(numero) || numero < 0) {
  alert("Entrada inválida. Debes ingresar un número entero positivo (mayor o igual a 0).");
} else {
  let factorial = 1;
  let operacion = "";

  for (let i = numero; i >= 1; i--) {
    factorial *= i;
    operacion += (i !== 1) ? `${i} x ` : `${i}`;
  }

  alert(`El factorial de ${numero} es:\n${operacion} = ${factorial}`);
}