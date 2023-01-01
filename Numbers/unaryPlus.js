// unary plus + when used before strings, convert the strings to numbers.
// unary plus - when used before strings, convert the strings to numbers and put a minus infront of the number.
// when used before numbers it has no effet.

let numberString = "88";

let number = +numberString;
let negatedNumber = -numberString;

console.log(numberString,"of TYPE =",typeof numberString);
console.log(number,"of TYPE =",typeof number);
console.log(negatedNumber,"of TYPE =",typeof number);

