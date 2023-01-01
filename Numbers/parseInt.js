/*parseInt(string) -> gives the integer in the string 
                      until it encounters an error(non-integral value)
                      otherwise it returns NaN
*/

let numberString = "1234567";
let number = parseInt(numberString);

console.log(numberString,"of TYPE",typeof numberString);
console.log(number,"of TYPE",typeof number);

console.log() // for a new line

console.log(parseInt('18 Hi hello')); // 18
console.log(parseInt('12.56745')); // 12 NOTE that only integral part is taken, to get entire float use parseFloat()

console.log(parseInt('Hi hello 18')); // NaN NOTE the difference between this and above
console.log(parseInt('Hi hello')); // NaN

