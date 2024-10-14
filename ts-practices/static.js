// Static properties are often used to maintain data or state that is shared among all instances of a class. 
// Instead of each instance having its own copy of the data, a single shared property exists at the class level.
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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        Vehicle.totalVehicles++;
    }
    Vehicle.totalVehicles = 0;
    return Vehicle;
}());
var car = new Vehicle();
var bike = new Vehicle();
var cars = new Vehicle();
var bikes = new Vehicle();
console.log(Vehicle.totalVehicles);
var Payment_Transaction = /** @class */ (function () {
    function Payment_Transaction(name, amount) {
        this.name = name;
        this.amount = amount;
        Payment_Transaction.total_no_Transaction++;
    }
    Payment_Transaction.prototype.process_payment = function () {
        console.log("Processing payment of $".concat(this.name, " for ").concat(this.amount));
    };
    Payment_Transaction.total_number_of_transaction = function () {
        return Payment_Transaction.total_no_Transaction;
    };
    Payment_Transaction.total_no_Transaction = 0;
    return Payment_Transaction;
}());
var payment1 = new Payment_Transaction('jemima', 1000);
var payment2 = new Payment_Transaction('kaviya', 2000);
var payment3 = new Payment_Transaction('nithya', 3000);
payment1.process_payment();
payment2.process_payment();
payment3.process_payment();
console.log("Total Transactions: ".concat(Payment_Transaction.total_number_of_transaction()));
