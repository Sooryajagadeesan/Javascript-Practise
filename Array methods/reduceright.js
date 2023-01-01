//  reduceRight() method is similar to reduce(), the difference is that it starts its execution from the right end.

let numbers = [10,10,10]

// lets find sum of the elements in the array using reduceRight()

let sum = numbers.reduceRight( (currentValue,item)=> {
    return currentValue + item;
},0)

/*  the syntax is

        array.reduceRight(callback (TempVariable, arrItem)=>{....}, initialValueForTempVariable)

        It returns a value after processing the items as per the given operation.
*/

console.log(`The sum is ${sum}`);
