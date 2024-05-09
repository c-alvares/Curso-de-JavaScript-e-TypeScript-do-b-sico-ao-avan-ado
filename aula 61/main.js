// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem(20, 100));

// Correção:
// primeira forma
 function ePaisagem1 (largura, altura) {
    return largura > altura;
 }

 console.log(ePaisagem1(1920, 1080));

 // segunda forma
 const ePaisagem2 = (largura, altura) => largura > altura;

 console.log(ePaisagem2(1080, 1920));