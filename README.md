# ibero-introduccion-programacion-actividad-4

Repositoro de ejercicios de estructuras de control con Javascript

# Ejercicio 1 - Calcular cuadrado

Entradas:

Números introducidos por el usuario a través de prompt() (en navegador) o readline (en Node.js)
La entrada termina cuando se introduce un número negativo

Procesos:

Solicitar un número al usuario
Convertir la entrada de texto a número (parseFloat)
Verificar si el número es negativo

Si es negativo: terminar el programa
Si no es negativo: continuar al siguiente paso

Calcular el cuadrado del número (multiplicar el número por sí mismo)
Mostrar el resultado
Volver al paso 1 (repetir el ciclo)

Salidas:

Para cada número no negativo: mensaje mostrando el cuadrado calculado

Ejemplo: "El cuadrado de 5 es: 25"

Al introducir un número negativo: mensaje de finalización

"Número negativo introducido. Programa terminado."

# Ejercicio 2 Adivinar el número

Entradas:

Un número aleatorio (N) generado por el programa entre 1 y 100
Números introducidos por el usuario a través de prompt() en cada intento de adivinar
La entrada continúa hasta que el usuario adivina el número correcto

Procesos:

Inicialización:

Generar un número aleatorio N (entre 1 y 100)
Inicializar contador de intentos a 0
Inicializar variable para controlar si se ha adivinado el número

Bucle principal:

Solicitar un número al usuario
Incrementar contador de intentos
Validar que la entrada sea un número válido
Comparar el número introducido con el número secreto N:

Si son iguales: el usuario ha adivinado, terminar el bucle
Si el número es menor que N: indicar "MENOR"
Si el número es mayor que N: indicar "MAYOR"

Repetir el bucle hasta que se adivine el número

Finalización:

Mostrar mensaje final con el número de intentos realizados

Salidas:

Durante el juego:

Para cada intento, un mensaje indicando si el número es "MAYOR" o "MENOR" que el número secreto
Mensajes de error si el usuario introduce un valor no válido

Al finalizar el juego:

Mensaje de felicitación indicando que se ha adivinado el número
Número secreto que había que adivinar
Total de intentos realizados hasta acertar

# Ejercicio 3 Productos de 10 primeros números

Entradas: En este caso no hay entradas del usuario ya que trabajamos con valores predefinidos.
Procesos: Cómo identificar los números impares y cómo calcular su producto.
Salidas: El resultado del producto y la lista de los números utilizados.
Ejemplo de cálculo: Una demostración manual del cálculo con los números 1, 3, 5, 7, 9, 11, 13, 15, 17, 19.
