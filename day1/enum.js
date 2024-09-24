var Month;
(function (Month) {
    Month[Month["jan"] = 1] = "jan";
    Month[Month["feb"] = 2] = "feb";
    Month[Month["march"] = 3] = "march";
    Month[Month["april"] = 4] = "april";
    Month[Month["may"] = 5] = "may";
    Month[Month["june"] = 6] = "june";
    Month[Month["july"] = 7] = "july";
    Month[Month["aug"] = 8] = "aug";
    Month[Month["sep"] = 9] = "sep";
    Month[Month["oct"] = 10] = "oct";
    Month[Month["nov"] = 11] = "nov";
    Month[Month["dec"] = 12] = "dec";
})(Month || (Month = {}));
;
console.log(Month);
function isalpha(month) {
    var issummer;
    switch (month) {
        case Month.jan:
        case Month.march:
        case Month.april:
            issummer = true;
            break;
        default:
            issummer = false;
    }
    return issummer;
}
console.log(isalpha(Month.dec));
//small set of closely related fixed values.
var approval;
(function (approval) {
    approval[approval["draft"] = 0] = "draft";
    approval[approval["rejected"] = 1] = "rejected";
    approval[approval["received"] = 2] = "received";
    approval[approval["approved"] = 3] = "approved";
})(approval || (approval = {}));
var response = {
    id: 1,
    status: approval.received
};
if (response.status == approval.approved) {
    console.log("email send");
}
else {
    console.log("error");
}
