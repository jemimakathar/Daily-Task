function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (discount);
}
console.log(applyDiscount(100));
