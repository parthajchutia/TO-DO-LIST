const newTask = document.getElementById('newTask');
const dueDate = document.getElementById('dueDate');
const addTask = document.getElementById('addTask');
const todoList = document.getElementById('todoList');

addTask.addEventListener('click', () => {
    const taskText = newTask.value.trim();
    const dueDateValue = dueDate.value.trim();

    if (taskText) {
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskText;

       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            newTaskItem.classList.toggle('completed');
        });

        newTaskItem.appendChild(checkbox);
        newTaskItem.appendChild(document.createTextNode(' ' + taskText));

       
        const dueDateElement = document.createElement('span');
        dueDateElement.textContent = 'Due: ' + dueDateValue;
        newTaskItem.appendChild(dueDateElement);

     
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            newTaskItem.remove();
        });

        newTaskItem.appendChild(deleteButton);

        todoList.appendChild(newTaskItem);
        newTask.value = '';
        dueDate.value = '';
    }
});
