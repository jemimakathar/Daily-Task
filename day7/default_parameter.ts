function applyDiscount(price, discount = 0.05) {
    return price * (1-discount);
}
console.log(applyDiscount(100));
console.log("-------------");




function getday(year:number=new Date().getFullYear(),month:number)
{

}
console.log(getday(2020,5));
console.log(getday(undefined,10));
console.log(getday(2044,15));


