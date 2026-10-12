// ============================================================
// Assignment 6: Arrays, Objects, and Core Methods
// Demonstrates: array of objects, forEach, filter, map
// ============================================================

// Create an array of product objects with name and price properties.
var products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

// forEach: iterate and log each product in a readable format.
console.log("-- All Products (forEach) --");
products.forEach(function (product) {
  console.log("Item: " + product.name + " - Price: $" + product.price);
});

// filter: select products priced below $50.
var affordableProducts = products.filter(function (product) {
  return product.price < 50;
});

console.log();
console.log("-- Filtered Products (Price < $50) --");
// JSON.stringify provides an object-array representation matching reference.
console.log(JSON.stringify(affordableProducts));

// map: transform each product into an uppercase formatted string.
var productTags = products.map(function (product) {
  return product.name.toUpperCase() + " costs $" + product.price;
});

console.log();
console.log("-- Mapped Product Tags (map) --");
console.log(JSON.stringify(productTags));