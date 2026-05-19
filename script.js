// ==========================================
// 4) FizzBuzz
// ==========================================

let numero = parseInt(prompt("Ingrese un número para FizzBuzz:"));

for (let i = 1; i <= numero; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


// ==========================================
// 5) Serie Fibonacci
// ==========================================

let n = parseInt(prompt("Ingrese la cantidad de números Fibonacci:"));

let a = 0;
let b = 1;

console.log("Serie Fibonacci:");

for (let i = 0; i < n; i++) {
    console.log(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;
}


// ==========================================
// 6) Número Primo
// ==========================================

function esPrimo(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let primo = parseInt(prompt("Ingrese un número para verificar si es primo:"));

if (esPrimo(primo)) {
    console.log(primo + " es un número primo");
}
else {
    console.log(primo + " no es un número primo");
}


// ==========================================
// 7) Tabla de Multiplicar
// ==========================================

let tabla = parseInt(prompt("Ingrese un número para mostrar su tabla:"));

console.log("Tabla de multiplicar del " + tabla);

for (let i = 1; i <= 10; i++) {
    console.log(tabla + " x " + i + " = " + (tabla * i));
}


// ==========================================
// 8) Contar Vocales
// ==========================================

function contarVocales(texto) {

    let contador = 0;
    let vocales = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {

        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
}

let cadena = prompt("Ingrese una cadena de texto:");

console.log("Cantidad de vocales: " + contarVocales(cadena));


// ==========================================
// 9) Número Mayor de un Arreglo
// ==========================================

function numeroMayor(arreglo) {

    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {

        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    return mayor;
}

let numeros = [10, 5, 25, 8, 40, 12];

console.log("El número mayor es: " + numeroMayor(numeros));


// ==========================================
// 10) Calculadora
// ==========================================

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let operacion = prompt("Ingrese la operación: + , - , * , /");

let resultado;

if (operacion === "+") {
    resultado = sumar(num1, num2);
}
else if (operacion === "-") {
    resultado = restar(num1, num2);
}
else if (operacion === "*") {
    resultado = multiplicar(num1, num2);
}
else if (operacion === "/") {
    resultado = dividir(num1, num2);
}
else {
    resultado = "Operación inválida";
}

console.log("Resultado: " + resultado);