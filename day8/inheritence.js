//accessing the parent class property in the derived class
// the derived class can also have extra methods and properties
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
var animal = /** @class */ (function () {
    function animal(name) {
        console.log("".concat(name, " make the sound"));
        this.Name = name;
    }
    animal.prototype.getname = function () {
        return this.Name;
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        var _this = _super.call(this, name) || this;
        console.log("".concat(name, " barks"));
        return _this;
    }
    return dog;
}(animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name) {
        var _this = _super.call(this, name) || this;
        console.log("".concat(name, " barks"));
        return _this;
    }
    return cat;
}(animal));
//access those classes through the child class
var Animal = new animal("all animals");
var Dog = new dog("mani");
console.log(Dog.getname());
var Cat = new cat("leela");
console.log(Cat.getname());
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + "I'm a ".concat(this.jobTitle, ".");
    };
    return Employee;
}(Person));
var employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
