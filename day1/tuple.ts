//tuple
let S:[number,string];
S=[108,'kaviya'];
console.log(S);

/* Don't do like this
let z:[string,number];
z=[108,'kaviya'];
console.log(S);*/


let color: [number, number, number] = [255, 0, 0];
console.log(color);


//Optional Tuple Elements

let bgColor, headerColor: [number, number, number?, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255];
console.log(bgColor);
console.log(headerColor);


