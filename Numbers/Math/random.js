// Math.random() -> returns random numbers between 0 - 1 [ 0(inclusive) and 1(exclusive)]

// generating 5 random values
console.log("5 random numbers between 0 and 1(exclisive)")
for(let i=0; i<5;i++){
    console.log(`Random Number ${i+1} : ${Math.random()}`);
}

// 5 ranadom numbers between 0 and 5
// random number mulitplied by 5 and then take the floor values\
// and add 1 atlast to make the last limit inclusive

// 10 random numbers between 0 and 5
console.log("10 random numbers between 0 and 5, both inclusive")
for(let i=0; i<10;i++){
    console.log(`Random Number ${i+1} : ${Math.floor(Math.random()*5)+1}`);
}
