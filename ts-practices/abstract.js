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
//abstract class is a class that cannot be instantiated directly.
//abstract class la value kuduka mudiyathu enna instance create panna mudiyathu
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
