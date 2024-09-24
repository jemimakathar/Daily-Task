//Given a number n, find the number of trailing zeros in its binary representation.
function trallingZero(n) {
    if (n != 0) {
        var count = 0;
        while (n % 2 == 0) {
            count = count + 1;
            n = n / 2;
        }
        return count;
    }
    else {
        return 0;
    }
}
console.log(trallingZero(4));
console.log(trallingZero(8));
