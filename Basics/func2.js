//create a function that halves a number and outputs it
const prompt = require('prompt-sync')();
function half(n)
{
    return n/2;
}
 let x=parseInt(prompt(`Enter a number to be halved: `))
console.log(half(x))



