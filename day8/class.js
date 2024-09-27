//class is a instance of object.
var Employeee //class name
 = /** @class */ (function () {
    function Employeee() {
        this.name = 'jemi';
        this.age = 21;
        this.address = "abc";
    }
    return Employeee;
}());
var employee = new Employeee();
console.log(employee.name, employee.age);
// using constructor
var Player = /** @class */ (function () {
    function Player(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    return Player;
}());
var player = new Player('jemi', 20, 4);
console.log(player.name);
console.log(player.id);
var Jobs = /** @class */ (function () {
    function Jobs() {
        this.address = "abc";
        this.id = 21;
    }
    Jobs.prototype.display = function () {
        console.log(this.address, this.id);
    };
    return Jobs;
}());
var job = new Jobs;
job.display();
