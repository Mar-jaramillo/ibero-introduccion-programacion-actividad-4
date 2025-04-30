// Programa que pide 10 números y calcula medias y cantidad de ceros

// Inicializar variables para almacenar resultados
let positivos = [];
let negativos = [];
let cantidadCeros = 0;

// Función para calcular la media de un array
function calcularMedia(numeros) {
    // Comprobar si el array está vacío para evitar división por cero
    if (numeros.length === 0) return 0;
    
    // Usar reduce para sumar los elementos y dividir por la longitud del array
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    return suma / numeros.length;
}

// Pedir 10 números al usuario
for (let i = 1; i <= 10; i++) {
    const numero = parseFloat(prompt(`Introduce el número ${i} de 10:`));
    
    // Comprobar si el número es válido
    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        i--; // Decrementar i para repetir la iteración
    } else if (numero > 0) {  // Si el número es positivo
        positivos.push(numero);
    } else if (numero < 0) { // Si el número es negativo
        negativos.push(numero);
    } else { // Si el número es cero
        cantidadCeros++;
    }
}

// Calcular medias
const mediaPositivos = calcularMedia(positivos);
const mediaNegativos = calcularMedia(negativos);

// Mostrar resultados
// Usar toFixed(2) para limitar a 2 decimales
console.log(`Media de los números positivos: ${mediaPositivos.toFixed(2)}`);
console.log(`Media de los números negativos: ${mediaNegativos.toFixed(2)}`);
console.log(`Cantidad de ceros: ${cantidadCeros}`);