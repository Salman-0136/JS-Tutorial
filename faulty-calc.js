/*
    Faulty Calculator which has 10% chance of failure.
*/
let input1 = prompt("Enter first number");
let input2 = prompt("Enter second number");
let operator = prompt("Enter the operator");

let prob = Math.random();

let operation = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(prob > 0.1)
{
    console.log("Prob is:", prob);
    console.log(`${eval(`${input1} ${operator} ${input2}`)}`)
}
else
{
    operator = operation[operator];
    console.log("Prob is:", prob);
    console.log(`${eval(`${input1} ${operator} ${input2}`)}`)
}