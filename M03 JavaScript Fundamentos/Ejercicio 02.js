/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   devolverString = '¡¡HOLA MUNDO!!';
   return devolverString;
}
devolverString();
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   suma = x + y;
   return suma;
}
suma(23, 18);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   resta = x - y;
   return resta;
}
resta(15, 5);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   divide = x / y;
   return divide;
}
divide(182, 15);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   multiplica = x * y;
   return multiplica;
}
multiplica(15, 9);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   obtenerResto = x % y;
   return obtenerResto;
}
obtenerResto(21, 5);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
