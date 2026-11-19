// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    // Check whether input is empty
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create task object
    let task = {
        text: taskText,
        completed: false
    };

    // Add task to array
    tasks.push(task);

    // Clear input
    input.value = "";

    // Display tasks
    displayTasks();
}


// Function to display tasks
function displayTasks() {

    let taskList = document.getElementById("taskList");

    // Clear existing list
    taskList.innerHTML = "";

    // Display each task
    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        // Task text
        let span = document.createElement("span");
        span.textContent = task.text;

        // Mark completed
        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function() {
            toggleTask(index);
        };

        // Delete button
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.onclick = function() {
            deleteTask(index);
        };

        // Add elements to list item
        li.appendChild(span);
        li.appendChild(deleteButton);

        // Add list item to task list
        taskList.appendChild(li);
    });
}


// Function to mark task as completed
function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}


// Function to delete task
function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}