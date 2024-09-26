//rest is uesd in array only.
function getTotal() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var total = 0;
    array.forEach(function (num) { return total = total + num; });
    return total;
}
console.log(getTotal(2, 3, 4, 4, 5, 67, 7, 7, 7));
console.log(getTotal(4, 4, 4, 4));
console.log(getTotal());
console.log("----------------");
function combine() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    var str = '';
    args.forEach(function (arg) {
        if (typeof arg === 'number') {
            total = total + arg;
        }
        else if (typeof arg === 'string') {
            str = str + arg;
        }
    });
    return [total, str];
}
var _a = combine(3, 'Happy', 2, 1, ' New Year'), total = _a[0], str = _a[1];
console.log({ total: total });
console.log({ str: str });
console.log("---------------------");
function printDetails(prefix) {
    var details = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        details[_i - 1] = arguments[_i];
    }
    console.log(prefix);
    details.forEach(function (detail) { return console.log(detail); });
}
printDetails("Details:", "Item 1", "Item 2", "Item 3");
printDetails("Details:", "jemi", "kaviya", "jemima");
console.log("------------------------------");
function areAllTrue() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.every(function (value) { return value; });
}
console.log(areAllTrue(true, true, true));
console.log(areAllTrue(true, false, true));
console.log(areAllTrue(false, true));
