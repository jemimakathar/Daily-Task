//Create an interface for a fruit with properties like id, name, and color.
// Write a function that takes a fruit ID and uses a switch statement to return the details of the fruit.
// Function to get fruit details based on ID
function getFruit(fruitID) {
    switch (fruitIds) {
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
            return null; // Return null if the ID does not match any fruit
    }
}
// Example usage
var fruitID = 3;
var fru = getFruit(fruitIds);
if (fru) {
    console.log("Fruit ID: ".concat(fru.id, ", Name: ").concat(fru.name, ", Color: ").concat(fru.color));
}
else {
    console.log("Fruit not found.");
}
