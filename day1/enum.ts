enum Month{
    jan=1,feb,march,april,
    may,june,july,aug,
    sep,oct,nov,dec
};
console.log(Month);



function isalpha(month:Month)
{
    let issummer: boolean;
    switch(month)
    {
        case Month.jan: 
        case Month.march:
        case Month.april:
            issummer=true;
            break;
            default:
                issummer=false;
                }
                return issummer;
}
console.log(isalpha(Month.dec));
//small set of closely related fixed values.


enum approval
{
   draft,
   rejected,
   received,
   approved     
}
const response=
{
    id:1,
    status:approval.received
};
if(response.status==approval.approved)
{
    console.log("email send");
}
else{
    console.log("error");
    
}
