// definir variaveis ou constantes para uso do codigo

const btnAdd = document.getElementById(`btn-add`);
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
titulo.innerHTML = `Lista de tarefa: ${nome}`;

btnAdd.addEventListener("click",criaTarefa);
function criaTarefa(){
    
}