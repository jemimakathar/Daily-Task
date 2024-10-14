// Static properties are often used to maintain data or state that is shared among all instances of a class. 
// Instead of each instance having its own copy of the data, a single shared property exists at the class level.



class Details{
    name:string="jem";
    static age:number=78;
    address:string="abc";
    
     static patient_details()
    {
        console.log ("jemiii"); 
    }
}
var details =new Details();
console.log(details.name="jemima");
console.log(details.address="ahsd");
console.log(Details.age=345);

Details.patient_details();




class Vehicle {
    static totalVehicles: number = 0;
    
    constructor() {
        Vehicle.totalVehicles++;
    }
}

const car = new Vehicle();
const bike = new Vehicle();
const cars = new Vehicle();
const bikes = new Vehicle();
console.log(Vehicle.totalVehicles);  








class Payment_Transaction{
  
    static total_no_Transaction:number=0;
    constructor(public name:string,public amount:number)
    {
       Payment_Transaction.total_no_Transaction++;
    }
    process_payment()
    {
            console.log(`Processing payment of $${this.name} for ${this.amount}`);
    }
    static total_number_of_transaction()
    {
        return   Payment_Transaction.total_no_Transaction;
    }
}
var payment1=new Payment_Transaction('jemima',1000);
var payment2=new Payment_Transaction('kaviya',2000);
var payment3=new Payment_Transaction('nithya',3000);
payment1.process_payment();
payment2.process_payment();
payment3.process_payment();
console.log(`Total Transactions: ${Payment_Transaction.total_number_of_transaction()}`);




