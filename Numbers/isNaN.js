/**
 *  Sometimes there are chances when we endup with a value called NaN, Not a Number.
 *  Sitautions like , 
 *      10 - "soorya",
 *      10 * "soorya",
 *      10 / "soorya"
 *      we get NaN value.
 * 
 *  We have to be careful of this and make validations to proceed only when we have a value
 *  which is not a NaN,
 *  
 *  IMPORTANT !!!!!
 *  NaN values cannot be compared using operators !!! (123 ==Nan) or (NaN === NaN) wont work
 * 
 *  We must use isNan(value) method to achieve this.
 *  the value argument is converted to a number and then checked for NaN.
 * 
 */

let number = 123;

console.log(isNaN(number)); // false as it is a number

console.log()

console.log(isNaN(123 - "abc")); // true
console.log(isNaN(123 / "abc")); // true
console.log(isNaN(123 ** "abc")); // true
console.log(isNaN(123 + "abc")); // true because isNaN("123abc") is not a number
console.log(isNaN(NaN)) // true, a direct NaN value as argument

console.log(isNaN(15.98)) // false
