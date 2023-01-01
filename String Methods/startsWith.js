/* 
    startsWith(str) -> returns true if the string starts with the 'str'
                       else returns false
*/

let proverb = "Good things take time !";

console.log(proverb.startsWith('Good'));

// below line returns false, as javascript is case sensitive
console.log(proverb.startsWith('good'));
console.log(proverb.startsWith('javascript'));