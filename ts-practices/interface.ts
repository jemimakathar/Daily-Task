// An interface in TypeScript is a way to define the structure of an object, 
// specifying what properties and methods it must have. 
//It serves as a blueprint for objects.

//interface another interface - extends
//interface class extends 

//object aah instance use pani create pannanum



//Interface syntax
//without constructor

//--optional  --functional --extending --anonymous --indexable --readonly

interface Details
{
    name:string;
    age:number;
}
class detail implements Details
{
    name="jemi";
    age=6897;
    address:number;
}
const details=new detail();
console.log(details.age);



//with constructor
interface Person
{
    name:string;
    age:number;
}
class person implements Person
{
    name:string;
    age:number;
    rollno:number;
    constructor(name:string,age:number,rollno:number)
    {
        this.name=name;
        this.age=age;
        this.rollno=rollno;
        console.log(`my name ${this.name}`);
    }
    
    
}
const per=new person("jemi",23,43);




//with constructor
interface Persons
{
    na:string;
    ag:number;
}
class perso implements Persons
{
    constructor(public na:string,public ag:number,public roll:number)//public is used to properties will automatically decalred and initalized.
    { 
        console.log(`my name ${this.roll}`);   
    }
}
const pers=new perso("jemi",23,43);




//two interface
interface Employee
{
    empId:number;
    empAge:number;
   
}
interface Employees extends Employee
{
    empAdd:string;
}
class Employ implements Employees
{
    constructor(public empId:number,public empAge:number,public empAdd:string)
    {
        console.log(`my number is${empId},${empAdd}`);   
    }
}
const emp=new Employ(1,12,"abc nagar");


//using functions and object
interface User {
    name: string;
    age: number;
    email: string;
}

function printUserDetails(user: User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);
}

const user: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};

printUserDetails(user);



//using anonmyous in interface
interface Convertcase
{
    (str:string,isUpper:boolean):string;
}
let format:Convertcase;
format=function(str:string,isUpper:boolean):string
{
    return isUpper?str.toUpperCase():str.toLowerCase();
}
console.log(format("jemi",true));


//optional and read only using function
interface Student{
    readonly name:string;
    age:number;
    address?:string;
}
const st:Student={
    name:"jemi",
    age:30,
    address:"abc nagar"
};
function Students(stu:Student):void
{
    console.log(stu.name);
    console.log(stu.age);
    if(stu.address)
    {
        console.log(`your aaaa`);
    }
}
st.age=35;

Students(st);



//object

interface Car {
    readonly brand: string; // Cannot be modified after creation
    model: string;
    year?: number; // Optional property
}

const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
};

myCar.model = "Camry";
// myCar.brand = "Honda";   brand is readonly


















