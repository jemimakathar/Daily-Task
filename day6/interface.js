//interface another interface = extends
//interface class = implements
var Empolyee = {
    name: "jemi",
    age: 20,
    address: "abc nagar",
    // phone:23343657
};
var employees = {
    name: "jemima",
    age: 21,
    phone_number: 781802091,
    address: "xyz nagar"
};
console.log(employees);
//interface in functions
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName).concat(person.age);
}
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34
};
console.log(getFullName(person));
