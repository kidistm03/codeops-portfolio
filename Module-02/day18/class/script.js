// Add 15% VAT
function withVat(amount) {
    return amount * 1.15;
}

// Format amount as ETB
function format(amount) {
    return `${amount.toFixed(2)} ETB`;
}

// Calculate total of items
function total(items) {
    return items.reduce((sum, { price, qty }) => {
        return sum + price * qty;
    }, 0);
}

// Sample orders
const orders = [
    {
        id: 1,
        customer: "Abebe",
        items: [
            { name: "Injera", price: 50, qty: 5 },
            { name: "Shiro", price: 120, qty: 2 }
        ]
    },

    {
        id: 2,
        customer: "Hana",
        items: [
            { name: "Doro Wot", price: 300, qty: 2 },
            { name: "Injera", price: 50, qty: 3 }
        ]
    },

    {
        id: 3,
        customer: "Kebede",
        items: [
            { name: "Pasta", price: 180, qty: 1 },
            { name: "Juice", price: 80, qty: 2 }
        ]
    }
];

// Add total to every order
const ordersWithTotal = orders.map((order) => {
    const orderTotal = total(order.items);

    return {
        ...order,
        total: withVat(orderTotal)
    };
});

// Find orders over 500 ETB
const largeOrders = ordersWithTotal.filter((order) => {
    return order.total > 500;
});

// Calculate grand total
const grandTotal = ordersWithTotal.reduce((sum, order) => {
    return sum + order.total;
}, 0);

// Print summary
console.log("=== Addis Market Order Summary ===");

ordersWithTotal.forEach(({ id, customer, total }) => {
    console.log(
        `Order #${id} - ${customer}: ${format(total)}`
    );
});

console.log("\nOrders over 500 ETB:");

largeOrders.forEach(({ id, customer, total }) => {
    console.log(
        `Order #${id} - ${customer}: ${format(total)}`
    );
});

console.log(`\nGrand Total: ${format(grandTotal)}`);
