// ============================================================
// Mini Project: Interactive Product Inventory & Analytics Dashboard
// Demonstrates: prompt(), validation, conditionals (if/else & switch),
// loops (break/continue), functions (standard + arrow), scope,
// and array methods (forEach, filter, map)
// ============================================================

// --- Category thresholds (documented; the source does not specify
// exact boundaries, so the following minimal rule reproduces the
// reference example: Laptop ($800) -> Premium, Mouse ($25) -> Budget,
// Monitor ($150) -> Standard.)
//   Budget   : price < 50
//   Standard : 50 <= price < 200
//   Premium  : price >= 200
const BUDGET_MAX = 50;
const PREMIUM_MIN = 200;

// Assign a category label based on price using a switch statement
// (the "switch (true)" pattern evaluates boolean cases in order).
function categorizeByPrice(price) {
  "use strict";
  switch (true) {
    case price < BUDGET_MAX:
      return "Budget";
    case price >= PREMIUM_MIN:
      return "Premium";
    default:
      return "Standard";
  }
}

const getCategoryLabel = (price) => {
  "use strict";
  // Arrow function used for concise category computation.
  // Reuses the same threshold rule as categorizeByPrice.
  if (price < BUDGET_MAX) {
    return "Budget";
  } else if (price >= PREMIUM_MIN) {
    return "Premium";
  } else {
    return "Standard";
  }
};

// --- Initial inventory (from the source example).
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// --- Browser prompt() helper with a Node.js fallback.
// prompt() is browser-only. When running under Node, simulate the
// example input (Monitor / 150) so the script still runs for review.
function promptFor(message, fallback) {
  if (typeof prompt === "function") {
    return prompt(message);
  }
  // Node fallback: use the documented example value.
  return fallback;
}

console.log("--- Initializing Inventory System ---");

// --- FR-1: collect a new product via prompt and add it if valid.
let rawName = promptFor('Enter the new product name (e.g., "Monitor"):', "Monitor");
let productName = rawName !== null ? rawName.trim() : "";

let productPrice = null;
let rawPrice;

// Use a loop with continue to re-prompt cleanly when input is bad.
while (true) {
  rawPrice = promptFor(
    "Enter the product price (e.g., 150):",
    "150"
  );
  // Handle a cancelled prompt.
  if (rawPrice === null) {
    productPrice = null;
    break;
  }
  productPrice = Number(rawPrice);
  // Non-numeric input: skip adding, continue the loop to re-prompt.
  if (isNaN(productPrice)) {
    console.log("Invalid price: not a number. Please try again.");
    continue;
  }
  // Negative price: not allowed, re-prompt.
  if (productPrice < 0) {
    console.log("Invalid price: must be a non-negative number.");
    continue;
  }
  break;
}

// Validate the whole submission with if...else before mutating inventory.
if (!productName || productPrice === null) {
  console.log(
    'No valid product name or price was provided; inventory unchanged.'
  );
} else {
  inventory.push({ name: productName, price: productPrice });
  console.log('--- User added "' + productName + '" at "$' + productPrice + '" ---');
}

// --- FR-2: search inventory for a product using a while loop with break.
function findProduct(targetName) {
  let found = null;
  let index = 0;
  while (index < inventory.length) {
    if (inventory[index].name.toLowerCase() === targetName.toLowerCase()) {
      found = inventory[index];
      break; // stop searching once found
    }
    index++;
  }
  return found;
}

// Demonstrate the search loop: look for "Laptop" and report.
const searchResult = findProduct("Laptop");
if (searchResult) {
  console.log(
    "Lookup (while + break): found " + searchResult.name +
    " at $" + searchResult.price
  );
}

// --- Processing & analytics functions ---

// forEach: log every product with its computed category.
function listInventoryRoster() {
  console.log();
  console.log("--- Processing Inventory Roster (forEach) ---");
  inventory.forEach((item) => {
    const category = getCategoryLabel(item.price);
    console.log(
      "* Item: " + item.name + " ($" + item.price +
      ") -> Category: " + category
    );
  });
}

// Calculate total inventory value using a standard function + map/reduce.
function calculateTotalValue(items) {
  let total = 0;
  items.forEach(function (item) {
    // Accumulate only valid numeric prices.
    if (typeof item.price === "number" && !isNaN(item.price)) {
      total += item.price;
    }
  });
  return total;
}

// filter: affordable items strictly below a threshold.
const getAffordableItems = (items, threshold) =>
  items.filter((item) => item.price < threshold);

// map: uppercase formatted report strings.
const buildReport = (items) =>
  items.map((item) => item.name.toUpperCase() + ": $" + item.price);

// --- Run processing and analytics ---
listInventoryRoster();

console.log();
console.log("--- Financial Analytics ---");

const totalValue = calculateTotalValue(inventory);
const AFFORDABLE_THRESHOLD = PREMIUM_MIN; // under $200
const affordableItems = getAffordableItems(inventory, AFFORDABLE_THRESHOLD);
const affordableNames = affordableItems.map((item) => item.name);
const reportList = buildReport(inventory);

console.log("Total Inventory Value: $" + totalValue);
console.log(
  "Filtered Affordable Items (Under $" + AFFORDABLE_THRESHOLD + "): " +
  JSON.stringify(affordableNames)
);
console.log("Formatted Report List: " + JSON.stringify(reportList));
