// Task - 01
/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var burgerPrice = 250;

if (burgerPrice > 500) {
    console.log("Free Coke");
}
else {
    console.log("Coke: 30tk");
}

// Task - 02 
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
var weight = "65";
var height = "1.72"

var bmi = (weight / (height ** 2));

if (bmi < 18.5) {
    console.log("You are underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight");
}
else {
    console.log("You are obese");
}

// Task - 03 
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var result = 92;

if (result >= 90 && result <=100) {
    console.log("Your Result Grade is: A");
}
else if (result >= 80 && result <= 89) {
    console.log("Your Result Grade is: B");
}
else if (result >= 70 && result <= 79) {
    console.log("Your Result grade is: C");
}
else if (result >= 60 && result <=69) {
    console.log("Your Result Grade is: D");
}
else if (result >= 0 && result <=59){
    console.log("Your Result Grade is: F");
}
else {
    console.log("You Were Absent");
}

// Task - 04
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
var myFriendScore = 69;

if (myFriendScore > 80) {
    console.log("OK, Let's go for a lunch");
}
else if (myFriendScore < 80 || myFriendScore >= 60) {
    console.log("Good luck, next time");
}
else if (myFriendScore < 60 || myFriendScore >=40) {
    console.log("Keep unseen friends massage");
}


// Task - 05
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


// Task - 06
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
