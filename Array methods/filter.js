// filter() methos filters an array and produces a new array based oon the filtering condition
//  NOTE : filter() DOES NOT  change the arrau IN PLACE, it creates a NEW ARRAY

const { number } = require("yargs")

let numbers = [2,-10,80,-3,-8,50,-999,10000,33,12,67,87]
let size = numbers.length // length of array

// filtering only positive numbers
let positiveNumbersOnly = numbers.filter( (item)=> {
    return item>0;
})

// filtering only negative numbers
let negativeNumbersOnly = numbers.filter( (item) => {
    return item<0;
})

// filtering positive odd numbers
let positiveOddNumbers = numbers.filter( (item)=> {
    return (item>0 && item%2==1);
})

// note that, in the call back, the arrow function, if the arrow function body is of only oneline then, the return keyword and curly braces can be omitted.
// filtering positive even numbers
let positiveEvenNumbers = numbers.filter((item)=> (item>0 && item%2==0))

console.log(`Positive Numbers : ${positiveNumbersOnly}`);
console.log(`Negative Numbers : ${negativeNumbersOnly}`);
console.log(`Positive Odd Numbers : ${positiveOddNumbers}`);
console.log(`Positive Even Numbers : ${positiveEvenNumbers}`);
console.log(`Finally, the actual array, Numbers : ${numbers}\nNote: the values are not changed in the actual array.`);

// Note: Interpolation, logs the array without square brackets.

// using seperator in console.log will log array with the square brackets
console.log("Message and Array with brackets (using seperator ',')",numbers);

// using concatenation, converts the array to string and then logs it without square brackets.
console.log("Message and Array without brackets (using '+') " + numbers)
