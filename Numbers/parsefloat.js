/*
    parseFloat(string) -> gives the floating number in the string 
                      until it encounters an error(non-integral value)
                      otherwise it returns NaN
*/

let numberString = "18.1818181818";
let number = parseInt(numberString);

console.log(numberString,"of TYPE",typeof numberString);
console.log(number,"of TYPE",typeof number);

console.log() // for a new line

console.log(parseInt('88.56 Hi hello')); // 88.56
console.log(parseInt('18 Hai')); // 18.0 NOTE that integers are considered as integers, parseFloat() is safe and can aslo be used for parseInt()

console.log(parseInt('Hi hello 18')); // NaN NOTE the difference between this and above
console.log(parseInt('Hi hello')); // NaN

