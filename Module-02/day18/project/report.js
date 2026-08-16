// Calculate the total for a transaction type
export function totalByType(txns, type) {
    return txns
        .filter((transaction) => {
            return transaction.type === type;
        })
        .reduce((sum, { amount }) => {
            return sum + amount;
        }, 0);
}


// Create formatted receipt strings
export function createReceipts(txns) {
    return txns.map(({ customer, amount }) => {
        return `${customer}: ${amount.toFixed(2)} ETB`;
    });
}
