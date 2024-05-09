// Fizz Buzz
// Escreva uma função que receba um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número= Retorna o próprio número
// Use a função com números de 0 a 100

const fizzBuzz = (numero) => {
    // const numero = Math.floor((Math.random() * 10))
    // console.log (numero)
    let resultado
    
    if (Number.isNaN(numero)) return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return resultado = 'FizzBuzz';
    if (numero % 3 === 0) return resultado = 'Fizz';
    if (numero % 5 === 0) return resultado = 'Buzz';
    if (numero % 3 !== 0 && numero % 5 !== 0) return numero;
};

console.log(fizzBuzz(55));

// Correção

function fizzBuzz2(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    
    return numero
}

console.log('a', fizzBuzz2('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz2(i));
}