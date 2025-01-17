const prompt=require(`prompt-sync`)()
let a_numb=Number(prompt(`Pick A Number`))
if(!Number.isNaN(a_numb))
{
console.log(`Your Number Is The Square Root of :` + a_numb*a_numb )
}
else
{
    console.log("Hey. Why didn't you give me a number?");

}
