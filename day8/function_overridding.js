// method overriding means creating a same method in parent class. but some of the modifications 
//inside 
//the method.
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
var bank = /** @class */ (function () {
    function bank() {
    }
    bank.prototype.roi = function () {
        return this.rateofInterest;
    };
    return bank;
}());
var bankX = /** @class */ (function (_super) {
    __extends(bankX, _super);
    function bankX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bankX.prototype.roi = function () {
        return this.rateofInterest = 10.4;
    };
    return bankX;
}(bank));
var bankY = /** @class */ (function (_super) {
    __extends(bankY, _super);
    function bankY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bankY.prototype.roi = function () {
        return this.rateofInterest = 13.4;
    };
    return bankY;
}(bank));
var x = new bankX();
console.log(x.roi());
var y = new bankY();
console.log(y.roi());
