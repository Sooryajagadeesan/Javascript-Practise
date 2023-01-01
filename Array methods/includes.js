//  includes()
// To check whether an itemis present in the given array or not. It returns (true or false)

let numbers = [10,20,30,40,50];

if (numbers.includes(30)){
    console.log("30 is PRESENT in the array.");
}else {
    console.log("30 is NOT PRESENT in the array.");
}

if(numbers.includes(-30)){
    console.log("-30 is PRESENT in the array.");
}else {
    console.log("-30 is NOT PRESENT in the array.");
}