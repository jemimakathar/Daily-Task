// Input: 5
// Output:
// *
// **
// ***
// ****
// *****
function printRightAngledTriangle(rows) {
    for (var i = 1; i <= rows; i++) {
        var stars = '';
        for (var j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
var numberOfRows = 5;
printRightAngledTriangle(numberOfRows);
