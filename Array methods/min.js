/**
 *  to find minimum element in an array, we dont have a direct method,
 *  2 ways of achieving this is,
 *      -> we have to use, Math.min.apply(null, arrayName) 
 *      -> using spread operator, Math.min(...arrayName)
 */

 let numbers = [1,-99,108,54,2,5,-1,201];

 // finding maximum item,
 
 let maximum = Math.min.apply(null,numbers);
 let maximumUsingSpreadOp = Math.min(...numbers);
 
 console.log("Maximum of numbers :",maximum);
 console.log("Maximum of numbers using spread operator:",maximumUsingSpreadOp);
 