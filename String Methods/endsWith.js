/* 
    endsWith(str) -> returns true if the string ends with the 'str'
                       else returns false
*/

let proverb = "The Sky is the only limit";

console.log(proverb.endsWith('limit'));
console.log(proverb.endsWith('t'));

// below line returns false, as javascript is case sensitive
console.log(proverb.endsWith('Limit'));
console.log(proverb.endsWith('The'));