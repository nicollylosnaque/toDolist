// definir variaveis ou constantes para uso do codigo

const btnAdd = document.getElementById(`btn-add`);
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
tarefa.focus();
titulo.innerHTML = `Lista de tarefa: ${nome}`;

btnAdd.addEventListener("click",criaTarefa);

//Envio com o Enter
tarefa.addEventListener('keypress', function(e){
    if (e.key === 'Enter') criaTarefa();
});
//

function criaTarefa(){
    if(tarefa.value==""){
        alert("digite o nome da sua tarefa")
    } else{

    
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

    //Apaga input apos envio
    tarefa.value = '';
    tarefa.focus(); //retorma o foco para o campo de entrada

        }

}