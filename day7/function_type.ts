//function have two types parameter and rerurn 
var square:(a:number)=>number;
square=function(a:number):number {
    return a*a;
};
const result = square(4);
console.log(result); 
console.log("-------------");



let squ:(len:number,width:number)=>number;
squ=function(len:number,width:number):number{
{
    return len * width;
}
}
const len = 5;
const width = 3;
const area = squ(len,width);
console.log(`The area of the rectangle is: ${area}`); 
console.log("-------------");




let calculate:(x:number,y:number)=>number;
calculate=function(x:number,y:number):number{
    return x*y;
}
const value=(calculate(30,50));
console.log(`the value is:${value}`);
console.log("-------------");