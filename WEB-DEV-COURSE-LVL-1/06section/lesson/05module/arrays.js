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

const numbers = [1,2,3,4,5];
// map 
console.log("numbers =", numbers);
const doubled = numbers.map((num) => num * 2);
console.log("doubled =", doubled);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);
