const container = document.querySelector(".container");
const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

function criarTagHtml(param) {
  const tag = document.createElement(param);
  return tag;
}

function imprimirElementosArray() {
  for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    const tagPronta = criarTagHtml(tag);

    tagPronta.innerHTML += texto;
    container.appendChild(tagPronta);
  }
}

imprimirElementosArray();
