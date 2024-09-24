//Create an interface for a fruit with properties like id, name, and color.
// Write a function that takes a fruit ID and uses a switch statement to return the details of the fruit.

//interface- It holds various type of property with different data type

interface Fruit {
    id: number;
    name: string;
    color: string;
}

function getFruitDetails(fruitId: number): Fruit | null {
    switch (fruitId) {
        case 1:
            return { id: 1, name: "Apple", color: "Red" };
        case 2:
            return { id: 2, name: "Banana", color: "Yellow" };
        case 3:
            return { id: 3, name: "Grapes", color: "Purple" };
        case 4:
            return { id: 4, name: "Orange", color: "Orange" };
        case 5:
            return { id: 5, name: "Kiwi", color: "Brown" };
        default:
            return null; 
    }
}

const fruitId = 3;
const fruit = getFruitDetails(fruitId);

if (fruit) {
    console.log(`Fruit ID: ${fruit.id}, Name: ${fruit.name}, Color: ${fruit.color}`);
} else {
    console.log("Fruit not found.");
}
