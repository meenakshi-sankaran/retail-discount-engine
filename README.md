# retail-discount-engine

## Project Overview
This repository contains a functional retail pricing matrix built entirely in JavaScript. The software evaluates product classification tiers, tracks live inventory status, and checks loyalty tiers to accurately run mock consumer checkout pipelines.

## Logic Overview
* **Inventory Array:** 5 customized products tracking names, classifications, costs, and quantity attributes.
* **Categorized Markdowns:** Utilizes a fail-safe `switch` block with explicit breaks to handle target product categories.
* **Loyalty Adjustments:** Implements conditional multi-tiered `if...else if` rules for premium shopper accounts.
* **Checkout Loops:** Leverages a conditional `while` matrix to simulate inventory drawdowns across 3 distinct buyers.
* **Advanced Data Destructuring:** Formats complete object dumps cleanly to the user terminal via `Object.entries()`.

## Execution Notes
Open `index.html` via any secure modern browser client and view the developer console to inspect logic traces.
