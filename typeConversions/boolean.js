// Boolean(value) is used to convert the value to boolean value (either true or false)

console.log(Boolean(10)); // true
console.log(Boolean(-20)); // true
console.log(Boolean("Hai")); // true

console.log() // empty line

/* NOTE all the below TAKE Boolean false, 
    numerical 0,
    empty string,
    null,
    undefined,
    NaN
*/
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false 
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false