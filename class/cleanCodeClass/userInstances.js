// here we will instatiate the User class

// importing the User class

let User = require("./user.js");

// creating objects

let user1 = new User("Soorya", "J", "soorya@js.dev",["C","Python","HTML","CSS","Javascript"]);
let user2 = new User("John", "Doe", "doe@js.dev",["Adobe", "Figma"]);


console.log("User 1 :\n",user1);
console.log("User 2 :\n",user2);


console.log("\nGreet message for User 1 :",user1.greet());
console.log("\nGreet message for User 2 :",user2.greet());

console.log("\nSkills of User 1 :",user1.getSkills());
console.log("\nSkills of User 2 :",user2.getSkills());
