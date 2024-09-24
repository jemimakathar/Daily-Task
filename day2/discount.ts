
let discount: number;
let itemCount = 9;
if (itemCount > 0 && itemCount <= 5) 
{
    discount = 5;  
} 
else if (itemCount > 5 && itemCount <= 10) 
{
    discount = 10; 
} 
else 
{
    discount = 15; 
}
console.log(`You got ${discount}% discount.`)



let discount1: number;
let itemCount1 = 11;

if (itemCount1 > 0 && itemCount1<= 5) {
  discount1 = 5; 
} else if (itemCount1 > 5 && itemCount1 <= 10) {
  discount1 = 10;
} else if (itemCount1 > 10) {
  discount1 = 15; 
} else {
  throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount1}% discount.`);
