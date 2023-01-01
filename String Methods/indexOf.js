// string.indexOf(str) returns the index of a first instance of 'str' in 'string'
// NOTE: If the specified character(s) is not in the string then -1 is returned

let word = "Confidence";

console.log(word.indexOf('C')); // 0
console.log(word.indexOf('o')); // 1
console.log(word.indexOf('n')); // 2
console.log(word.indexOf('f')); // 3
console.log(word.indexOf('fid')); // 3, as 'fid' is a string, the index of first character in string is returned
console.log(word.indexOf('denc')); // 5

console.log(word.indexOf('X')); // -1, as 'X' is not in word string.