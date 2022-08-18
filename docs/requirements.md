# Calculadora - Documento de requisitos

## Resumen

Desarrollar un programa que emule una calculadora básica, con 7 tipos de operaciones y cuya entrada y salida sea la consola donde se ejecute el programa.

El funcionamiento será similar a una terminal REPL(Read Eval Print Loop), donde el programa nos solicita una operación, nosotros introducimos la entrada y el programa nos da una respuesta. Acto seguido, repite el mismo ciclo hasta que decidamos parar la ejecución del programa.

El objetivo de esta práctica es doble, por un lado utilizar algunas de las utilidades que nos da Node y que hemos visto a lo largo de la sección, y por otro lado empezar a practicar con la lógica de programación.

## Definición de entidades

- Operación: Conjunto de operandos y operador que proporcionan un resultado.
  - Sólo admite un operador por operación
  - Sólo admite uno o dos operandos en función del operador.
- Operando: Elemento numérico sobre el cual se aplica el operador.
  - Deben ser números racionales positivos definidos en formato decimal.
  - Los decimales de los operandos se separarán con .(punto) o ,(coma) siendo ambos válidos.
  - Si el operando tiene un separador debe tener al menos un decimal (3, -> 3,0 || 3).
  - No pueden tener separador de miles. (1.000.000,43 -> 1000000,43)
- Operador: Define el tipo de operación a realizar sobre los operandos.
  El conjunto de operadores válidos es:
  - Suma: +
  - Resta: -
  - Multiplicación: \*
  - División: /
  - Logaritmo en base 10: log()
  - Raiz cuadrada: sqrt()
  - Potencia: ^

## Requisitos funcionales

- El usuario podrá introducir una entrada de texto en la terminal del programa.
- El programa debe validar que esa entrada sea una operación válida.
  - Si la entrada no es una operación válida, el programa debe mostrar por pantalla el mensaje ENTRADA NO VÁLIDA.
- El programa sólo admitirá una operación por entrada, no se admitirán anidaciones con paréntesis.
- El programa devolverá por la terminal el resultado de la operación.
  - El resultado debe proporcionar un máximo de 5 decimales con redondeo.
  - Si el resultado de la operación es un valor infinito (1/0), o no válido (0/0, sqrt(-2)), el programa debe mostrar por pantalla el mensaje OPERACIÓN NO VÁLIDA
- El programa debe continuar solicitando operaciones mientras no se finalice su ejecución.
- El programa puede finalizarse de dos formas:
  - Cerrando el proceso (Ctrl+C o de forma externa)
  - Introduciendo la palabra 'exit' como entrada

## Requisitos no funcionales

- La aplicación deberá poderse ejecutar con la versión LTS de Node.JS(16)
- No se permite el uso de librerías/dependencias de terceros exceptuando las que vienen instaladas en la plantilla.

## Requisitos adicionales

- Ampliar operandos válidos a números negativos.
