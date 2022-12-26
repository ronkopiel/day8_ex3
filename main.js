// Write a function that recreates the pattern below.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
function makePattern() {
    let symbol ="";
    for (i=0; i<6; i++) {
        symbol += "*";
        console.log(symbol);
    }
}
makePattern();

function makePatternNestted(){
    let symbol = "";
    for (i=0; i<3; i++) {
        for (j=0; j<=i; j++) {
            symbol += '*';
            console.log(symbol);
        }
    }
}
makePatternNestted();

// Write a function that will print out the multiplication table for the numbers 1 through 10 using nested loops.

function multiplicationTable() {
    for (i = 1; i <= 10; i++) {
        for (let j = 1; j <= i; j++) {
            console.log(`${i}*${j}=${i*j}`);
        }
    }
}
multiplicationTable();