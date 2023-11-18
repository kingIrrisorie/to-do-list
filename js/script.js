// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const  taskList = document.getElementById("taskList");

    if (taskInput.value !== ''){
        // Adicionar a nova tarefa ao array
        tasks.push(taskInput.value);

        // Atualizar a lista de tarefas no HTML
        atualizarLista(taskList);

        // Limpar o campo de entrada
        taskInput.value = '';
    }
}

// Função para remover uma tarefa
function removerTarefa(index) {
    // Remover a tarefa do array
    tasks.splice(index, 1);

    // Atualizar a lista de tarefas no HTML
    atualizarLista(document.getElementById("taskList"));
}

// Função para marcar uma tarefa como concluída
function concluir(index) {
    // indicar que a tarefa está concluída
    tasks[index] = `<s>${tasks[index]}</s>`;
    
    // Atualizar a lista de tarefas no HTML
    atualizarLista(document.getElementById("taskList"));

}

// Função para atualizar a lista de tarefas no HTML
function atualizarLista(taskList) {
    // Limpar a lista
    taskList.innerHTML = '';

    // Adicionar cada tarefa à lista
    tasks.forEach( (task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button class="bt" onclick="concluir(${index})">concluir</button> <button class="bt" onclick="removerTarefa(${index})">remover</button>`
        taskList.appendChild(li);
    } );
}
