/*  replace(strYetToReplace, replacementStr) is used to 
    replace ONLY the FIRST OCCURANCE  
    or all the occurances (using REGEX) of a given string 
    with its replacement string.
*/
let sentence = "Java is the default scripting language for HTML, also Java is very easy to understand !";

// original string
console.log(sentence);

// replaced string, we are replacing 'Java' with 'Javascript',
// NOTE: In this way ONLY THE first occurance is replaced !
console.log(sentence.replace("Java","Javascript"));

// to change all occurances we have to use REGEX syntax
console.log(sentence.replace(/Java/g,"Javascript"));

