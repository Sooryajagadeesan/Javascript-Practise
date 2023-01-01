/**
 *  Sometimes there are chances when we get values like NaN, Infinity, -Infinity.
 *  Sitautions like , 
 *      10 ** "soorya",
 *      10 / 0,
 *      -10 / 0
 * 
 *  We have to be careful of this and make validations to proceed only when we have a value
 *  which is FINITE,
 *  
 * 
 *  We must use isFinite(value) method to check for a finite value.
 *  the value argument is converted to a number and then checked for NaN.
 * 
 */

 let number = 123;

 console.log(isFinite(number)); // false as it is a number
 
 console.log()
 
 console.log(isFinite(123 - "abc")); // false as it is a NaN
 console.log(isFinite(123 / 0)); // false as it is Infinity
 console.log(isFinite(-123 / 0)); // false as it is -Infinity
 console.log(isFinite(NaN)) // false, a direct NaN value as argument
 console.log(isFinite(Infinity)) // false, a direct Infinity value as argument
 console.log(isFinite(-Infinity)) // false, a direct -Infinity value as argument
 
 console.log(isFinite(15.98)) // true
 
// checks for an Infinity and -Infinity values for variables
//  let a = Infinity;
// let b = -Infinity;
//  console.log(a,b);