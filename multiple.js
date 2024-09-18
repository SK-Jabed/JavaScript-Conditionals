const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;


// --------------- SIMPLE CONDITIONS (&&) ------------------
if (salary > 20000 && height > 66) {
    console.log("Su-patro");
}
else {
    console.log("Onno Patro Khuji");
}


// --------------- SIMPLE CONDITIONS (||) ------------------
if (salary >= 25000 || height > 72) {
    console.log("Aso Baba Kobul");
}
else {
    console.log("Vaag Tui Mokbul")
}


// -------------- More and More Conditions -----------------
if (salary > 25000 || height > 72 || isBCS == true) {
    console.log("Eso Baba Kobul");
}
else {
    console.log("Vaag Tui Mokbul");
}


if (salary > 25000 && height > 72 && isBCS == true) {
    console.log("Eso Baba Kobul");
}
else {
    console.log("Vaag Tui Mokbul");
}


// ----------------- COMPLEX CONDITION --------------------
if ((salary > 25000 && hasCar == true) || isBCS == true ) {
    console.log("14 Gosti Raji");
}
else {
    console.log("Dakbo Nako Kaji");
}


if ((salary > 25000 || hasCar == true) && isBCS == true ) {
    console.log("14 Gosti Raji");
}
else {
    console.log("Dakbo Nako Kaji");
}