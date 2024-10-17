"use strict";
// Write a function that checks if two strings are anagrams of each other.
Object.defineProperty(exports, "__esModule", { value: true });
// Sample input: Listen , Silent
// sample output: true
function Anagram(a, b) {
    var n = a.length;
    var m = b.length;
    if (n != m) {
        return false;
    }
    var x = a.toLowerCase().split("").sort().join("");
    var y = b.toLowerCase().split("").sort().join("");
    console.log(x);
    console.log(y);
    if (x == y) {
        return true;
    }
    else {
        return false;
    }
}
console.log(Anagram("Silen", "Listen"));
