// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function ifElse(a) {
    var count = 0;
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            count = count + 1;
        }
        else if (a[i] < 0) {
            sum = sum + a[i];
        }
        else {
            return ("empty array");
        }
    }
    return "[".concat(count, ", ").concat(sum, "]");
}
console.log(ifElse([1, 2, 3, 4, 5, 6, 7, 8, 0, 10, -11, -12, -13, -14, -15]));
