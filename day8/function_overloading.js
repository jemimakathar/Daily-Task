//function overloading
function add(l, m) {
    return l + m;
}
var s1 = add(2, 4);
var s2 = add("jemima", "jemi");
var s3 = add(true, false);
var s4 = add(4, "jemi");
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log("---------------");
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
var num = sum(3, 4);
var str = sum("jemi", "kavi");
console.log(num);
console.log(str);
