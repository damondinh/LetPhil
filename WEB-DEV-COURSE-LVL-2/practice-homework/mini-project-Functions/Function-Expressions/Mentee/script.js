// Mentee Version — Steps Only (same steps appear in Mentor)

// STEP 1 — Make a variable addExpr that stores a function expression which returns a+b.
const addExpr = function (a,b) {
    return a + b;
}
// STEP 2 — Make a variable sayByeExpr that stores a function expression which returns 'Bye, <name>!'
const sayByeExpr = function(name) {
    return `Bye, ${name}!`;
}
// STEP 3 — Make a variable isEvenExpr that stores a function expression which returns true if n is even.
const isEvenExpr = function(n) {
    return n % 2 === 0;
}
// STEP 4 — Make a variable pickLongerExpr that returns the longer of two strings.
const pickLongerExpr = function(str1, str2) {
    return (str1.length > str2.length) ? str1 : str2;
}
// STEP 5 — TEST: Log calls to each expression to the console with sample inputs.

console.log("addExpr() -> " + addExpr(1,3));
console.log("sayByeExpr() -> " + sayByeExpr("John"));
console.log("isEvenExpr() -> " + isEvenExpr(3));
console.log("pickLongerExpr() -> " + pickLongerExpr("John","Doe"));