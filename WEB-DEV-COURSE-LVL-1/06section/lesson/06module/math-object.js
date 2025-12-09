// Math.round - rounds a number to the nearest integer
console.log(Math.round(4.6));

// Math.floor - rounds down
console.log(Math.floor(4.6));

// Math.ceil - rounds up
console.log(Math.ceil(4.6));

// Math.abs - gets absolute number
console.log(Math.abs(-10.9));

// Math.min/max - gets min/max element in  array
const nums = [1,2,3,4,5,6,7,8,9,10];
console.log(Math.max(...nums));
console.log(Math.min(...nums));


// check if the number is a perfect square
function isPerfectSquare(num) {
    if (Math.sqrt(num) % 1 === 0) {
        return true;
    }

    return false;
}

console.log(isPerfectSquare(10));
console.log(isPerfectSquare(25));