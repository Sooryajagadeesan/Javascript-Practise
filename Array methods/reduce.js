//  reduce() method is used to do some arithmetic operation on the items in array.

let numbers = [10,10,10]

// lets find sum of the elements in the array using reduce()

let sum = numbers.reduce( (currentValue,item)=> {
    return currentValue + item;
},0)

/*  the syntax is

        array.reduce(callback (TempVariable, arrItem)=>{....}, initialValueForTempVariable)

        It returns a value after processing the items as per the given operation.
*/

console.log(`The sum is ${sum}`);
