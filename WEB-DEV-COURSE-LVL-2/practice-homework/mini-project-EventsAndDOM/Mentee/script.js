// Goal: Practice Events & DOM by wiring up interactions in a small app.

// -----------------------------------------------------------------------
// STEP A — SELECT ELEMENTS
// - Select by id: btnIncrement, countValue
// - Select by id: btnTheme
// - Select by id: taskInput, prioritySelect, priorityLabel, btnAdd, taskList
// - Select by id: demoForm, nameInput, formMsg
// - Select by id: hoverCard

const btnIncrement = document.getElementById("btnIncrement");
const countValue = document.getElementById("countValue");
const btnTheme = document.getElementById("btnTheme");
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const priorityLabel = document.getElementById("priorityLabel");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");
const demoForm = document.getElementById("demoForm");
const nameInput = document.getElementById("nameInput");
const formMsg = document.getElementById("formMsg");
const hoverCard = document.getElementById("hoverCard");

// -----------------------------------------------------------------------
// STEP B — CLICK: COUNTER
// - Add a click listener to btnIncrement
// - Read current number from countValue (parseInt)
// - Increase by 1 and put it back (textContent)
btnIncrement.addEventListener("click", () => {
    countValue.textContent = parseInt(countValue.innerText) + 1;
})
// -----------------------------------------------------------------------
// STEP C — THEME TOGGLE
// - Add a click listener to btnTheme
// - Toggle the "dark" class on <body> using classList.toggle
btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})
// -----------------------------------------------------------------------
// STEP D — INPUT + CHANGE + ENTER KEY
// - Add an input listener to taskInput (optional: show live length/preview)
// - Add a change listener to prioritySelect to update priorityLabel to "Priority: X"
// - Add a keydown listener to taskInput that checks if key === "Enter"; if so, call addTask()

prioritySelect.addEventListener("change", () => {
    priorityLabel.textContent = `Priority: ${prioritySelect.value}` 
})

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})

// -----------------------------------------------------------------------
// STEP E — CREATE TASK ELEMENTS
// - Write a function addTask() that:
//   * Reads values from taskInput and prioritySelect
//   * Creates a new <li>, sets text to the task
//   * Creates a <span class="badge"> for the priority and appends it
//   * Creates a <button> "Delete" with a data-action="delete"
//   * Appends <li> to taskList
//   * Clears taskInput and focuses it again

btnAdd.addEventListener("click", () => {
    addTask();
});

function addTask() {
    let taskVal = taskInput.value;
    let priorityVal = prioritySelect.value;

    // Create new list item
    let newListItem = document.createElement("li");
    newListItem.textContent = taskVal;

    // Create badge for list item
    let newBadge = document.createElement("span");
    newBadge.className = "badge";
    newBadge.textContent = priorityVal;
    newListItem.appendChild(newBadge);

    // Create delete button for list item
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("data-action", "delete");
    newListItem.appendChild(deleteButton);

    // Append to taskList
    taskList.appendChild(newListItem);

    // Clear and focus taskInput 
    taskInput.focus();
    taskInput.value = "";
}
// -----------------------------------------------------------------------
// STEP F — EVENT DELEGATION FOR DELETE
// - Add one click listener to taskList (the <ul>)
// - Inside, check if event.target has data-action="delete"
// - If yes, remove the parent <li>

taskList.addEventListener("click", (event) => {
    // Check if event's data attribute -> action == delete
    if (event.target.getAttribute("data-action") === "delete") { 
        event.target.parentElement.remove(); 
    }
})

// -----------------------------------------------------------------------
// STEP G — FORM SUBMIT (PREVENT DEFAULT)
// - Add submit listener to demoForm
// - Use event.preventDefault() to stop page reload
// - Build a friendly text using nameInput.value and show it in formMsg
// - Optionally clear the input

demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMsg.textContent = `HELLO ${nameInput.value}!`
    nameInput.value = "";
})

// -----------------------------------------------------------------------
// STEP H — MOUSEOVER / MOUSEOUT
// - Add mouseover listener to hoverCard to add class "highlight"
// - Add mouseout listener to remove class "highlight"
hoverCard.addEventListener("mouseover", () => {
    hoverCard.classList.add("highlight");
})

hoverCard.addEventListener("mouseout", () => {
    hoverCard.classList.remove("highlight");
})

// -----------------------------------------------------------------------
// STEP I — BONUS IDEAS
// - Disable Add button when input is empty (use .disabled = true/false)
// - Pressing Ctrl+Enter adds a task with "High" priority automatically
// - Persist tasks to localStorage and load them on page load
