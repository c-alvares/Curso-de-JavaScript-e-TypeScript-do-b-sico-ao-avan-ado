const paragrafos = document.querySelector('.paragrafos'); // retorna apenas o primeiro elemento que encontrar com a classe/id/tag
const ps = paragrafos.querySelectorAll('p'); // retorna todos os elementos 'p' dentro do 'paragrafos'

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps) {
    console.log(backgroundColorBody)
    p.style.backgroundColor = backgroundColorBody; 
    p.style.color = "#FFF";
}