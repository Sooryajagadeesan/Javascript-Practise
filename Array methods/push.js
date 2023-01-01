/* 
    array.push(item) is used to insert an item at the end of array
    it returns the length of the array after inserting the new item
*/

let languages = ["HTML"];


// all the items are pushed into the array below,
languages.push("CSS");
languages.push("Javascript");
languages.push("PHP");

let arrayLength = languages.push("Ruby");

console.log(languages);
console.log("Array length returned by the last push() call :",arrayLength);
console.log() // new line
// easiest way of inserting item at end of array is using the length property

languages[ languages.length ] = "Go"

console.log("After adding an item at the last using the length property");
console.log(languages);
