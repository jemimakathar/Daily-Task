//class is a instance of object.

class Employeee//class name
{
name:string='jemi';
age:number=21;
address:string="abc";
}

const employee =new Employeee();
console.log(employee.name,employee.age);


// using constructor
class Player
{
    name:string;
    age:number;
    id:number;

constructor(name:string,age:number,id:number)
{
    this.name=name;
    this.age=age;
    this.id=id;
}
}
const player=new Player('jemi',20,4);
console.log(player.name);
console.log(player.id);




class Jobs
{
    address:string="abc";
    id:number=21;

    display()//methods
    {
        console.log(this.address,this.id);
        
    }

}
const job=new Jobs;
job.display();




