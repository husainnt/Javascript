//recursive functions in java script
function power(base,exp)
{
    if(exp==0)
    {
        return base;
    }
    else
    {
        return base*power(base,exp-1);
    }
}
console.log(power(2,2));