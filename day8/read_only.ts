class Employee_details1{
    readonly _name:string="kavin" //readonly is used in the _name
    _id:number

get emp_name(){
    return this._name
}
}
const employee_details1=new Employee_details1
console.log(employee_details1.emp_name);





class Personn {
    readonly name: string;
    readonly age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    // Method to display the person's info
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const personn = new Personn("Alice", 30); 
personn.displayInfo();