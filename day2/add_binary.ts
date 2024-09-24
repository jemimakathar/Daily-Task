//You have to write a function add which takes two binary numbers as strings and returns their sum as a string.
function addBinary(a: string, b: string): string {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        const bitA = i >= 0 ? +a[i] : 0;
        const bitB = j >= 0 ? +b[j] : 0;

        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2); 
        i--;
        j--;
    }
    return result;
}
console.log(addBinary("111", "10")); 
