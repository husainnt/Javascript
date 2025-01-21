// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countBs(str) {
    let count = 0;
    for (let char of str) { 
        if (char === 'B') {
            count++;
        }
    }
    return count;
}
console.log(countBs("Beautiful Bountiful Beaches")); 
console.log(countBs("BBBB")); 
console.log(countBs("abcde")); 
//write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
function modfd_countBs(str,c)
{
    let count=0;
    for(let char of str)
    {
        if(char===c)
        {
            count++;
        }
    }
    return count;
}
console.log(modfd_countBs("Beautiful Bountiful Beaches",'a'));