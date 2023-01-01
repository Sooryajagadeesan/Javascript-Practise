/* 
    array.unshift(item) is used to insert an item at the front of array
    it returns the length of the array after inserting the new item
*/

let languages = ["HTML"];

console.log("Initial Array :",languages);

// all the items are inserted at front of array using below code,
languages.unshift("CSS");
languages.unshift("Javascript");
languages.unshift("PHP");

let arrayLength = languages.unshift("Ruby");

console.log("After Inserting :",languages);
console.log("Array length returned by the last unshift() call :",arrayLength);
