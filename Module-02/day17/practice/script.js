// 1

function vat(amount, rate = 0.15) {
    return amount + (amount * rate);
}

const vatArrow = (amount, rate = 0.15) =>
    amount + (amount * rate);

console.log("1. VAT Function:");

console.log(vat(1000));
console.log(vatArrow(1000));

// 2

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log("\n2. Counter:");
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// 3

function discountBy(rate) {
    return function(price) {
        return price - (price * rate);
    };
}

const memberPrice = discountBy(0.10);
const salePrice = discountBy(0.30);
console.log("\n3. Discounts:");
console.log("Member price:", memberPrice(1000), "ETB");
console.log("Sale price:", salePrice(1000), "ETB");

// 4

function applyToAll(list, fn) {
    return list.map(fn);
}

const prices = [100, 200, 300, 400];
const pricesWithVat = applyToAll(prices, vat);
console.log("\n4. Prices with VAT:");
console.log(pricesWithVat);

// 5

const cities = ["Addis Ababa","Bahir Dar","Hawassa","Gondar"];
console.log("\n5. Ethiopian Cities:");
cities.forEach(function(city, index) {
    console.log(`${index + 1}. ${city}`);
});
