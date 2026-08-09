const bill = 500;
const partySize = 2;
const payment = "telebirr";
let tip;
if (bill > 300) {
    tip = bill * 0.10;
} else {
    tip = bill * 0.05;
}

let serviceFee;
switch (payment) {
    case "telebirr":
        serviceFee = 5;
        break;
    case "cbe":
        serviceFee = 3;
        break;
    default:
        serviceFee = 0;
}
const total = bill + tip + serviceFee;
const perPerson = total / partySize;

console.log(`Bill: ${bill} ETB`);
console.log(`Tip: ${tip} ETB`);
console.log(`Service Fee: ${serviceFee} ETB`);
console.log(`Total: ${total} ETB`);
console.log(`Each Person Pays: ${perPerson} ETB`);