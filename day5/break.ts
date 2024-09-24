// let products = [
//     { name: 'phone', price: 700 },
//     { name: 'tablet', price: 900 },
//     { name: 'laptop', price: 1200 }
// ]
// for (var i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     if (products[i].price == 900)
//         break;
// }

let item = [
    { name: 'phone', price: 700 },//0 index
    { name: 'tablet', price: 900 },//1 index
    { name: 'laptop', price: 1200 }//2 index
];

let discount = 0;
let product = item[1];

switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}

console.log(`There is a ${discount}% on ${product.name}.`);
