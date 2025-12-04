// function greetUser(name) {
//     console.log(`Hello, ${name}!`);
// }

// greetUser("Alice");

// function addNumbers(num1, num2, num3) {
//     console.log(`Sum: ${num1 + num2 + num3}`);
// }

// addNumbers(1,2,3);

const greet = function(name) {
    return `Hello, ${name}`;
};

console.log(greet("Alice"));

// Arrow functions ( Short Syntax )

// const square = (num) => num**2;

// const square = (num) => {
//     return num**2
// };
// console.log(square(5));

// () => {}
const multiply = (a, b) => a * b;
console.log(multiply(3,4));