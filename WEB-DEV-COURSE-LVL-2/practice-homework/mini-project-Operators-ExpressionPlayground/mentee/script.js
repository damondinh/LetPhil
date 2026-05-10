/*
Mini Project — Expression Playground 

Goal
  Given two numbers, compute arithmetic, comparisons, logical results, and precedence examples; render lines in order.

Exact element ids required
  aInput, bInput, runBtn, resultList

STEP 1 — Selection
  Select the elements by id and store them with the exact names above.

STEP 2 — Parser
  Create a function named readNumber that converts a text input’s value to a number and returns the number.

STEP 3 — Compute
  Create a function named computeAll that takes numbers a and b and returns an object with keys in this exact list and order:
    sum, diff, prod, quot, mod,
    eqLoose, eqStrict, greater,
    bothEven, anyOver10, notEqual,
    precOne, precTwo

  Rules:
    sum is a + b
    diff is a - b
    prod is a * b
    quot is a / b
    mod is a % b
    eqLoose is a == b
    eqStrict is a === b
    greater is a > b
    bothEven is (a is even) and (b is even)
    anyOver10 is a > 10 or b > 10
    notEqual is not (a === b)
    precOne is a + b * 2
    precTwo is (a + b) * 2

STEP 4 — Render
  Create a function named renderResults that erases resultList, then appends list items in the key order listed above with the format Key: space Value.

STEP 5 — Handler
  When runBtn is clicked, read a and b, compute, and render.
*/

let aInput = document.getElementById("aInput");
let bInput = document.getElementById("bInput");
let runBtn = document.getElementById("runBtn");
let resultList = document.getElementById("resultList");

// converts a text input’s value to a number and returns the number.
function readNumber(textInput) {
  return parseInt(textInput);
}

// takes numbers a and b and returns an object with keys in this exact list and order:
function computAll(aInput,bInput) {
  let a = readNumber(aInput);
  let b = readNumber(bInput);

  let sum = a + b;

  let diff = a - b;

  let prod = a * b;

  let quot = a / b;

  let mod = a % b;

  let eqLoose = a == b;

  let eqStrict = a === b;
  
  let greater = a > b;

  let bothEven = (a % 2 === 0) && (b % 2 === 0);

  let anyOver10 = (a > 10) || (b > 10);

  let notEqual = a !== b;
  
  let precOne = a + b * 2;

  let precTwo = (a + b) * 2;

  let results = {
    sum: sum, 
    diff: diff,
    prod: prod, 
    quot: quot, 
    mod: mod,
    eqLoose: eqLoose, 
    eqStrict: eqStrict, 
    greater: greater,
    bothEven: bothEven, 
    anyOver10: anyOver10, 
    notEqual: notEqual,
    precOne: precOne,
    precTwo: precTwo
  }

  return results;
}

function renderResults(obj) {
  let outputList = [];

  for (const [key, value] of Object.entries(obj)) {
    outputList.push(`${key}: ${value}`);
  }

  return outputList;
}

// Start
runBtn.addEventListener('click', function() {

  let resultsObj = computAll(aInput.value,bInput.value);

  resultList.textContent = renderResults(resultsObj);
});