var discount;
var itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("You got ".concat(discount, "% discount."));
