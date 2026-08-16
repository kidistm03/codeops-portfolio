// practice 5: Import and use the money module

import { addVat, VAT } from "./money.js";

const price = 500;

const finalPrice = addVat(price);

console.log("\n===== TASK 5 =====");
console.log("VAT:", VAT * 100 + "%");
console.log("Original price:", price, "ETB");
console.log("Price with VAT:", finalPrice.toFixed(2), "ETB");
