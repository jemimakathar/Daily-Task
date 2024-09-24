// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
function sumofnumbers(array) {
    if (array.length > 4) {
        var number = array.slice().sort(function (a, b) { return a - b; });
        var asc = number[0] + number[1];
        return asc;
    }
    else {
        return 0;
    }
}
console.log(sumofnumbers([29, 3, 40, 5, 80, 55]));
