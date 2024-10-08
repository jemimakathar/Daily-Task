// method overriding means creating a same method in parent class. but some of the modifications 
//inside 
//the method.


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