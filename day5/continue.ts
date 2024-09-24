for (let index = 0; index < 9; index++) 
{
    if (index%2)//skip odd number
        continue;
    console.log(index);
}
console.log("------------------------");


let index = -1;
while (index < 9) 
{
    index = index + 1;
    if (index % 2)
        continue;
    console.log(index);
}
console.log("------------------------");


//count even numbers 9 to 99
let index1 = 9;
let count = 0;
do {
    index1 += 1;//10

    if (index1 % 2)
        continue;
    count += 1;//1
} 
while (index1 < 99);//10

console.log(index1); 
console.log(count);