var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon");
console.log(fruits);

//for each

let ranks = [1,2,3];
ranks.forEach(function (a,) {
    console.log(a);
});
//multiple for each

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)
function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers);

//mixed types

let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 
console.log(scores);

