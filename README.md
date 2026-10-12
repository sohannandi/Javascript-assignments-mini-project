# JavaScript Assignments and Mini Project

A collection of six standalone JavaScript assignments plus a capstone mini project, following the *JavaScript Curriculum: Student Assignments & Capstone Project*.

## Project Overview

This repository implements six practical assignments covering variables and data types, operators and input handling, conditional logic, loops, functions and scope, and arrays/objects with core array methods. The capstone is a **console-based Interactive Product Inventory & Analytics Dashboard** that combines all of those concepts.

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari) — required for the `prompt()`-based exercises.
- Node.js (optional) — used only to run syntax checks and to execute the assignments that do not depend on `prompt()`.

## How to Run Each Assignment

Each file is a standalone script and can be opened or executed independently.

### Assignment 1: Variables, Data Types, and Console Operations
```bash
node assignment-1-variables.js
```
- Demonstrates: `var`, `let`, `const`, `typeof`, `JSON.stringify`, console output.
- No user input required.

### Assignment 2: Operators, Expressions, and Input Handling
```bash
# Browser console (recommended)
open assignment-2-bill-tip.js in a web browser, or open DevTools (F12) and paste the file contents.
```
- Demonstrates: `prompt()`, `Number()` conversion, arithmetic and compound assignment operators.
- **Environment note:** `prompt()` is a browser-only API. Running this file in Node.js logs a notice and exits because it cannot obtain input silently. It is intended for a browser console or browser page.

### Assignment 3: Conditional Logic Implementation
```bash
node assignment-3-conditionals.js
```
- Demonstrates: `if...else`, `switch`, ternary operator.
- The sample score (85) is hardcoded in the file.

### Assignment 4: Loop Control Structures
```bash
node assignment-4-loops.js
```
- Demonstrates: `for` loop, `while` with `break`, `do...while` with `continue`.

### Assignment 5: Function Architecture and Scope
```bash
node assignment-5-functions-scope.js
```
- Demonstrates: standard vs arrow functions, default parameters, function scope, block scope (`let`/`const`), `try...catch`.

### Assignment 6: Arrays, Objects, and Core Methods
```bash
node assignment-6-arrays-objects.js
```
- Demonstrates: array of objects, `forEach()`, `filter()`, `map()`.

## How to Run the Capstone

The capstone uses `prompt()` for input, so it is intended for a browser environment.

**Browser:**
```bash
# Open the file in a web browser and accept the prompts.
```

**Node.js (fallback):** The capstone includes a Node-compatible fallback that simulates the documented example input (`Monitor` / `$150`) so it can be reviewed without a browser:
```bash
node mini-project/inventory-dashboard.js
```

## JavaScript Concepts Demonstrated by File

| File | Concepts |
| --- | --- |
| `assignment-1-variables.js` | `var`, `let`, `const`, `typeof`, console output |
| `assignment-2-bill-tip.js` | `prompt()`, `Number()`, arithmetic and assignment operators |
| `assignment-3-conditionals.js` | `if...else`, `switch`, ternary operator |
| `assignment-4-loops.js` | `for`, `while` with `break`, `do...while` with `continue` |
| `assignment-5-functions-scope.js` | Standard and arrow functions, default parameters, function/block scope, `try...catch` |
| `assignment-6-arrays-objects.js` | Array of objects, `forEach()`, `filter()`, `map()` |
| `mini-project/inventory-dashboard.js` | All of the above combined into an inventory + analytics workflow |

## Capstone: Example Input and Expected Output

**Example input:** `Monitor` / `150`

**Expected output:**
```text
--- Initializing Inventory System ---
--- User added "Monitor" at "$150" ---

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]
```

**Category thresholds** (documented; the source does not specify exact boundaries):
- `Budget`: price < $50
- `Standard`: $50 <= price < $200
- `Premium`: price >= $200

This rule reproduces the reference example: Laptop ($800) is Premium, Mouse ($25) is Budget, Monitor ($150) is Standard.

## Environment Limitations Related to `prompt()`

`prompt()` is a browser-only API. Assignments 2 and the capstone depend on it:
- **In a browser:** open the file directly or run it in the DevTools console; prompts will appear.
- **In Node.js:** Assignment 2 exits with a notice. The capstone falls back to the documented example input (`Monitor` / `150`) so it can still be reviewed.

## Verification

Run the syntax checks and confirm the expected outputs:

```bash
node assignment-1-variables.js
node assignment-3-conditionals.js
node assignment-4-loops.js
node assignment-5-functions-scope.js
node assignment-6-arrays-objects.js
node mini-project/inventory-dashboard.js
```

Key checks:
- Assignment 1: four values logged with their `typeof` results.
- Assignment 3: score 85 produces `Grade: B` and `Status: Passed`.
- Assignment 4: prints the five multiplication results and finds `12`.
- Assignment 5: areas `20` and `30`, and catches the block-scope `ReferenceError`.
- Assignment 6: filters Mouse and Keyboard and creates the three mapped tags.
- Capstone: Monitor / 150 yields total inventory value `$975`, affordable list `["Mouse", "Monitor"]`, and report list `["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]`.
- Invalid capstone inputs (empty, cancelled, non-numeric, negative) do not add invalid products or crash the program.