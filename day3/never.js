// //example1
// function raiseError(message:string): never {
//     throw new Error(message);
// }
// //example2
// const generateError = (message:string,code:number):never=>{
//     throw {
//         message:message,
//         errorCode:code
//     };
// };
// generateError(`An Error Occured!`,240);
// //example3
// const error=(message1:string):never=>{
//     throw new Error(message1);
// };
// const fail=()=>{
//     return error(`Something went wrong`);
// }
// fail();
// //example4
// const InfinteLoop=():never=>{
//     while(true){
//         console.log(`I'm Infinite Loop`);
//     }
// };
// InfinteLoop();
//example5
// type Shape = "circle" | "square" | "triangle";
// function getArea(shape: Shape): number {
//     switch (shape) {
//         case "circle":
//             return Math.PI * 1 * 1;
//         case "square":
//             return 1 * 1; 
//         case "triangle":
//             return 0.5 * 1 * 1; 
//         default:
//             const exhaustiveCheck: never = shape; 
//             throw new Error(`Unhandled case: ${shape}`); 
//     }
// }
// console.log(getArea("square"));
//example6
// const Add=(a:string|number,b:string|number):string|number=>{
//     if(typeof a==='string'&&typeof b==="string"){
//         return`${a}${b}`;
//     }else if(typeof a==='number'&&typeof b==="number"){
//         return a+b;
//     }else{
//         return 0;
//     }
//     };
//     console.log(`String Concatenation=${Add('abc','pqr')}`);
//     console.log(`Addition of 2 No's=${Add(10,10)}`);
//     console.log(`String Concatenation=${Add('a',10)}`);
//example7
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    else if (typeof padding === "string") {
        return padding + value;
    }
    else {
        throw new Error("Expected string or number,get'".concat(typeof padding, "'."));
    }
}
console.log(padLeft("world", "global"));
console.log(padLeft("world", 5));
