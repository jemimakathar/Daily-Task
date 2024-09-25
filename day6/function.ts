function add(a: number, b: number) {
    return a + b;
}
console.log(add(10,30));

//implicit 
let sum=(x:number,y:number)=>
{
return x+y;
}
console.log(sum(90,1))

//explict 
let Add=(n:number,m:number):number=>
{
 return (n+m);
}
console.log(Add(25,50));

//union
//function with optional parameters
let Addition=(n:number,m:number,o?:string|number):number=>
    {
        if(typeof o ==="number")
        {
            return n+m+o;
        }
        console.log(o);// we have to whether the value is declared.if not declare it will return undefined
        
     return (n+m);
    }
     console.log(Addition(25,50,"jemi"));
     console.log(Addition(25,50,12));
    console.log(Addition(25,50,));//optional ? operator is used.



//functions with default value


let Addi=(n:number,m:number,o:(string|number)=10):number=>
    {
        if(typeof o ==="number")
        {
            return n+m+o;
        }
        console.log(o);
     return (n+m);
    }
     console.log(Addition(25,50,"jemi"));
     console.log(Addition(25,50,12));
    console.log(Addition(25,50,));