// prompt which show msg
alert("Welcome to our page");

//used to print on browser also used for debugging.
console.log("Alert function is running...")

//used to get input from user.
let a = prompt("Enter a number between 1-10");
console.log("Value of a is:", a);

//if-else statments
let isTrue = confirm("Are you sure you want to leave the page?");
if(isTrue)
{
    console.log("You leave the page.");
}
else
{
    console.log("You are on the page.");
}

//varisables
var a1 = 5; // can be updated and redeclared, scope - global
let a2 = true; // can be updated but not redeclared, scope - block
const a3 = "My name is Salman"; // can't be updated and redeclared, scope - block

//code in which we will find the birthyear of person.
let age = prompt("Enter your age");
const currentYear = 2024;
let birthYear = currentYear - age;
console.log("Your birth-year is:", birthYear);

//objects
const profile = {
    "name": "Salman Shahid",
    "role": "Student|Backend Dev",
    "age": 22,
    "cgpa": 3.3
}
console.log(profile);
profile.salary = 80000; //add new key and its value in the object