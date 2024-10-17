//Write a function that takes a string and returns it reversed
import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter something: ', (input: string) => {
    var str=input.split('').reverse().join("");
    console.log(str);
});