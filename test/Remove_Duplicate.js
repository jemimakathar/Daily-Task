"use strict";
// Write a function that takes an array of numbers and returns a new array
// with only the unique numbers (removing duplicates)
//input1:[1,2,3,2]
//output:[1,2,3]
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter something: ', function (input) {
    var s = input.split('');
    var numAr = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var t = s_1[_i];
        numAr.push(Number(t));
    }
    function Remove_Duplicate(Input) {
        var new_array = [];
        for (var _i = 0, Input_1 = Input; _i < Input_1.length; _i++) {
            var i = Input_1[_i];
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
