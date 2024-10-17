"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Write a function that takes a string and returns it reversed
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter something: ', function (input) {
    var str = input.split('').reverse().join("");
    console.log(str);
});
