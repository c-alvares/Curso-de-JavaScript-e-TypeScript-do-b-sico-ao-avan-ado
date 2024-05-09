const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi () {
  const tagLi = document.createElement('li');
  return tagLi
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apgar'); ou
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
  const tagLi = criaLi();
  tagLi.innerText = textoInput;
  tarefas.appendChild(tagLi);
  limpaInput();
  criaBotaoApagar(tagLi);
  salvarTarefas();
}

function adcionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adcionaTarefasSalvas()

function salvarTarefas() {
  const tagLiTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of tagLiTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJson);
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

document.addEventListener('click', function(e) {
  const element = e.target;

  if (element.classList.contains('apagar')) {
    element.parentElement.remove();
    salvarTarefas()
  }
})

