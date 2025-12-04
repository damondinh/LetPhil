const tasks = [];

while (true) {
    // ask user for input
    let task = prompt("Enter a task (or type 'done' to finish:");

    // validate user input for done
    if( task.toLowerCase() === "done") {
        break; // if done, break out of while loop
    }

    tasks.push(task); // adding user input to tasks
}

// displaying tasks
console.log("Your Todo List:");

// for (let i = 0; i < tasks.length; i++) {
//     console.log(`${i + 1}. ${tasks[i]}`);
// }

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});