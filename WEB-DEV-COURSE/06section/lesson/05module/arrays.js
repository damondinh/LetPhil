const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[2]);

// fruits[1] = "Blueberry";

// console.log(fruits);

// console.log(fruits.length);

// Array Methods
// push
fruits.push("Mango");

console.log(fruits);

// pop
fruits.pop();

console.log(fruits);

// shift - removes from beginning
fruits.shift();

console.log(fruits);

// unshift - adds to beginning
fruits.unshift("Grapes");

console.log(fruits);

// splice - add / remove elements
fruits.splice(1,1, "Peach");

console.log(fruits);

fruits.splice(1, 2);

console.log(fruits);

