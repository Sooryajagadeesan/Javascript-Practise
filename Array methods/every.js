// every() method is similar to some() but it checks whether ALL THE ELEMENTS in the array satisfies the given condition or not
// it returns either true or false

let numbers = [100,90,80,70,60,20,30,40,50];

// checking for all items in array divisible by 10

if( numbers.every((item)=> (item%10==0)) ) {
    console.log("All elements in the array are divisible by 10");
}else {
    console.log("All elements in the array are NOT divisible by 10");
}
