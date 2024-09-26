var _a, _b, _c, _d, _e, _f, _g;
var users = { id: 1, name: "Alice", address: { country: "USA" } };
var city = (_a = users.address) === null || _a === void 0 ? void 0 : _a.city;
console.log(city);
var country = (_b = users.address) === null || _b === void 0 ? void 0 : _b.country;
console.log(country);
console.log("---------------------");
var product = {
    id: 1,
    name: "Smartphone",
    price: 699,
    reviews: [
        { reviewer: "Alice", rating: 5, comment: "Great phone!" },
        { reviewer: "Bob", rating: 4 } // Comment is optional
    ]
};
var firstReviewComment = (_d = (_c = product.reviews) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.comment;
console.log(firstReviewComment); // Output: "Great phone!"
var secondReviewComment = (_f = (_e = product.reviews) === null || _e === void 0 ? void 0 : _e[1]) === null || _f === void 0 ? void 0 : _f.comment; // Safely accessing the second review's comment
console.log(secondReviewComment); // Output: undefined (since comment is not provided)
// Example without reviews
var anotherProduct = {
    id: 2,
    name: "Tablet",
    price: 299
};
var anotherProductReviews = (_g = anotherProduct.reviews) === null || _g === void 0 ? void 0 : _g.length; // Safely checking the length of reviews
console.log(anotherProductReviews); // Output: undefined (no reviews available)
