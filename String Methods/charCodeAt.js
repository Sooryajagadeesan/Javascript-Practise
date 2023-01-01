// charCodeAt(index) -> returns the UNICODE of a character in a string at a given index.

let testString = "abcABC"


console.log("Unicode values of characters in the given string,\n");
for(let i = 0; i<testString.length;i++){
    console.log(`Unicode value of '${testString[i]}' is ${testString.charCodeAt(i)}`);
}