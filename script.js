document.getElementById('todo-form').addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');

    const taskText = taskInput.value;
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;

    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText} (${taskDate} ${taskTime})</span>
        <div>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    document.getElementById('task-list').appendChild(taskItem);

    taskInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').innerText;

    const [taskDescription, taskDateTime] = taskText.split(' (');
    const [taskDate, taskTime] = taskDateTime.replace(')', '').split(' ');

    document.getElementById('task-input').value = taskDescription;
    document.getElementById('date-input').value = taskDate;
    document.getElementById('time-input').value = taskTime;

    taskItem.remove();
}
