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
    address:"abc nagar"
}
interface employ extends emp  // employ another interface
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
