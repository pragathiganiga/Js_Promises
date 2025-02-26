// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById("taskInput"); // Get the input field
    const taskText = taskInput.value.trim(); // Get the trimmed input value
    if (taskText === "") return; // If empty, do nothing

    // Create a new list item
    const li = document.createElement("li");

    // Create a checkbox for marking completion
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a span to hold the task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Attach an event listener to handle task completion
    checkbox.onclick = () => completeTask(checkbox, span);

    // Append elements to the list item
    li.appendChild(span);
    li.appendChild(checkbox);

    // Add the new task to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to handle task completion using Promises
function completeTask(checkbox, span) {
    console.log("Step 1: Checkbox clicked"); // Log when checkbox is clicked

    new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2: Processing completion"); // Simulate processing
            resolve(); // Resolve the promise after a delay
        }, 500);
    }).then(() => {
        if (checkbox.checked) {
            span.classList.add("completed"); // Add strike-through style
            console.log("Step 3: Task marked as completed"); // Log completion
        } else {
            span.classList.remove("completed"); // Remove strike-through style
            console.log("Step 3: Task unmarked"); // Log unchecking
        }
    });
}


// A Promise in JavaScript is like a guarantee that something will happen in the future. It helps us wait for tasks that take time, like loading a webpage or fetching data.

// A Promise has three states:
// 1️⃣ Pending – The task is still in progress.
// 2️⃣ Resolved – The task is completed successfully.
// 3️⃣ Rejected – The task failed.

// Instead of stopping everything to wait, JavaScript keeps running and handles the result when it’s ready using .then() for success and .catch() for errors.



// In this code, we use a Promise to simulate an asynchronous operation when marking a task as completed. Let’s break it down simply:

// 1️⃣ A Promise is created when the checkbox is clicked:

// As soon as you click the checkbox, the completeTask() function runs.
// A console.log("Step 1: Checkbox clicked") message appears in the console.
// 2️⃣ Simulating a delay before marking completion:

// The new Promise((resolve) => { ... }) function is used.
// Inside it, setTimeout(() => { resolve(); }, 500); introduces a 500ms delay before moving to the next step.
// This mimics the behavior of a real-world scenario, such as waiting for a response from a server.
// While waiting, console.log("Step 2: Processing completion") appears in the console.
// 3️⃣ Once the delay is over, the task is marked as completed or unmarked:

// The .then(() => { ... }) block executes after the promise resolves.
// It checks if the checkbox is checked:
// If checked, it adds a CSS class to strike through the task (text-decoration: line-through;).
// If unchecked, it removes the class, making the text normal again.
// A final message appears in the console:
// "Step 3: Task marked as completed" if checked.
// "Step 3: Task unmarked" if unchecked.
// Why use a Promise here?
// ✅ Simulates a delay, making it feel like a real-world task completion (like saving to a database).
// ✅ Ensures code runs step by step in an asynchronous way.
// ✅ Demonstrates how Promises work in JavaScript.

// This makes our to-do list interactive and realistic! 🚀 Let me know if you need further clarification. 😊