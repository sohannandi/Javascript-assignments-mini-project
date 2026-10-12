// ============================================================
// Assignment 4: Loop Control Structures
// Demonstrates: for, while with break, do...while with continue
// ============================================================

// --- for loop: multiplication table of 5, multipliers 1 to 5.
console.log("-- Multiplication Table of 5 --");
for (var i = 1; i <= 5; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

// --- while loop with break: first number greater than 10 divisible by 6.
console.log();
console.log("-- First number > 10 divisible by 6 --");
var candidate = 11; // start just above 10
while (true) {
  if (candidate % 6 === 0) {
    console.log("Found: " + candidate);
    break; // exit the loop as soon as the condition is met
  }
  candidate++;
}

// --- do...while with continue: demonstrate skipping values.
// Show numbers 1 to 10, but skip even numbers using continue.
console.log();
console.log("-- do...while with continue (printing odd numbers 1-10) --");
var counter = 1;
do {
  if (counter % 2 === 0) {
    counter++;
    continue; // skip even numbers and jump to the next iteration
  }
  console.log("Odd number: " + counter);
  counter++;
} while (counter <= 10);
