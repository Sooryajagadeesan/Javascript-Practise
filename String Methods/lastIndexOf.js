// string.lastIndexOf(str) returns the index of a last instance of 'str' in 'string'
// NOTE: If the specified character is not in the string then -1 is returned

let word = "MalayalaM";

console.log(word.lastIndexOf('M')); // 8, from the last.
console.log(word.lastIndexOf('a')); // 7, from the last.
console.log(word.lastIndexOf('l')); // 6, from the last.

console.log(word.indexOf('X')); // -1, as 'X' is not in word string.