// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
function isEven(a) {
    if (a < 0) {
        // Handle negative numbers by converting to positive
        a = Math.abs(a);
    }
    if (a === 0) {
        return true; 
    } else if (a === 1) {
        return false; 
    } else {
        return isEven(a - 2);
    }
}

console.log(isEven(50)); 
console.log(isEven(75)); 
console.log(isEven(-1)); 
