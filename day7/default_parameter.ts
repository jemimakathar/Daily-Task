function applyDiscount(price, discount = 0.05) {
    return price * (1-discount);
}
console.log(applyDiscount(100));
console.log("-------------");



function getday(year:number=new Date().getFullYear(),month:number)
{
    let day=0;
    switch(month)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day=31;
            break;
        case 4:
        case 6:
        case 9:
        case 11: 
            day=30;
            break;
        case 2:
                if (((year % 4 == 0) &&
                    !(year % 100 == 0))
                    || (year % 400 == 0))
                    day = 29;
                else
                    day = 28;
                break;
        default:
                throw Error('Invalid month');
    }
    return day;
}
console.log(getday(2020,5));
console.log(getday(undefined,11));
console.log(getday(2044,10));
console.log("---------------------");




function introduce(name: string = "Guest", age: number = 30): void {
    console.log(`Hello, I'm ${name} and I'm ${age} years old.`);
}
introduce();                
introduce("Bob");          
introduce("Alice", 25);   
console.log("---------------------");



function logMessage(message: string, isError: boolean = false): void {
    if (isError) {
        console.error(`Error: ${message}`);
    } else {
        console.log(`Info: ${message}`);
    }
}

logMessage("This is an informational message."); 
logMessage("This is an error message.", true);  

