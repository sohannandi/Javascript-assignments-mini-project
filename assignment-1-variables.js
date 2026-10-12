// ============================================================
// Assignment 1: Variables, Data Types, and Console Operations
// Demonstrates: var, let, const, typeof, console output
// ============================================================

// var - function-scoped, can be re-declared and re-assigned (legacy)
var userName = "Alice";

// let - block-scoped, can be re-assigned
let userAge = 25;

// const - block-scoped, cannot be re-assigned after initialization
const isEmployed = true;

// Arrays are objects in JavaScript; using const because the reference
// to the array itself will not be reassigned.
const skills = ["HTML", "CSS", "JavaScript"];

// Use typeof to inspect the runtime type of each variable.
console.log("Name: " + userName + " (Type: " + typeof userName + ")");
console.log("Age: " + userAge + " (Type: " + typeof userAge + ")");
console.log("Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")");
// JSON.stringify() gives a readable, quoted array representation.
console.log(
  "Skills: " + JSON.stringify(skills) + " (Type: " + typeof skills + ")"
);
