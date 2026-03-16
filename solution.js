// Problem 1: The Strict Type Checker
function checkVariable(input) {
    switch (typeof input) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "bigint":
            return "bigint";
        case "undefined":
            return "undefined";
        case "object":
            return "object"; // covers null and objects
        default:
            return "unknown";
    }
}


// Problem 2: Secure ID Generator
function generateIDs(count) {
    const ids = [];

    for (let i = 0; i < count; i++) {
        if (i === 5) {
            continue; // skip number 5
        }
        ids.push(ID-${i});
    }

    return ids;
}


// Problem 3: The Functional Sum
function calculateTotal(...numbers) {

    numbers.forEach(num => {
        if (typeof num !== "number") {
            throw new TypeError("Invalid input: All arguments must be numbers");
        }
    });

    return numbers.reduce((total, num) => total + num, 0);
}


// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {

    return playerList
        .filter(player => player.score > 😎
        .map(player => player.name)
        .join(", ");
}


// Problem 5: The Private Inventory
class Item {

    #discount = 0.1;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}


// Problem 6: Robust Division
function safeDivide(a, b) {

    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    } catch (error) {

        return error.message;

    } finally {

        console.log("Operation attempted");

    }
}

console.log(checkVariable(10));
console.log(generateIDs(7));
console.log(calculateTotal(1,2,3,4));

const players = [
    {name: "Alice", score: 10},
    {name: "Bob", score: 5},
    {name: "Carl", score: 9}
];

console.log(getTopScorers(players));

const item = new Item("Laptop", 1000);
console.log(item.finalPrice);

console.log(safeDivide(10,2));
console.log(safeDivide(10,0));
