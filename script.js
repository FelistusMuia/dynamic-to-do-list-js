document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // When the button is clicked, remove the <li> from the task list
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li>
        li.appendChild(removeBtn);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach click event to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach keypress event to allow adding task with "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});