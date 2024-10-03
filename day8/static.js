// static cannot be access through instance it can be access with class name
// creating a class and keep the age a static
var Patient_Details = /** @class */ (function () {
    function Patient_Details() {
        this.name = "jemi";
    }
    Patient_Details.prototype.display_name = function () {
        console.log(this.name);
    };
    Patient_Details.prototype.display_age = function () {
        console.log(Patient_Details.age); //the age can be accessed by the class name rather than the this keyword
    };
    Patient_Details.age = 12;
    return Patient_Details;
}());
var patient_details = new Patient_Details;
patient_details.display_name();
Patient_Details.display_age(); //the age is static thus we cannot access it by the instance
var Details = /** @class */ (function () {
    function Details() {
        this.name = "jemima";
    }
    Details.prototype.display_name = function () {
        console.log(this.name);
    };
    Details.display_age = function () {
        console.log(Details.age); //the age can be accessed by the class name rather than this keyword 
    };
    Details.age = 22;
    return Details;
}());
var Patient_details = new Details;
Patient_details.display_name();
Details.display_age(); //accessing the age directly using the class name
