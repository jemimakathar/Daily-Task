let days="sunday";
let monthofday:string;
switch(days)
{
case "sunday":
    monthofday="sunday";
    break;
case "monday":
    monthofday="monday"; 
    break;   
case "tuesday":
    monthofday="tuesday"; 
    break;
case "wednesday":
    monthofday="wednesday";
    break; 
case "thursdayday":
    monthofday="thursdday"; 
    break;
case "friday":
    monthofday="friday"
    break;; 
case "sat":
    monthofday="sat"; 
    break;
default:
    throw Error('Invalid day');
}
console.log(`The day is ${days} and month of the day is ${monthofday}`);

//switch case with enum

enum email{
    Submit="submit",
    Draft="draft",
    Delete="delete",
    Resend="resendit"
}
var mail:string=email.Delete;
switch(mail)
{
    case email.Submit:
        console.log("your email is submitted");
        break;
    case email.Delete:
        console.log("Your mail is Deleted");
        break;
    default:
        console.log("your mail is invalid");
}