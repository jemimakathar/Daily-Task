//abstract class is a class that cannot be instantiated directly.
//abstract class la value kuduka mudiyathu enna instance create panna mudiyathu
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

