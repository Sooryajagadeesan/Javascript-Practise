// for...in loop is specifically used for traversing OBJECTS.


// simple user object
let user1 = {
    name : "Soorya",
    age : 20,
    Address : "Coimbatore, Tamil Nadu"
}

// traversing an object using for..in loop
console.log("This syntax logs only the property names (only keys)");
for(let prop in user1) {
    console.log(prop);
}

// syntax for logging both key and values
console.log("\nThis synatx logs both keys and values");
for(let key in user1){
    console.log(`${key}  : ${user1[key]}`);
}

