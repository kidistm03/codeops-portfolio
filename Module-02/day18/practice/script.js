// practice 1: map, filter, reduce

const prices = [200, 500, 800, 1200, 300];

// Add 15% VAT
const pricesWithVat = prices.map((price) => {
    return price * 1.15;
});

// Keep prices under 1000 ETB
const under1000 = pricesWithVat.filter((price) => {
    return price < 1000;
});

// Calculate grand total
const grandTotal = under1000.reduce((total, price) => {
    return total + price;
}, 0);

console.log("===== TASK 1 =====");
console.log("Prices:", prices);
console.log("Prices with VAT:", pricesWithVat);
console.log("Under 1000 ETB:", under1000);
console.log("Grand Total:", grandTotal.toFixed(2), "ETB");

// practice 2: Object.entries + for...of


const customer = {
    name: "Abebe",
    city: "Addis Ababa",
    balance: 1500
};

console.log("\n===== TASK 2 =====");

for (const [key, value] of Object.entries(customer)) {
    console.log(key, ":", value);
}

// practice 3: Destructuringpractice

// Destructure name and city in one line
const { name, city } = customer;

console.log("\n===== TASK 3 =====");
console.log("Name:", name);
console.log("City:", city);

// Parameter destructuring
function greet({ name }) {
    console.log(`Hello, ${name}!`);
}

greet(customer);


// practice 4: Spread


const updatedCustomer = {
    ...customer,
    city: "Adama",
    phone: "0911223344"
};

console.log("\n===== TASK 4 =====");
console.log("Original customer:");
console.log(customer);
console.log("Updated customer:");
console.log(updatedCustomer);
