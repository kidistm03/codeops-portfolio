function subtotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

function discountBy(rate) {
    return (amount) => amount - (amount * rate);
}
