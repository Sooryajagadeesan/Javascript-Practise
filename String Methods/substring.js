// substring(startIndex,endIndex) is same as slice()

let proverb = "Strike the iron when it is Hot";

console.log(proverb.substring(0,3)); //'Str'
console.log(proverb.substring(3,5)); //'ik'
console.log(proverb.substring(0,100)); //'Strike the iron when it is Hot'

// the below lines when the start index is grater than the stop index, behaves TRICKLY
// it starts form the STOP index and takes (START-STOP) characters.
console.log(proverb.substring(10,3)); // start at 3 and take (10-3) = 7 characters
console.log(proverb.substring(2,3)); // 'r' , only the start index 2