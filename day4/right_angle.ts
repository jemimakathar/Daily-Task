// Input: 5
// Output:
// *
// **
// ***
// ****
// *****


function printRightAngledTriangle(rows: number):void{
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
const numberOfRows = 5;
printRightAngledTriangle(numberOfRows);
