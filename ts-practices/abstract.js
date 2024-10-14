//abstract class is a class that cannot be instantiated directly.
//abstract class la value kuduka mudiyathu enna instance create panna mudiyathu
// An abstract class is typically used to define common behaviors for derived classes to extend.
//add additional functionality
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var students = /** @class */ (function (_super) {
    __extends(students, _super);
    function students() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "jemi";
        _this.phnumber = 2332;
        return _this;
    }
    students.prototype.get = function () {
        console.log("kaviiiiiiiii");
    };
    students.prototype.getvalue = function () {
        console.log("jobbb");
    };
    return students;
}(Student));
var stud = /** @class */ (function (_super) {
    __extends(stud, _super);
    function stud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 6;
        return _this;
    }
    stud.prototype.getvalue = function () {
        console.log("jobbb");
    };
    return stud;
}(Student));
var stu = new students();
var st = new stud();
console.log(stu.name);
console.log(stu.phnumber);
stu.get();
console.log(st.age);
var Products = /** @class */ (function () {
    function Products() {
        this.Item_name = "paste";
        this.Price = 99;
    }
    Products.prototype.discount = function () {
        console.log("Aadi discount is available");
    };
    return Products;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Amount_Recieved = 21;
        return _this;
    }
    return Product;
}(Products));
var product = new Product();
product.discount();
console.log(product.Price);
console.log(product.Amount_Recieved);
var Payment = /** @class */ (function () {
    function Payment(amount) {
        this.amount = amount;
    }
    Payment.prototype.paymethod = function () {
        console.log("the Received amount is ".concat(this.amount, " "));
    };
    return Payment;
}());
var Credit_card_payment = /** @class */ (function (_super) {
    __extends(Credit_card_payment, _super);
    function Credit_card_payment(amount, pin_Number) {
        var _this = _super.call(this, amount) || this;
        _this.Pin_Number = pin_Number;
        return _this;
    }
    Credit_card_payment.prototype.paymentInfo = function () {
        console.log("".concat(this.Pin_Number, " payment received successful"));
    };
    return Credit_card_payment;
}(Payment));
var Payment_card_payment = /** @class */ (function (_super) {
    __extends(Payment_card_payment, _super);
    function Payment_card_payment(amount, card_Number) {
        var _this = _super.call(this, amount) || this;
        _this.Card_Number = card_Number;
        return _this;
    }
    Payment_card_payment.prototype.paymentInfo = function () {
        console.log("".concat(this.Card_Number, " payment received successful"));
    };
    return Payment_card_payment;
}(Payment));
var payment = new Credit_card_payment(50000, '02123');
var payment_card_payment = new Payment_card_payment(2000, 'two thousand');
payment.paymentInfo();
payment_card_payment.paymentInfo();
