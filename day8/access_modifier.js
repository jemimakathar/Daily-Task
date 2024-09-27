//Access Modifer            
//1.public 2.private 3.protected(executed only with in the class and sub classes)
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
//getter
var Student_details = /** @class */ (function () {
    function Student_details() {
        this._name = "divya";
        this._age = 21;
        this._isstudent = true;
    }
    Object.defineProperty(Student_details.prototype, "_name_retrieve", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Student_details;
}());
var student_details = new Student_details;
console.log(student_details._name_retrieve);
//console.log(student_details.age);//age is  private 
var Sub_details = /** @class */ (function (_super) {
    __extends(Sub_details, _super);
    function Sub_details() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Sub_details.prototype, "_isstudent_retrieve", {
        get: function () {
            return this._isstudent;
        },
        enumerable: false,
        configurable: true
    });
    return Sub_details;
}(Student_details));
var sub_details = new Sub_details;
console.log(sub_details._isstudent_retrieve);
