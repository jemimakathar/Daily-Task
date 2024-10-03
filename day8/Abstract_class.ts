//abstract keyword is used in abstarct class

abstract class abstract_class {
    name: string
    age: number
}
class derived_class extends abstract_class {
    name = "diya"
}
const c1 = new derived_class();
console.log(c1.name);


// create a abstract class "animal" and extend that class in the classes named "cat","dog"

abstract class animal{
    name: string
    age: number
    getsound() {
        return `${this.name}makes the sound`
    }
}
class dog extends animal {
    name = "birds"
    age = 90
    //the name is the abstract property thus the name must be defined  inside the derived class 
}
class cat extends animal {
    name = "kavi"
    age = 34.4
    //the name is the abstract property thus the name must be defined  inside the derived class
}

const c = new cat
const d = new dog

console.log(c.getsound());
console.log(d.getsound());