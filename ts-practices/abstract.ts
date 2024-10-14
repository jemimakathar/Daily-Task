//abstract class is a class that cannot be instantiated directly.
//abstract class la value kuduka mudiyathu enna instance create panna mudiyathu
// An abstract class is typically used to define common behaviors for derived classes to extend.
//add additional functionality

abstract class Student
{
    name:string
    phnumber:number
    address:string

    abstract getvalue();//all class should have this method if the type is abstract
}
class students extends Student
{
    name="jemi";
    phnumber= 2332;
    get()
    {
        console.log("kaviiiiiiiii"); 
    } 
    getvalue()
    {
        console.log("jobbb");
    }
}
class stud extends Student
{
    age=6;
    getvalue()
    {
        console.log("jobbb");
    }
}
const stu=new students();
const st=new stud();
console.log(stu.name);
console.log(stu.phnumber);
stu.get();
console.log(st.age);



abstract class Products
{
    Item_name:string="paste";
    Price:number=99;
     discount()
     {
        console.log("Aadi discount is available");
     }
}
class Product extends Products
{
    Amount_Recieved:number=21;
}
var product = new Product();
product.discount();
console.log(product.Price);
console.log(product.Amount_Recieved);





abstract class Payment
{
    constructor(public amount:number)
    {

    }
    abstract paymentInfo():void;
    paymethod()
    {
     console.log(`the Received amount is ${this.amount} `);
    }
}
class Credit_card_payment extends Payment
{
    Pin_Number:string;
    constructor(amount:number,pin_Number:string){
        super(amount);
        this.Pin_Number=pin_Number;
    }
    paymentInfo(): void {
        console.log(`${this.Pin_Number} payment received successful`); 
    }
    
}
class Payment_card_payment extends Payment
{
    Card_Number:string;
    constructor(amount:number,card_Number:string){
        super(amount);
        this.Card_Number=card_Number;
    }
    paymentInfo(): void {
        console.log(`${this.Card_Number} payment received successful`); 
    }
}
var payment = new Credit_card_payment(50000,'02123');
var payment_card_payment =new Payment_card_payment (2000,'two thousand');
payment.paymentInfo();
payment_card_payment.paymentInfo();



