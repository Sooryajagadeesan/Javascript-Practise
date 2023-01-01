// map() method is used to create a new array by applying a function on all elements of the exisiting array

// NOTE: map() DOES NOT change the elements IN PLACE

let numbers = [1,2,3,4,5,6,7,8]

// lets create an array of squares of elements in numbers array

let squaredNumbers = numbers.map( (item)=> {
    return item**2;
})

// arrays with value added 10 to the existing values

let numbersIncrementedBy10 = numbers.map((item)=> (item+10))


console.log("Actual numbers array",numbers);
console.log("Squared numbers array",squaredNumbers);
console.log("Array values after incrementing value by 10",numbersIncrementedBy10);