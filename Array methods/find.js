// find() method is used to find an item in an array.

/*
    find() is like filter()
    The only difference is that filter() takes ALL the elements that matches the given condition
    find() takes THE ONLY FIRST item that matches the given condition.

    NOTE:
    if there are NO items that matches the condition, undefined will be returned.
*/

let numbers = [24,65,56,77,63,21];

let firstNumberDivisibleBy7 = numbers.find((item)=> {
    return (item%7==0);
})

let firstNumberdivisibleBy19 = numbers.find((item)=> {
    return (item%19==0);
})

console.log("Actual Array",numbers);
console.log("First Number in array, divisible by 7 is",firstNumberDivisibleBy7);
console.log("First Number divisible by 19 is",firstNumberdivisibleBy19);
// the above line will log undefined because there is no element in array that is divisible by 19

console.log("Bypassing the undefined value in the above log, using a simple condition check");
// we can bypass the undefined output by,
if (firstNumberdivisibleBy19 == undefined){
    console.log("OOPS ! There is no number that is divisible by 19");
}