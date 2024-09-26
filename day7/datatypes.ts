//object 
let employe:{name:string,Age:number,address:string}[]=[
    {name:"jemima",Age:20,address:"xyz"},
    {name:"jemi",Age:21,address:"abc"},
]

//import employees from another file
//import {Employee} from "D:\learn\Daily-Task\type"-type alises export from other files;
type Employee={name:string,Age:number,address:string}
let employees:Employee[]=[
    {name:"jemima",Age:20,address:"xyz"},
    {name:"jemi",Age:21,address:"abc"},
];
console.log(employees);

//union
type Employe={name:string|null,Age:number|null|undefined,address:string}
let employee:Employe[]=[
    {name:"jemima",Age:20,address:"xyz"},
    {name:"jemi",Age:21,address:"abc"},
    {name:null,Age:undefined,address:"abc"},
]
console.log(employees);