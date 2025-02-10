// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean
const prompt=require(`prompt-sync`)()
let a=parseInt(prompt(`Enter the number to be checked: `))
function isEven(a)
{
    if(a===0)
    {
        return true;
    }
    if(a===1)
    {
        return false;
    }
    else
    {
        return isEven(a-2);
    }
}
console.log(isEven(a));