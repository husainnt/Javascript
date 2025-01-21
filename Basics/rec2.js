// Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find asequence of such additions and multiplications that produces that number?
function findsol(target)
{
    function find(curr,hist)
    {
        if (curr==target)
        {
            return hist;
        }
        else if(curr>target)
        {
            return null;
        }
        else
        {
            return find(curr + 5, `(${hist} + 5)`) ||find(curr * 3, `(${hist} * 3)`);
        }
    }
    return find(1, "1");
}
onsole.log(findSolution(24));