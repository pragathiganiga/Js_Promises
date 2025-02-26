# To-Do List with Promises

This is a simple **To-Do List** web application that allows users to add tasks and mark them as complete. The application utilizes **JavaScript Promises** to simulate asynchronous task completion processing.

## Features
- Add new tasks to the list.
- Mark tasks as completed using a checkbox.
- Task completion is simulated with a small delay using Promises.
- Responsive and modern UI using **HTML, CSS, and JavaScript**.

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Styling and layout.
- **JavaScript**: Functionality and logic implementation.

## How It Works
1. **Adding a Task**
   - The user enters a task in the input field and clicks the "Add Task" button.
   - A new list item is created with a checkbox and task description.
   
2. **Marking a Task as Completed**
   - When the checkbox is clicked, a **Promise** is triggered.
   - A small delay (500ms) simulates processing before marking the task as completed.
   - The task text gets a **strike-through effect** when marked as completed.

## Project Structure
```
📂 To-Do List
│── index.html    # Main HTML file
│── styles.css    # Styling for the app
│── script.js     # JavaScript for app functionality
```

## Code Explanation
### JavaScript (`script.js`)
- `addTask()`: Adds a new task with a checkbox.
- `completeTask(checkbox, span)`: Handles task completion using **Promises**.
  - A delay is introduced before marking a task as completed.
  - If unchecked, the task is restored to normal.

### CSS (`styles.css`)
- Styles the layout, input field, buttons, and task list.
- Completed tasks have a **line-through effect**.

## How to Run
[Live Demo](https://jspromisesexaple.netlify.app/)
1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Add tasks and mark them as completed!

## Preview
![To-Do List Preview](https://via.placeholder.com/600x300.png?text=To-Do+List+App)

## Future Enhancements
- Add task persistence using **Local Storage**.
- Implement a task removal feature.
- Improve UI with animations.

## License
This project is open-source and available for personal or educational use.

---
**Author:** Pragathi
