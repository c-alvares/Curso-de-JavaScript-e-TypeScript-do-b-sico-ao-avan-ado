// Escreva uma função que receba dois números e retorne o maior deles
let maiorNumero;

function numeroMaior (num1, num2) {
    num1 > num2 ? maiorNumero = num1 : maiorNumero = num2;
    return maiorNumero
}

console.log(numeroMaior(90, 41));
// CORREÇÃO
// primeira forma
function max1 (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
const maior = max1(1, 2);
console.log(maior);

// segunda forma
function max2 (x, y) {
    if (x > y) return x;
    return y;
}
console.log(max2(1,2));

// terceira forma
function max3 (x, y) {
    return x > y ? x : y;
}
console.log(max3(12,6));

// quarta forma
const max4 = (x, y) => { // Arrowfunction
    return x > y ? x : y;
}
console.log(max4(33, 124));

// quinta forma
const max5 = (x, y) =>  x > y ? x : y; // o return fica implícito
console.log(max5(46, 16));