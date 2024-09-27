//function overloading


//multiple signatures for a single function and provide one implementation 
//that handles all defined signatures.
//you can have multiple function with same name
//1.with same name
//2.but different parameter types and return type
//3.the number of parameter should be same.

function add(a:number,b:number):number;
function add(x:string,y:string):string;
function add(n:boolean,m:boolean):boolean;
function add(a:number,b:string):number;

function add(l:any,m:any):any{
    return l+m;
}
var s1=add(2,4);
var s2=add("jemima","jemi");
var s3=add(true,false);
var s4=add(4,"jemi"); 
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log("---------------");


//function overloading
 function sum(a:number,b:number):number;
 function sum(a:string,b:string):string;
 function sum(a:any,b:any):any{
    if(typeof a==='number'&&typeof b==='number')
    {
        return a+b;
    }
 }
 let num=sum(3,4);
 let str=sum("jemi","kavi");
 console.log(num);
 console.log(str);
 console.log("---------------");
 
 //optional parameter

function addition(a: number, b: number): number;
function addition(a: number, b: number, c: number): number;
function addition(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
console.log("---------------");





function getLength(item: string): number;
function getLength(item: any[]): number;
function getLength(item: { length: number }): number;

function getLength(item: any): number {
    // Check if the item has a 'length' property and return it
    return item.length;
}
console.log(getLength("Hello, World!")); 
console.log(getLength([1, 2, 3, 4, 5])); 
console.log(getLength({ length: 10 }));// Output: 10 (length property of an object)
                                       //print the given value 