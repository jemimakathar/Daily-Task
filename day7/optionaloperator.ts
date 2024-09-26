interface User {
    id: number;
    name: string;
    address?: {
        city?: string;
        country: string;
    };
}
const users: User = { id: 1, name: "Alice", address: { country: "USA" } };
const city = users.address?.city; 
console.log(city); 
const country = users.address?.country; 
console.log(country); 
console.log("---------------------");






interface Review {
    reviewer: string;
    rating: number;
    comment?: string;  
    date?: Date;       
}

interface Product {
    id: number;
    name: string;
    price: number;
    reviews?: Review[]; 
}
const product: Product = {
    id: 1,
    name: "Smartphone",
    price: 699,
    reviews: [
        { reviewer: "Alice", rating: 5, comment: "Great phone!" },
        { reviewer: "Bob", rating: 4,date:new Date(2003,12,4)} // Comment is optional
    ]
};
const firstReviewComment = product.reviews?.[0]?.comment;
console.log(firstReviewComment); // Output: "Great phone!"

const secondReviewComment = product.reviews?.[1]?.date; 
console.log(secondReviewComment); 

