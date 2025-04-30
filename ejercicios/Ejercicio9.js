// Contador de 5 dígitos que reemplaza el número 3 por 'E'

// Función para formatear el número con ceros a la izquierda y reemplazar 3 por 'E'
// y separar con guiones
function formatearNumero(numero) {
    return numero
        .toString()
        .padStart(5, '0') // Asegura que el número tenga 5 dígitos
        .split('') // Convierte el número en un array de dígitos
        .map(digito => digito === '3' ? 'E' : digito) // Reemplaza '3' por 'E'
        .join('-'); // Une los dígitos con guiones
}

// Función principal para imprimir el contador
function imprimirContador() {
    console.log("Contador con 5 dígitos (X-X-X-X-X):");
    console.log("Números del 0-0-0-0-0 al 9-9-9-9-9, sustituyendo 3 por E");
    console.log("------------------------------------------------");

    // Itera desde 0 hasta 99999
    // y aplica la función formatearNumero a cada número
    for (let i = 0; i <= 99999; i++) {
        console.log(formatearNumero(i));
    }
}

// Llamada a la función para iniciar el programa
imprimirContador();