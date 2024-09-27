//Access Modifer            
//1.public 2.private 3.protected(executed only with in the class and sub classes)




//getter
class Student_details{
    public _name:string="divya"
    private _age:number=21
    protected _isstudent:boolean=true

get _name_retrieve/*getter name*/(){
    return this._name
}
}
const student_details=new Student_details
console.log(student_details._name_retrieve); 
//console.log(student_details.age);//age is  private 



class Sub_details extends Student_details{
    get _isstudent_retrieve(){
        return this._isstudent
    }
}
const sub_details=new Sub_details
console.log(sub_details._isstudent_retrieve);