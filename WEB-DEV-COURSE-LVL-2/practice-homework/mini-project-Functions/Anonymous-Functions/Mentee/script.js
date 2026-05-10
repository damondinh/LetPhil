// Mentee Version — Steps Only (same steps appear in Mentor)

// STEP 1 — Use setTimeout with an anonymous function to log 'Done!' after 500ms.

// STEP 2 — Make an array of numbers and use forEach with an anonymous function to log each double.

// STEP 3 — Use map with an anonymous function to return numbers squared.

// STEP 4 — Use filter with an anonymous function to keep only strings longer than 3 letters from ['pen','book','AI','tool'].

// STEP 5 — Use reduce with an anonymous function to sum an array; log the result.

setTimeout (function() {
    console.log("Done!");
}, 500);

[1,2,3].forEach(function(n) {
    console.log(n*2);
});

let array = [1,2,3].map(function(n) {
    return(n*n);
});

console.log(array);

let strArr = ['pen','book','AI','tool'].filter(function(str) {
    if (str.length >= 3) {
        return str;
    }
})

console.log(strArr);

let sum = [1,2,3].reduce(function(total, n) {
    return total + n;
}, 0);
console.log(sum);
