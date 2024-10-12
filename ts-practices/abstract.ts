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

