//  some() method checks whether some of the items in an array satisfies the given condition
//  it returns either true or false based on the condition satisfied or not

let numbers = [2,4,6,8,10,-1];

// lets check for any negative number in numbers array

if (numbers.some((item)=> { return (item<0); })){
    console.log(`There is/are negative number(s) in the array`);
} else {
    console.log(`There is/are NO negative number(s) in the array`);
}
