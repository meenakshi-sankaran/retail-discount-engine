// Step 2: Product Array (5 brand new products using clean camelCase)
let products = [
    { name: "Wireless Headphones", category: "electronics", price: 150, inventory: 12 },
    { name: "Designer Jeans", category: "apparel", price: 80, inventory: 20 },
    { name: "Organic Milk", category: "groceries", price: 5, inventory: 50 },
    { name: "Paper Towels", category: "household", price: 12, inventory: 35 },
    { name: "Bluetooth Speaker", category: "electronics", price: 60, inventory: 8 }
];

console.log("Initial Product Inventory:", products);

// Step 3: Loop through products using for...of and apply category discounts
console.log("\n--- Processing Category Discounts ---");
for (let item of products) {
    let rate = 0;

    // Switch statement handles categories cleanly with explicit break statements
    switch (item.category) {
        case "electronics":
            rate = 0.20; // 20% discount
            break;
        case "apparel":
            rate = 0.15; // 15% discount
            break;
        case "groceries":
        case "household":
            rate = 0.10; // 10% discount
            break;
        default:
            rate = 0.00; // No discount applied
    }

    // Deduct the calculated discount from the base price
    item.price = item.price - (item.price * rate);
    console.log(`Updated Item: ${item.name} | Base Discounted Price: $${item.price.toFixed(2)}`);
}

// Step 4: Determine extra discounts using an if...else if chain
let customerType = "senior"; // Options: "regular", "student", "senior"
let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05; // 5% additional savings
} else if (customerType === "senior") {
    extraDiscount = 0.07; // 7% additional savings
} else {
    extraDiscount = 0.00; // Standard rate
}

console.log(`\nActive Tier: ${customerType} | Extra Price Reduction: ${extraDiscount * 100}%`);

