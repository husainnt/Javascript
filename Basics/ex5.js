//Write a function min that takes two arguments and returns their minimum.
const prompt = require('prompt-sync')();

let x = parseInt(prompt("Enter the first number: "));
let y = parseInt(prompt("Enter the second number: "));

function Min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log("The Minimum of the two numbers is: " + Min(x, y));
