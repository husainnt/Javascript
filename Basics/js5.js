//functions in javascript
function square(x)
{
    return x*x;
}
console.log(square(8));
const makeNoise=function()
{
    console.log(`Pling`);
}
makeNoise();
const power = function(base, exp) {
    let t = 0;
    let result = 1; 
    while (t < exp) {
        result *= base; 
        t++;
    }
    return result;
}

console.log(power(2, 10)); 
