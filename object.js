/*  objects are KEY:VALUE pairs , similar to 
    'py dictionaries' in appearance and similar to
    'C structures' in accessing,

    Objects can have properties and methods,
*/

let myself = {
    name : "Soorya",
    workingLanguage : "Javascript",
    source : "articles and youTube videos",
    aim : "to become a Developer",
    intro : function () {
        console.log("Hai, I am a hard working developer !");
    }
}

console.log(myself)
console.log(myself.aim)
myself.intro()

/*  key: value pairs
    keys,values can be of numbers,strings,bools etc
    keys and values are seperated by ' : '
    key:value pairs are seperated by ' , '
    The object members are ACCESSED by USING a ' . ' operator or [] notation
*/

// we can change the values by reassigning them,
myself.name ="Soorya Jagadeesan"
console.log(myself)


