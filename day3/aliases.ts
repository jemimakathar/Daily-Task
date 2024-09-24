//primitive types

type Name=string;
let firstName: Name;
let lastName: Name;

//Object types
type person={
    name:string;
    age:number;

};
let Person:person={
    name:"jemi",
    age:25
}
console.log(Person.age);

// Union Types
type alphanumeric =string|number;
let input:alphanumeric;
input=100;
console.log(input);
input="jemi";
console.log(input);

//intersection

type person1={
    name:string;
    age:number;
}
type contact={
 email:string;
 phone:number;
}
type intersection=person1&contact;
let join:intersection={
    name:"jemi",
    age:20,
    email:"jemi@gmail.com",
    phone:7810008371
}
console.log(join.age);
