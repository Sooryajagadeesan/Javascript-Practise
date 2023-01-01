/* 
    arrayName.sort(comparatorFunction)
    By default, the sort() sorts the items considering the items as STRINGS,

    to override this we want to specify a comparator function, to tell sort() to
    consider the items as numbers.

    NOTE : This method modifies the items IN PLACE (changes in the actual array).
*/

let numbers = [56,-89,43,123,100,32,23,1000,5,1,-1,0];

// comparator for ascending sort

function ascendingSort(num1, num2){
    return num1 - num2;
}
// comparator for desceding sort

function descendingSort(num1, num2){
    return num2 - num1;
}

// lets sort this numbers array
console.log("Sort in ascending order :",numbers.sort(ascendingSort));
console.log("Sort in descending order :",numbers.sort(descendingSort));
console.log("Actual Array :",numbers); // NOTE: This line tells that sort() modifies the array IN PLACE

