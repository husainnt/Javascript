const prompt = require('prompt-sync')(); 
function addition(a,b)
{
    return a+b;
}
function mult(a,b)
{
    return a*b;
}
function div(a,b)
{
    if(b==0)
    {
        console.log('Divison by zero not possible')
    }
    else
    {
        return a/b;
    }
}
function sub(a,b)
{
    return a-b;
}
let x=parseFloat(prompt(`Enter First Number: `))
let y=parseFloat(prompt(`Enter Second Number: `))
console.log(`Enter the operation needed to be performed: `)
console.log(`1.Addition`)
console.log(`2.Subtraction`)
console.log(`3.Multiplication`)
console.log(`4.Division`)

let c=parseInt(prompt(`Enter Your Choice(1-4)?`))
switch(c)
{
    case 1:
        console.log(addition(x,y))
        break;
    case 2:
        console.log(sub(x,y))
        break;
    case 3:
        console.log(mult(x,y))
        break;
    case 4:
        console.log(div(x,y))
        break;
    default:
        console.log("Invalid choice! Please choose a number between 1 and 4.");

}
