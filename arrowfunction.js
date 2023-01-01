// arrow function for ADDING TWO NUMBERS

let addTwoNumbers = (numOne,numTwo) => {
    return numOne + numTwo;
}

let addThreeNumbers = (numOne, numTwo,numThree) => (numOne + numTwo + numThree);

/*  
    In the above function definition,
    if the function body has ONLY 1 line of code,
    it can be directly specified without curly braces,
    and  NO need of RETURN keyword because
    by default the arrow function returns its body.
*/

// funtion invocations/calls
console.log(addTwoNumbers(16,2));
console.log(addThreeNumbers(5,5,5));


// ARROW FUNCTIONS, DO NOT have, 'function' keyword, instead of that we use '=>' after the parameters
