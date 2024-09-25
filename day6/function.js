function add(a, b) {
    return a + b;
}
console.log(add(10, 30));
//implicit 
var sum = function (x, y) {
    return x + y;
};
console.log(sum(90, 1));
//explict 
var Add = function (n, m) {
    return (n + m);
};
console.log(Add(25, 50));
//union
//function with optional parameters
var Addition = function (n, m, o) {
    if (typeof o === "number") {
        return n + m + o;
    }
    console.log(o);
    return (n + m);
};
// console.log(Addition(25,50,"jemi"));
// console.log(Addition(25,50,12));
console.log(Addition(25, 50)); //optional ? operator is used.
