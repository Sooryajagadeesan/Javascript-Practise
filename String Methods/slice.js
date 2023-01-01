// slice(startIndex, stopIndex)
/*
    returns the string from the start index till the (stop index)-1
*/

let proverb = "Aim Higher";

console.log(proverb.slice(0,4)) //'Aim '
console.log(proverb.slice(5,7)) //'ig'
console.log(proverb.slice(2,4)) //'m '

// If the end Index is out of range, then from the start index entire string is logged
console.log(proverb.slice(0,100)) // 'Aim Higher'

// since in the below code, start index is greater than the stop index, javascript does not know what to do and logs an empty line.
console.log(proverb.slice(10,4)) // empty line
console.log(proverb.slice(1,4)) // 'im'

