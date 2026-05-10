// ======================================================================
// PROJECT: TaskTracker Lite — DOM + Events
// PURPOSE: Connect JavaScript to HTML (DOM) and respond to events.
//
// ✅ REQUIRED NAMES:
//    IDs:        #taskForm, #taskInput, #addBtn, #status, #taskList, #themeBtn
//    Classes:    .header, .container, .task-item, .task-text, .btn,
//                .complete, .delete, .done
//    Variables:  form, input, statusEl, list, themeBtn
//    Functions:  addTaskItem(text), setStatus(message)
// ======================================================================

// STEP 1: Select elements by id and store in variables
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const statusEl = document.getElementById("status");
const list = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");

// STEP 2: Add event listeners
//   - form.submit: preventDefault, validate input, call addTaskItem or setStatus
//   - themeBtn.click: toggle body.dark and aria-pressed
form.addEventListener("submit", addTaskItem);

// STEP 3: Function addTaskItem(text)
//   - Create li.task-item
//   - Add span.task-text, button.btn.complete, button.btn.delete
//   - completeBtn toggles .done
//   - deleteBtn removes li and calls setStatus
function addTaskItem(text) {
    text.preventDefault(); // stops from from refreshing

    // Creating new task list item
    let newTask = document.createElement("li");
    newTask.classList.add("task-item");

    // Adding span text
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = input.value.trim(); 
    newTask.appendChild(taskText);

    // Adding complete button
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("btn");
    completeBtn.classList.add("complete");
    completeBtn.textContent = "⬜ Complete"
    completeBtn.addEventListener("click", function () {
        newTask.classList.toggle("done");
        const isDone = newTask.classList.contains("done");
        completeBtn.textContent = isDone ? "✅ Done":"⬜ Complete"; 
        setStatus(taskText.textContent + " completed");
    });
    newTask.appendChild(completeBtn);

    // Adding delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "🗑️ Delete";
    deleteBtn.addEventListener("click", function () {
        setStatus(taskText.textContent + "  removed");
        newTask.remove();
    })
    newTask.appendChild(deleteBtn);

    list.appendChild(newTask);

    setStatus(taskText.textContent + " Added");
}

// STEP 4: Function setStatus(message)
//   - Update statusEl.textContent
function setStatus(message) {
    statusEl.textContent = message;
}


// STEP 5 (Optional): Save/load tasks with localStorage
