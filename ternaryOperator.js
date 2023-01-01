// the conditional operator is similar to if..else or if..else if..else statements

/*
    It is also called as QUESTIONMARK operator (due to its symbol '?:')
    and also  called as TERNARY operator (because it is the 
    only operator that takes 3 operands {atleast 3} )
*/


let isTrue; // a variable whose value is set based on a condition

isTrue = (10 > 5) ? 'yes' : 'no'
console.log(isTrue) // yes

isTrue = (10 < 5) ? 'yes' :'no'
console.log(isTrue) // no
// above two are analogies of if...else statement


// the analogy of if.....else if.....else is
isTrue = (10 < 5) ? 'its 1st condition' : // if()
         (5 < 5) ? 'its 2nd condition' :  // else if()
         (5 <= 5) ? 'its 3rd condition' : // else if()
         'its last statement'             // else


console.log(isTrue) // 'its 3rd condition'


