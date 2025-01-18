const prompt = require('prompt-sync')();

console.log('Welcome to the weather guide!');
console.log('What is the weather today?');
console.log('Choose the weather from the list below:');
console.log('1. Rainy');
console.log('2. Sunny');
console.log('3. Cloudy');

let ip = parseInt(prompt('Enter your choice (1-3): '));


if (isNaN(ip) || ip < 1 || ip > 3) {
    console.log('Invalid input. Please enter a number between 1 and 3.');
} else {
    switch (ip) {
        case 1:
            console.log('Remember to carry an umbrella!');
            break;
        case 2:
            console.log('Dress lightly!');
            break;
        case 3:
            console.log('Go outside!');
            break;
        default:
            console.log('Unknown weather type.');
            break;
    }
}
