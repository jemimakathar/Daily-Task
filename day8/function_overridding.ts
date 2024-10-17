// method overriding means creating a same method in parent class. but some of the modifications 
//inside 
//the method.

//same name and parameter list as the one in the parent class.


class bank{
    rateofInterest: number;

    roi(): number{
        return this.rateofInterest;
    }
}
class bankX extends bank{
    roi(): number{ //method overriding
        return this.rateofInterest=10.4;
    }
}
class bankY extends bank{
    roi(): number{ //method overriding
        return this.rateofInterest=13.4;
    }
}

let x= new bankX();
console.log(x.roi());

let y= new bankY();
console.log(y.roi());








class Employee {
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    calculateSalary(bonus: number): number {
        return this.baseSalary + bonus;  
    }
}

class Manager extends Employee {
    calculateSalary(bonus: number): number {
        const managerBonus = bonus * 2; 
        return this.baseSalary + managerBonus;
    }
}

class Developer extends Employee {
    calculateSalary(bonus: number): number {
        const devBonus = bonus * 1.5; 
        return this.baseSalary + devBonus;
    }
}
const emp = new Employee('John', 50000);
console.log(`${emp.name}'s Salary: $${emp.calculateSalary(5000)}`); 

const manager = new Manager('Alice', 80000);
console.log(`${manager.name}'s Salary: $${manager.calculateSalary(5000)}`);  

const developer = new Developer('Bob', 70000);
console.log(`${developer.name}'s Salary: $${developer.calculateSalary(5000)}`); 
