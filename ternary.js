/**
 * TERNARY --> Three Parts
 * 
 *   ?    :
 * 
 * condition ? expression1 : expression2
 * 
 * Condition ? Do Something When True : Do Something When False
*/

const age = 16;

// --------------- Normal if-else ---------------
if (age >= 18) {
    console.log("You can vote");
}
else {
    console.log("Ghumai thako babu");
}


const myAge = 18

// --------------- Simple Ternary ---------------
myAge >= 18 ? console.log("Vote Dio") : console.log("Ghumai Thako");


// --------------- Normal if-else ---------------
let price = 500;
const isLeader = false;

if (isLeader === true) {
    price = 0;
}
else {
    price += 100;
}

console.log(price);


// --------------- Simple Ternary ---------------
let shirtPrice = 600;
const isLeader2 = true;

shirtPrice = isLeader2 === true ? price * 50 / 100 : price + 100;

console.log(shirtPrice);


// --------------- OPTIONAL: Semi Advanced Ternary ---------------
let carPrize = 45000000;
const isMinister = true;

if (isMinister === true) {
    if (carPrize >= 40000000) {
        carPrize /= 2;
    }
    else if (carPrize >= 20000000) {
        carPrize = carPrize - carPrize * 25 / 100;
    }
    else {
        carPrize =  carPrize;
    }
}
else {
    carPrize += 15000000;
}

console.log(carPrize);


// --------------- Ternary Operator ---------------
let carPrize2 = 28000000;
const isMinister2 = true;

carPrize2 = isMinister2 === true ? carPrize2 >= 40000000 ? carPrize2 /= 2 : carPrize2 >= 20000000 ? carPrize2 = carPrize2 - carPrize2 * 25 /100 : carPrize2 = carPrize2 : carPrize2 += 15000000;

console.log(carPrize2);


let carPrize3 = 25000000;
const isMinister3 = false;

carPrize3 = isMinister3 === true
    ? (carPrize3 >= 40000000 ? carPrize3 / 2 
        : (carPrize3 >= 20000000 ? carPrize3 * 0.75 : carPrize3))
    : carPrize3 + 15000000;

console.log(carPrize3);