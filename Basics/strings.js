// Strings

/*  
    Strings are values that are enclosed with quotes.
    Javascript allows us ti create strings in 3 different ways,
        -> Single quotes ''
        -> double quotes ""
        -> Back Ticks `` ( TEMPLATE LITERALS )

    Using Back Ticks allows us to inject actual javascipt into the string, this is achieved through a process called STRING INTERPOLATION
*/

let firstName = "Soorya";
let middleName = '';
let lastName = `J`;

// string interpolation
let greetingMessage = `Welcome Mr. ${firstName} ${middleName} ${lastName} !!!!!!`;

console.log(greetingMessage);