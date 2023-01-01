// str.split(criteria) -> splits str based on the given criteria.

// NOTE : after splitting it returns the strings in an ARRAY !

let proverb = "No pain No Gain";

console.log(proverb.split()); // no criteria, so entire string is put in an array and array is returned
console.log(proverb.split(' ')); // space, so string is splitted by space and array is returned
console.log(proverb.split('')); // empty quotes, so each character is splitted and array is returned
console.log(proverb.split('a')); // a, so entire string is splitted at 'a' and array is returned