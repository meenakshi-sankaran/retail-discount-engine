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

// Step 5: Simulate checkout for 3 separate shoppers using a while loop
console.log("\n--- Simulating Order Checkouts ---");
let activeProduct = products[1]; // Let's simulate purchases for Designer Jeans
let shopperCount = 1;

while (shopperCount <= 3) {
    // Apply loyalty discount layer to the product's price
    let finalBill = activeProduct.price * (1 - extraDiscount);
    
    // Decrease stock count by 1 unit
    activeProduct.inventory--;

    console.log(`Shopper #${shopperCount} Checkout Total: $${finalBill.toFixed(2)} (Stock remaining: ${activeProduct.inventory})`);
    shopperCount++;
}

// Step 6: Use a for...in loop to display properties of a single item
console.log("\n--- Object Property Inspection ---");
let sampleItem = products[1];

for (let property in sampleItem) {
    console.log(`${property}: ${sampleItem[property]}`);
}

// Step 7: Use Object.entries() and destructuring to print final inventory status
console.log("\n--- Final System Inventory Status ---");
for (let item of products) {
    console.log(`Product Record:`);
    for (let [propName, propValue] of Object.entries(item)) {
        console.log(`  ${propName.toUpperCase()}: ${propValue}`);
    }
}
