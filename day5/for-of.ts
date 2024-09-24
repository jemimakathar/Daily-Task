let number=[10,20,30,400];
for(var i of number)//#of is used to print the elements value
{
    console.log(i);
    if(i==30)
    {
        console.log("hellooo");
        break;//this break will terminate the
              // entrie for loop also not only if statement.
    }
    
}
console.log("----------");


let num=[10,20,30,400,50];
for(var j in num)//#index of the element will print
{
    console.log(j+"="+num[j]);
}
console.log("----------");


let words="hello world";
for(var x of words)
{
    console.log(x);
}
console.log("----------");

//when number of iterations are fixed we use while loop
//eg:month from 1(jan) to 12(dec)