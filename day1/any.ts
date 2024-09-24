let result:any;
result=1;
console.log(result)
result="jemima"
console.log(result);
result=[2,3,2,3];
var resul=result.reduce((a:number,b:number)=>a+b,0)
console.log(resul);



const json ='{"latitute":1.23,"longitude":23.5}';
const ans=JSON.parse(json);
console.log(ans);

var res: any;
res= 10.7;
res=res.toFixed();
console.log(res);





var add;
add = function (a, b) {
    return (a + b);
};
console.log(add(22, 78));
