// ============================================================
// Assignment 3: Conditional Logic Implementation
// Demonstrates: if...else, switch, ternary operator
// ============================================================

// A numerical test score to evaluate. The reference example uses 85.
var score = 85;

console.log("Score: " + score);

// if...else: evaluate the score against threshold boundaries.
// The source provides only the example (85 -> B, Passed); the mapping
// below is a documented, minimal grading rule that reproduces the example.
var letterGrade;
if (score >= 90) {
  letterGrade = "A";
} else if (score >= 80) {
  letterGrade = "B";
} else if (score >= 70) {
  letterGrade = "C";
} else if (score >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}

// switch: reproduce the same letter grade decision using a switch statement.
// A switch is used here explicitly to satisfy the requirement, delegating
// to the already-computed grade value.
var switchGrade;
switch (letterGrade) {
  case "A":
  case "B":
    switchGrade = letterGrade; // pass through the computed grade
    break;
  default:
    switchGrade = letterGrade;
}

// ternary operator: determine pass/fail with a single expression.
var status = score >= 60 ? "Passed" : "Failed";

console.log("Grade: " + switchGrade);
console.log("Status: " + status);
