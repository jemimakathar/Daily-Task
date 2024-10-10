// An interface in TypeScript is a way to define the structure of an object, 
// specifying what properties and methods it must have. 
//It serves as a blueprint for objects.
var detail = /** @class */ (function () {
    function detail() {
        this.name = "jemi";
        this.age = 6897;
    }
    return detail;
}());
var details = new detail();
console.log(details.age);
var person = /** @class */ (function () {
    function person(name, age, rollno) {
        this.name = name;
        this.age = age;
        this.rollno = rollno;
        console.log("my name ".concat(this.name));
    }
    return person;
}());
var per = new person("jemi", 23, 43);
var perso = /** @class */ (function () {
    function perso(na, ag, roll) {
        this.na = na;
        this.ag = ag;
        this.roll = roll;
        console.log("my name ".concat(this.roll));
    }
    return perso;
}());
var pers = new perso("jemi", 23, 43);
var Employ = /** @class */ (function () {
    function Employ(empId, empAge, empAdd) {
        this.empId = empId;
        this.empAge = empAge;
        this.empAdd = empAdd;
        console.log("my number is".concat(empId, ",").concat(empAdd));
    }
    return Employ;
}());
var emp = new Employ(1, 12, "abc nagar");
function printUserDetails(user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age, ", Email: ").concat(user.email));
}
var user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
printUserDetails(user);
var format;
format = function (str, isUpper) {
    return isUpper ? str.toUpperCase() : str.toLowerCase();
};
console.log(format("jemi", true));
var st = {
    name: "jemi",
    age: 30,
    address: "abc nagar"
};
function Students(stu) {
    console.log(stu.name);
    console.log(stu.age);
    if (stu.address) {
        console.log("your aaaa");
    }
}
st.age = 35;
Students(st);
var myCar = {
    brand: "Toyota",
    model: "Corolla",
};
myCar.model = "Camry";
// myCar.brand = "Honda";   brand is readonly
