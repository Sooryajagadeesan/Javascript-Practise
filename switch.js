// switch statement  is  an alternative for multiple if...else if....else if........else

let myChoice = 'c';

switch(myChoice){
    case 'a' : console.log("In 'a'")
                break
    case 'b' : console.log("In 'b'")
                break
    case 'c':
    case 'd': console.log("In 'c' or 'd'")
               break
    default : console.log("In 'default'")
}

// NOTE : the DEFAULT  is executed when NONE of the given choices is entered by the user.
// NOTE : the options or cases may need not only be characters or numbers but also be EXPRESSIONS ,VARIABLES 




