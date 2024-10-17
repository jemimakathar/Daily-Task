// Write a function that checks if two strings are anagrams of each other.

import { log } from "console";

// Sample input: Listen , Silent
// sample output: true

function Anagram(a:string,b:string):boolean
{
    var n=a.length;
    var m=b.length;
    if(n!=m)
    {
        return false;
    }
    var x=a.toLowerCase().split("").sort().join("");
    var y=b.toLowerCase().split("").sort().join("");  
   if(x==y)
    {
    return true;
    }
    else{
        return false;
    }
}
console.log(Anagram("Silen","Listen"));


