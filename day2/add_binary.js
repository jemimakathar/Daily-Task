//You have to write a function add which takes two binary numbers as strings and returns their sum as a string.
function addBinary(a, b) {
    var result = '';
    var carry = 0;
    var i = a.length - 1;
    var j = b.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        var bitA = i >= 0 ? +a[i] : 0;
        var bitB = j >= 0 ? +b[j] : 0;
        var sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }
    return result;
}
console.log(addBinary("111", "10"));
