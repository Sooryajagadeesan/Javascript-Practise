/* 
    array.shift(item) is used to remove an item at the front of array
    it returns the removed item.
*/

let languages = ["Rust","HTML","CSS","Javascript","PHP","B"];

console.log("Initial array :",languages);

let lastItem = languages.shift();

console.log("After popping :",languages);
console.log("Removed item :",lastItem);
