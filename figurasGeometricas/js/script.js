// Código del Cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd();

// Código del Tríangulo
console.group("Triangulos");

function perimetroTriangulo(ladoA, ladoB, base) {
    return ladoA + ladoB + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}


console.groupEnd();

// Código del Círculos
console.group("Círculos");

// Diametro
function diametroCirculo (radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
    return diametro * PI;
} 

// Área
function areaCirculo (radio) {
    return (radio * radio) * PI
}

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}