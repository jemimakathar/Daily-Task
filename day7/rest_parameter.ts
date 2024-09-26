//rest is uesd in array only.




function getTotal(...array:number[]):number
{
    let total=0;
    array.forEach((num)=>total=total+num);
    return total;
}
console.log(getTotal(2,3,4,4,5,67,7,7,7))
console.log(getTotal(4,4,4,4))
console.log(getTotal());
console.log("----------------");



function combine(...args:(number|string)[]):[number,string]
{
    let total=0;
    let str='';
    args.forEach((arg)=>
    {
        if(typeof arg ==='number')
        {
            total=total+arg;
        }
        else if(typeof arg === 'string')
        {
            str=str+arg;
        }
    });
    return [total,str];
}
const[total, str] = combine(3, 'Happy', 2, 1, ' New Year');
console.log({ total });
console.log({ str });
console.log("---------------------");




function printDetails(prefix: string, ...details: string[]): void {
    console.log(prefix);
    details.forEach(detail => console.log(detail));
}

printDetails("Details:", "Item 1", "Item 2", "Item 3");
printDetails("Details:", "jemi", "kaviya", "jemima");
console.log("------------------------------");




function areAllTrue(...values: boolean[]): boolean {
    return values.every(value => value);
}

console.log(areAllTrue(true, true, true));   
console.log(areAllTrue(true, false, true));  
console.log(areAllTrue(false,true));                    
