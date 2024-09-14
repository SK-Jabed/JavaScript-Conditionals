var burgerPrice = 250;

if (burgerPrice > 500) {
    console.log("Free coke");
}
else {
    console.log("Coke: 30tk");
}

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

