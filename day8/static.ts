// static cannot be access through instance it can be access with class name

// creating a class and keep the age a static

class Patient_Details{
    name:string="jemi"
    static age:number=12;

    display_name(){
        console.log(this.name);
    }
    display_age(){
        console.log(Patient_Details.age);    //the age can be accessed by the class name rather than the this keyword
        
    }
}
const patient_details=new Patient_Details
patient_details.display_name();
//Patient_Details.display_age();             //the age is static thus we cannot access it by the instance





class Details{
    name:string="jemima"
    static age:number=22;

    display_name(){
        console.log(this.name);
        
    }
    static display_age(){
        console.log(Details.age);       //the age can be accessed by the class name rather than this keyword  
    }
}
const Patient_details=new Details
Patient_details.display_name();
Details.display_age();                 //accessing the age directly using the class name

