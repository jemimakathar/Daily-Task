//abstract keyword is used in abstarct class
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
var abstract_class = /** @class */ (function () {
    function abstract_class() {
    }
    return abstract_class;
}());
var derived_class = /** @class */ (function (_super) {
    __extends(derived_class, _super);
    function derived_class() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "diya";
        _this.arr = [1, 2, 3, 4];
        _this.address = "abcd nagar";
        return _this;
    }
    return derived_class;
}(abstract_class));
var c1 = new derived_class();
console.log(c1.name);
console.log(c1.arr);
console.log(c1.address);
// create a abstract class "animal" and extend that class in the classes named "cat","dog"
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.getsound = function () {
        return "".concat(this.name, " makes the sound");
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "birds";
        _this.age = 90;
        return _this;
    }
    dog.prototype.getsounds = function () {
        return "".concat(this.name, " are beautiful");
    };
    return dog;
}(animal));
//the name is the abstract property thus the name must be defined  inside the derived class 
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "kavi";
        _this.age = 34.4;
        return _this;
        //the name is the abstract property thus the name must be defined  inside the derived class
    }
    return cat;
}(animal));
var c = new cat;
var d = new dog;
console.log(c.getsound());
console.log(d.getsound());
console.log(d.getsounds());
