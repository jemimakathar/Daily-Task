var Details = /** @class */ (function () {
    function Details() {
        this.name = "jem";
        this.address = "abc";
    }
    Details.patient_details = function () {
        console.log("jemiii");
    };
    Details.age = 78;
    return Details;
}());
var details = new Details();
console.log(details.name = "jemima");
console.log(details.address = "ahsd");
console.log(Details.age = 345);
Details.patient_details();
