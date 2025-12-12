// ===================== MENTEE — INSTRUCTIONAL STEPS =====================
// Goal: Practice different types of loops by generating a to-do list.

// STEP 1 — Create an array with 5 tasks (strings).
// STEP 2 — Select button (#btnGenerate), ul (#taskList), and p (#taskCount).
// STEP 3 — Add click event listener to button.
// STEP 4 — Inside the event:
//   - Clear the list.
//   - Use a for loop to add tasks with prefix "(for)".
//   - Use a while loop to add tasks with prefix "(while)".
//   - Use for...of to add tasks with prefix "(for...of)".
//   - Use forEach to add tasks with prefix "(forEach)".
// STEP 5 — Show total task count in #taskCount.

const tasks = ["task1", "task2", "task3", "task4", "task5"];

const btnGenerate = document.getElementById("btnGenerate");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

btnGenerate.addEventListener("click", function() {
  taskList.textContent = "";
  taskCount.textContent = "";

  // for loop
  for (let i = 0; i < tasks.length; i++) {
    const listItem = document.createElement("li"); // create a doc object to store list items
    listItem.textContent = `(for loop) ${tasks[i]}`; // add content to list item object
    taskList.appendChild(listItem); // add list item to unordered list object
  }

  // while loop
  let n = 0;
  while (n < tasks.length) {
    const listItem = document.createElement("li"); // create a doc object to store list items
    listItem.textContent = `(while loop) ${tasks[n]}`; // add content to list item object
    taskList.appendChild(listItem); // add list item to unordered list object
    n++;
  }

  // for...of
  for (const element of tasks) {
    const listItem = document.createElement("li"); // create a doc object to store list items
    listItem.textContent = `(for...of) ${element}`; // add content to list item object
    taskList.appendChild(listItem); // add list item to unordered list object
  }

  // forEach
  tasks.forEach((task) => {
    const listItem = document.createElement("li"); // create a doc object to store list items
    listItem.textContent = `(forEach) ${task}`; // add content to list item object
    taskList.appendChild(listItem); // add list item to unordered list object
  })
});