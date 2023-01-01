//  while loop is used when we want to iterate a block of statements till a condition is satified

// while loop to print first 10 multiples of 20

let iterationVariable = 1;

console.log("First 10 multiples of 20 are,");
while (iterationVariable <=10) {
    console.log(`20 X ${iterationVariable} = ${20*iterationVariable}`)
    iterationVariable++; // this line is CRUCIAL, if its is not specified we will RUN INTO AN INFINITE LOOP.
}