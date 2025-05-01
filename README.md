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

# Ejercicio 4 factorial de un numero

Entradas: 
Numero digitado por el usuario

procesos:

Validar que el numero sea positivo y mayor a cero
Calcular el factorial del numero ingresado

salidas:

Mostrar el factorial



# Ejercicio 5: Media de números positivos, negativos, cantidad de ceros de 10 números digitados por el usuario.

Entradas: 10 números digitados por el usuario

Procesos: 1. Por cada número digitado, identificar si es positivo, negarivo o cero. 2. Calcular la media de los números positivos y negativos. 3. Contar la cantidad de veces que se digita el cero.

Salidas: Mostrar la media de los números positivos, la media de los números negativos, y la cantidad de cantidad de ceros.

# Ejercicio 6 tabla de multiplicar

Entradas:

Pedir al usuario que ingrese un numero

Procesos:
 Validar que el numero esté dentro del rango de 0 a 10
 Calcular la tabla de multiplicar del numero ingresado en un bucle for

 Salidas:
 Mostrar resultado en pantalla


# Ejercicio 7 Empresa de desinfectantes

El programa pide al usuario los datos de 5 facturas. En cada una se debe ingresar:

El código del artículo (un número que identifica el producto).

La cantidad de litros vendidos.

El precio por litro.

Estos datos se repiten para cada una de las 5 facturas.


procesos:

Se calcula cuánto se vendió en total en cada factura, multiplicando los litros por el precio por litro.

Se suma ese valor a un total general, que es el dinero total facturado.

Si el código del artículo es 1, suma los litros de esa factura a un contador para ese producto.

Si la factura vale más de $600, aumenta un contador que guarda cuántas facturas fueron grandes.

Se repite todo esto hasta completar las 5 facturas.

Salidas:
el programa muestra mediante un window.alert

Cuánto dinero se facturó en total.

Cuántos litros se vendieron del artículo número 1.

Cuántas facturas fueron mayores a $600.


# Ejercicio 8: Pedir N números, introducir N sueldos y mostrar el máximo.

Entradas: 1. Solicitar un número que será la cantidad de veces que se digita un sueldo. 2. Con base al número anterior, pedir los sueldos.

Procesos: 1. Guardar el número que será la cantidad de veces que el programa pedirá los sueldos. 2. Guardar los sueldos. 3. De los sueldos calcular cuál es el máximo.

Salidas: Mostrar el suledo máximo.

# Ejercicio 9: Contador de 00000 a 99999, sustituyendo 3 por E, y mostrarlo con formato (X-X-X-X-X)

Entradas: No se solicitan

Procesos: 1. Bucle con números desde el 0 hasta el 99999. 2. Por cada número reemplazar 3 por E y asignar formato de 5 digitos (X-X-X-X-X)

Salidas: Mostrar el número con el formato (X-X-X-X-X)