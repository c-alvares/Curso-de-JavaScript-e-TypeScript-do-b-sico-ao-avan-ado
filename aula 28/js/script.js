const numero = Number(prompt("Digite um número qualquer: "))
const numeroTitulo = document.getElementById("numero-titulo")
const texto = document.getElementById("texto")

const raizQuadrada = Math.sqrt(numero); // numero ** 0.5
const numeroInteiro = Number.isInteger(numero);
const naoENumero = Number.isNaN(numero);
const numeroPiso = Math.floor(numero);
const numeroTeto = Math.ceil(numero);
const numeroDecimal = numero.toFixed(2);

numeroTitulo.innerHTML = numero
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${raizQuadrada}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${numeroInteiro}</p>`;
texto.innerHTML += `<p>É NaN: ${naoENumero}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${numeroPiso}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${numeroTeto}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numeroDecimal}</p>`;