document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskTime = document.getElementById('taskTime');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const date = taskDate.value;
        const time = taskTime.value;

        if (taskText) {
            addTask(taskText, date, time);
            taskInput.value = '';
            taskDate.value = '';
            taskTime.value = '';
        }
    });

    function addTask(text, date, time) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskDetails = document.createElement('span');
        taskDetails.innerHTML = `${text} <br><small>${date} ${time}</small>`;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit task:', text);
            if (newText !== null && newText.trim() !== '') {
                taskDetails.innerHTML = `${newText} <br><small>${date} ${time}</small>`;
            }
        });

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(editButton);

        taskList.appendChild(taskItem);
    }
});
