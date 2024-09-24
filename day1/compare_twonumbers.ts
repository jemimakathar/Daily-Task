let compare:(n1:any,n2:any)=>any;
    compare=function(n1:any,n2:any)
    {
       
      if(n1 === n2){
        return true;
      }
      else{
        return false;
      }
    }
    console.log(compare('2',1));
    console.log(compare(2,1));
    console.log(compare(2,2));

