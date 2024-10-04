//interface another interface = extends
//interface class = implements

//interface in object
interface emp
{
    name:string;
    age:number;
    address:string;
}
const Empolyee:emp=
{
    name:"jemi",
    age:20,
    address:"abc nagar",
   // phone:23343657
}
interface employ extends emp    // employ another interface
{
    phone_number:number;
}
const employees:employ=
{
    name:"jemima",
    age:21,
    phone_number:781802091,
    address:"xyz nagar"
}
console.log(employees);


//interface in functions
function getFullName(person: {
    firstName: string;
    lastName: string;
    age:number;
}) 
{
    return `${person.firstName} ${person.lastName} ${person.age}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age:34,
    addres:"abc nagar"
   
};

console.log(getFullName(person));
