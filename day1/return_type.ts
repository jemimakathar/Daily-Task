//3.Write a function that takes a value as argument. Return the type of the value


let type:(n:any)=>any;
type=function(a:any)
{
    return typeof(a);

}
console.log(type("nithu"));
console.log(type(true));
console.log(type(null));
console.log(type(12));