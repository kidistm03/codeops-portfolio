import { transactions } from "./transactions.js";

import {
    totalByType,
    createReceipts
} from "./report.js";

// 1. Calculate credit and debit totals

const creditTotal = totalByType(transactions, "credit");
const debitTotal = totalByType(transactions, "debit");


// 2. Create formatted receipts

const receipts = createReceipts(transactions);


// 3. Use spread to update a transaction

const originalTransaction = transactions[0];

const correctedTransaction = {
    ...originalTransaction,
    amount: 300
};

// 4. Print the report

console.log("=================================");
console.log("     TeleBirr Transaction Report");
console.log("=================================");

console.log(`Total Credits: ${creditTotal.toFixed(2)} ETB`);

console.log(`Total Debits: ${debitTotal.toFixed(2)} ETB`);

console.log("\nReceipts:");

receipts.forEach((receipt) => {
    console.log(`- ${receipt}`);
});

// 5. Show spread example

console.log("\nOriginal Transaction:");
console.log(originalTransaction);

console.log("\nCorrected Transaction:");
console.log(correctedTransaction);

console.log("\nOriginal After Correction:");
console.log(originalTransaction);
