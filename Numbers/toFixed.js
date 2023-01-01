// number.toFixed(value) - is used to fix the number of digits after a decimal point, it returns the ROUNDED VALUE.

let number = 12.2345678;

console.log(number.toFixed(2)); // 12.23
console.log(number.toFixed(3)); // 12.235 NOTE the rounded last digit after decimal point
console.log(number.toFixed(4)); // 12.2346 NOTE the rounded last digit after decimal point
console.log(number.toFixed(5)); // 12.23457 NOTE the rounded last digit after decimal point
console.log(number.toFixed(6)); // 12.234568 NOTE the rounded last digit after decimal point
console.log(number.toFixed(10)); // 12.2345678000 NOTE the extra 0's

