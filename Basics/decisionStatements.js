//  simple decision making

//  odd or even logic

let number = 55;

if (number % 2 == 0) {
    console.log(`${number} is EVEN`);
} else {
    console.log(`${number} is ODD`);
}

// positve and negative numbers in an array
let numbers = [-16,0,20,-76,1000,-54,88]

console.log("\nPositive and negative elements in an array,");
for(let i =0;i<numbers.length;i++) {
    if(numbers[i]>0){
        console.log(`${numbers[i]} is POSITIVE`);
    }else if(numbers[i]<0){
        console.log(`${numbers[i]} is NEGATIVE`);
    }else {
        console.log(`${numbers[i]} is NEITHER POSITIVE NOR NEGATIVE (its 0)`);
    }
}
