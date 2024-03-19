//if-else statments
//program which tells that the number is even or odd
let number1 = 20;
if(number1%2 === 0)
{
    console.log("Even Number");
}
else
{
    console.log("Odd Number");
}

// Arithmetic Operators      |  Assignment Operators  |  Comparison Operators              |  Logical Operators 
// + -> add                 |  x+=2 -> x = x+2;      |  == -> equal to                    |  && -> and (all true)
// - -> subtract            |  x-=2 -> x = x-2;      |  != -> not equal to                |  || -> or (only one true)     
// * -> multiply            |  x*=2 -> x = x*2;      |  === -> equal value and type       |  ! -> not (0->1) 
// / -> divide              |  x/=2 -> x = x/2;      |  !== -> not equal value and type   |  
// % -> modulus(remainder)  |  x%=2 -> x = x%2;      |  > -> greater than                 |
// ** -> exponential(power) |  x**=2 -> x = x**2;    |  < -> less than                    |
// ++ -> increment          |  = -> x = 2;           |  >= -> greater than and equals to  | 
// -- -> decrement          |                        |  <= -> less than and equals to     | 
//                          |                        |  ! -> turnary operator             |
let a = 3;
let b = 2;

console.log(a+b); //5
console.log(a-b); //1
console.log(a*b); //6
console.log(a/b); //1.5
console.log(a%b); //1
console.log(a**b); //9
a++;
console.log(a); //4
b--;
console.log(b); //1

/*We will create a program which will ask the number of subject from student and then we will assign grade 
according to his/her marks using if else statement*/
let marks = 84.5 //prompt("Enter your marks");
let roundedMarks = Math.round(marks);
if(roundedMarks<=100 && roundedMarks>=85)
{
    console.log("Grade is A");
}
else if(roundedMarks<=84 && roundedMarks>=70)
{
    console.log("Grade is B");
}
else if(roundedMarks<=69 && roundedMarks>=60)
{
    console.log("Grade is C");
}
else if(roundedMarks<=59 && roundedMarks>=50)
{
    console.log("Grade is D");
}
else{
    console.log("Grade is F");
}

//Loops
/*
for
for in -> used for keys of an object
for of -> used for vaalues of an object
while 
do while
*/

//for loop
for(let i=0; i<3; i++)
{
    console.log("For loop i value is:", i);
}
//while loop
let i=4;
while(i<=6)
{
    console.log("While loop i value is:", i);
    i++;
}
//do-while loop
let x=0;
do{
    console.log("Do-While loop x value is:", x);
    x++;
}
while(x<=5);
//for-in & for-of loop
const profile = {
    "name": "Salman Shahid",
    "role": "Student|Backend Dev",
    "age": 22,
    "cgpa": 3.3
}
for (const key in profile) {
    console.log(key);
}
for (const iterator of "Salman") {
    console.log(iterator);
}

//functions
//a code in which we will generate a table of random number using functions
function printTable(num)
{
    console.log("Printing table of " + num);
    for(let i=1; i<=10; i++)
    {
        console.log(`${num} x ${i} =`, num*i);
    }
}
printTable(9);

//code of factorial
let number = prompt("Enter number");
let fact=1;
for(let i=number; i>=1; i--)
{
    fact = fact * i;
}
console.log(`Factorial of ${number} is ${fact}.`)

