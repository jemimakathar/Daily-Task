var days = "sunday";
var monthofday;
switch (days) {
    case "sunday":
        monthofday = "sunday";
        break;
    case "monday":
        monthofday = "monday";
        break;
    case "tuesday":
        monthofday = "tuesday";
        break;
    case "wednesday":
        monthofday = "wednesday";
        break;
    case "thursdayday":
        monthofday = "thursdday";
        break;
    case "friday":
        monthofday = "friday";
        break;
        ;
    case "sat":
        monthofday = "sat";
        break;
    default:
        throw Error('Invalid day');
}
console.log("The day is ".concat(days, " and month of the day is ").concat(monthofday));
//switch case with enum
var email;
(function (email) {
    email["Submit"] = "submit";
    email["Draft"] = "draft";
    email["Delete"] = "delete";
    email["Resend"] = "resendit";
})(email || (email = {}));
var mail = email.Delete;
switch (mail) {
    case email.Submit:
        console.log("your email is submitted");
        break;
    case email.Delete:
        console.log("Your mail is Deleted");
        break;
    default:
        console.log("your mail is invalid");
}
