// definir variaveis ou constantes para uso do codigo

const btnAdd = document.getElementById(`btn-add`);
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
titulo.innerHTML = `Lista de tarefa: ${nome}`;

btnAdd.addEventListener("click",criaTarefa);
function criaTarefa(){
    const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    taskList.appendChild(listItem);


    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = "X"
   
    removeButton.addEventListener('click', function(){
        taskList.removeChild(listItem);
    })

    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = "✓";

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton)

    
    concluirButton.addEventListener('click',function(){
        listItem.classList.toggle('completed');
    })


}