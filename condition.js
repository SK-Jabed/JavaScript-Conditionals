/**
 * If you buy food for me, then I will come...
 * If the shirt's price is less than 600, I will buy it...
 * ---------------------------------
 * ***** STRUCTURE *****
 * if (condition) {
 *     execute code if condition above is true
 * }
 * else (condition) {
 *     execute code if condition above is false 
 * }
 * ---------------------------------
 * if (condition) {
 *     console.log(); 
 * }
 * else if (second condition) {
 *     console.log();
 * }
 * else {
 *     console.log();
 * }
*/
if (6 < 9) {
    console.log("Six is the small number");
}
else {
    console.log("Six is not the small number");
}


const shirtPrice = 600;

if (shirtPrice <= 600) {
    console.log("I will buy the shirt");
}
else {
    console.log("I will not buy the shirt");
}


const weight = 20;

if (weight < 20) {
    console.log("I will carry it by myself");
}
else {
    console.log("I will rent a rickshaw");
}