// ============================================================
// Assignment 5: Function Architecture and Scope
// Demonstrates: standard vs arrow function, default parameters,
// function scope, block scope (let/const), try...catch
// ============================================================

// Standard function with default parameters: length 5 and width 4.
function calculateRectangleArea(length, width) {
  if (typeof length === "undefined") {
    length = 5;
  }
  if (typeof width === "undefined") {
    width = 4;
  }
  return length * width;
}

// Arrow function with default parameters: length 10 and width 3.
// Using ES6 default parameters where supported.
const calculateRectangleAreaArrow = function (length, width) {
  length = length || 10;
  width = width || 3;
  return length * width;
};

// Output the areas using the reference dimensions.
console.log(
  "Standard Function Area (Default 5x4): " + calculateRectangleArea(5, 4)
);
console.log(
  "Arrow Function Area (Custom 10x3): " +
    calculateRectangleAreaArrow(10, 3)
);

// Block scope demonstration.
// A variable declared with let or const inside a block is NOT accessible
// outside that block. Accessing it outside throws a ReferenceError.
// The try...catch handles that error so the script keeps running.
console.log();
try {
  {
    let blockVar = "I exist only inside this block";
    console.log("Inside block: " + blockVar);
  }
  // Trying to read blockVar here is outside its block scope.
  console.log("blockVar: " + blockVar);
} catch (error) {
  console.log("Scope Test Error: " + error.name + ": " + error.message +
    " (blockVar is not defined when accessed outside its block)");
}
