let salida = document.getElementById("salida");

function mostrar(texto){
    salida.innerHTML += texto + "\n";
}

mostrar("========== FIZZBUZZ ==========");

for(let i = 1; i <= 20; i++){

    if(i % 3 === 0 && i % 5 === 0){
        mostrar(i + " = FizzBuzz");
    }
    else if(i % 3 === 0){
        mostrar(i + " = Fizz");
    }
    else if(i % 5 === 0){
        mostrar(i + " = Buzz");
    }
    else{
        mostrar(i);
    }
}

mostrar("\n========== FIBONACCI ==========");

let a = 0;
let b = 1;

for(let i = 0; i < 10; i++){

    mostrar(a);

    let temp = a + b;
    a = b;
    b = temp;
}

function esPrimo(numero){

    if(numero <= 1){
        return false;
    }

    for(let i = 2; i < numero; i++){

        if(numero % i === 0){
            return false;
        }
    }

    return true;
}

mostrar("\n========== NÚMERO PRIMO ==========");

let numero = 17;

if(esPrimo(numero)){
    mostrar(numero + " es primo");
}
else{
    mostrar(numero + " no es primo");
}

mostrar("\n========== TABLA DE MULTIPLICAR ==========");

let tabla = 8;

for(let i = 1; i <= 10; i++){

    mostrar(tabla + " x " + i + " = " + (tabla * i));
}

function contarVocales(texto){

    let contador = 0;
    let vocales = "aeiouAEIOU";

    for(let i = 0; i < texto.length; i++){

        if(vocales.includes(texto[i])){
            contador++;
        }
    }

    return contador;
}

let texto = "Universidad Tomas Frias";

mostrar("\n========== CONTAR VOCALES ==========");

mostrar("Texto: " + texto);
mostrar("Cantidad de vocales: " + contarVocales(texto));


function encontrarMayor(arreglo){

    let mayor = arreglo[0];

    for(let i = 1; i < arreglo.length; i++){

        if(arreglo[i] > mayor){
            mayor = arreglo[i];
        }
    }

    return mayor;
}

let numeros = [12, 45, 7, 89, 23, 100, 5];

mostrar("\n========== NÚMERO MAYOR ==========");

mostrar("Arreglo: " + numeros);
mostrar("Mayor: " + encontrarMayor(numeros));


function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}

let num1 = 20;
let num2 = 5;

mostrar("\n========== CALCULADORA ==========");

mostrar("Suma: " + sumar(num1,num2));
mostrar("Resta: " + restar(num1,num2));
mostrar("Multiplicación: " + multiplicar(num1,num2));
mostrar("División: " + dividir(num1,num2));