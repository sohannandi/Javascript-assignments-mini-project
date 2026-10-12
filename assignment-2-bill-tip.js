// ============================================================
// Assignment 2: Operators, Expressions, and Input Handling
// Demonstrates: prompt(), explicit numeric conversion, arithmetic
// and compound assignment operators
// ============================================================

// NOTE: prompt() is a browser API. Run this file in a browser console
// (F12 -> Console tab) or by opening it in a browser. If executed in an
// environment without prompt() (e.g., Node.js), the script cannot proceed
// meaningfully and logs this notice instead of failing silently.

if (typeof prompt !== "function") {
  console.log(
    "ERROR: prompt() is a browser-only API. Please run this file in a " +
      "web browser console or open it in a browser. It is not intended for " +
      "silent execution outside a browser."
  );
  process.exit(1);
}

// Capture input via prompt() and explicitly convert the string to a number.
var subtotalInput = prompt("Enter the bill subtotal (e.g., 100):");
var tipInput = prompt("Enter the tip percentage (e.g., 15):");

var subtotal = Number(subtotalInput);
var tipPercentage = Number(tipInput);

// Validate that both inputs were successfully converted to numbers.
if (isNaN(subtotal) || isNaN(tipPercentage)) {
  console.log("Invalid input: both subtotal and tip percentage must be " +
    "numeric values.");
  console.log("No calculation performed.");
} else {
  // Calculate the tip and the final total using arithmetic and assignment.
  var tip = subtotal * (tipPercentage / 100);
  var total = subtotal + tip;

  // Format values as currency / percentage to match the reference output.
  console.log("Subtotal: $" + subtotal.toFixed(0));
  console.log("Tip Percentage: " + tipPercentage + "%");
  console.log("Calculated Tip: $" + tip.toFixed(2).replace(/\.00$/, ""));
  console.log("Total Amount to Pay: $" + total.toFixed(2).replace(/\.00$/, ""));
}
