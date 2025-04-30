// Programa para solicitar sueldos y encontrar el máximo
// Función para obtener un número válido del digitado por el usuario
function obtenerNumeroValido(mensaje) {
    const valor = parseFloat(prompt(mensaje));
    return !isNaN(valor) && valor > 0 ? valor : null;
}

// Función para solicitar sueldos al usuario y almacenarlos en un array
function obtenerSueldos(cantidad) {
    const sueldos = [];
    
    // Bucle para solicitar los sueldos en base a la cantidad indicada
    for (let i = 1; i <= cantidad; i++) {
        let sueldo;
        do {
            sueldo = obtenerNumeroValido(`Introduce el sueldo #${i}:`);
            if (!sueldo) {
                alert('Por favor, introduce un número válido mayor que 0.');
            }
        } while (!sueldo);
        
        // Almacenar el sueldo en el array
        sueldos.push(sueldo);
    }
    
    return sueldos;
}

// Función principal
function calcularSueldoMaximo() {
    // Solicitar la cantidad de sueldos a digitar
    const cantidadSueldos = obtenerNumeroValido('Introduce la cantidad de sueldos a digitar: ');
    
    if (!cantidadSueldos) {
        alert('Por favor, introduce un número válido mayor que 0.');
        return;
    }
    
    // Obtener los sueldos en base a la cantidad indicada
    const sueldos = obtenerSueldos(cantidadSueldos);

    // Calcular el sueldo máximo
    const sueldoMaximo = Math.max(...sueldos);
    
    alert(`El sueldo máximo es: ${sueldoMaximo}`);
}

// Llamar a la función principal para iniciar el programa
calcularSueldoMaximo();