// forEach

// const fruits = ["Apple", "Banana", "Cherry"];

// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });

// for of (Used for arrays and iterable objects)

// const numbers = ["hello", "hi", "hey"];

// for (let num of numbers) {
//     console.log(num);
// }

// for ... in (Used for objects to iterate over keys)

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (const key in person) {
    console.log("key =", key);
    console.log(`person[${key}]: val =`, person[key]);
}