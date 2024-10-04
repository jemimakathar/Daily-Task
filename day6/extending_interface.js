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
// Parent class creation 
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
// Using the above illustrated interface and class together 
var Person_Details = /** @class */ (function (_super) {
    __extends(Person_Details, _super);
    function Person_Details() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person_Details.prototype.details = function () {
        this.name = "nithuuuuu";
        console.log(this.name);
    };
    return Person_Details;
}(Person));
var object = new Person_Details();
object.details();
// Parent class declaration 
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// Creating a class which will extend 
// the above interfaces 
var Student_Details = /** @class */ (function (_super) {
    __extends(Student_Details, _super);
    function Student_Details() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student_Details.prototype.student1_details = function () {
        this.name = "Apple";
        this.id = 1;
        console.log(this.id + " - " + this.name);
    };
    Student_Details.prototype.student2_details = function () {
        this.name = "Banana";
        this.id = 2;
        console.log(this.id + " - " + this.name);
    };
    return Student_Details;
}(Student));
var student_object = new Student_Details();
student_object.student1_details();
student_object.student2_details();
