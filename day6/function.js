function addi(a, b) {
    return a + b;
}
console.log(addi(10, 30));
//implicit 
var sums = function (x, y) {
    return x + y;
};
console.log(sums(90, 1));
//explict 
var Additions = function (n, m) {
    return (n + m);
};
console.log(Additions(25, 50));
//union
//function with optional parameters
var Sum = function (n, m, o) {
    if (typeof o === "number") {
        return n + m + o;
    }
    console.log(o); // we have to whether the value is declared.if not declare it will return undefined
    return (n + m);
};
console.log(Sum(25, 50, "jemi"));
console.log(Sum(25, 50, 12));
console.log(Sum(25, 50)); //optional ? operator is used.
//functions with default value
var Addi = function (n, m, o) {
    if (o === void 0) { o = 10; }
    if (typeof o === "number") {
        return n + m + o;
    }
    console.log(o);
    return (n + m);
};
console.log(Addi(25, 50, "jemi"));
console.log(Addi(25, 50, 12));
console.log(Addi(25, 50));
//using map
console.log("------------");
var heros = ["kavi", "jemima", "jemi", 1]; //also give[1,2,3,4]
heros.map(function (hero) {
    return 'hero is ${hero}';
});
console.log(heros);
console.log("------------");
function getValue(myval) {
    if (myval > 5) {
        return true;
    }
    return "ok";
}
console.log(getValue(10));
console.log("------------");
//1.named function
// function- zero parameter
function info() {
    console.log("helloooo");
}
info();
console.log("------------");
//function- parameter and argument passing 
function add(a, b) {
    console.log(a + b);
}
add(1, 2);
console.log("------------");
//A function type has two parts: parameters and return type
function user(username) {
    if (username === "jemi") {
        return true;
    }
    else {
        return false;
    }
}
console.log(user("jemi"));
console.log("-----------");
//2.Anonymous function- without function name- storing function in a variable
var k = function () {
    console.log("jemima");
};
k();
console.log("---------");
function echo(message) {
    console.log(message.toUpperCase());
}
echo("JemI");
