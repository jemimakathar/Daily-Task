// Write a function that takes an array of numbers and returns a new array
// with only the unique numbers (removing duplicates)
//input1:[1,2,3,2]
//output:[1,2,3]


import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please enter something: ', (input: string) => {
    var s : string[] = input.split('');
    var numAr : number[] = [];
    for(var t of s)
        numAr.push(Number(t));
    
    function Remove_Duplicate(Input: number[]): any {
        var new_array: number[] = [];
        for (var i of Input) {
            if (Input.indexOf(i) === Input.lastIndexOf(i)) {
                new_array.push(i);
            }
        }
        return new_array;
    }
    console.log(Remove_Duplicate(numAr));
    // console.log(Remove_Duplicate([1, 2, 3]));
    // console.log(Remove_Duplicate([1, 2, 3, 5, 4, 5, 7]));
});

