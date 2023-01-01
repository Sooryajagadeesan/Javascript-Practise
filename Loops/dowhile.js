/*  do..while loop is same as the while loop,
    The main difference is the position of the condition check,
    In while loop
        condition is checked AT THE START (Entry-check or Entry-controlled Loop)
    In do..while loop
        consition is checked AT THE END (Exit-check or Exit-controlled Loop)

    Because of the nature of condition checking in do..while loop,
    A do..while loop is EXECUTED ATLEAST ONCE even if the CONDITION is FLASE.
*/


// first 5 mulitiples of 18 using do..while loop
let i = 1;
console.log("First 5 multiples of 18");

do{
    console.log(`18 X ${i} = ${i*18}`);
    i++; // This line is CRUCIAL and AVOIDS us entering into an INFINITE LOOP

}while(i<=5);

// do...while loop to see that it executes atleast once even the condition is false

console.log("\nFalse condition behaviour of do..while loop");

do {
    console.log("\nCondition is 'false' but am logged because it's a do..while loop !!!")
}while(false);
