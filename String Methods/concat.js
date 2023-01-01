// str1.concat(str2) -> concatenates str2 with str1

// NOTE : It DOES NOT modify str1 inplace. 

let proverbFirstHalf = "All is Well, ";
let proverbSecondHalf = "That ends Well";

console.log(proverbFirstHalf.concat(proverbSecondHalf));

// see that the str1 remains the same.
console.log(proverbFirstHalf);

// see that the str2 also remains the same.
console.log(proverbSecondHalf);