// this keyword is USED inside an object that refers to THAT OBJECT ITSELF

let yourAssistent = {
    name : "Soorya",
    job : "assistent",
    work : "logging values to console",
    doWork : function(){
        console.log(this) // this refers to the current OBJECT you are working with
        console.log(yourAssistent) // same as above line

        console.log(this.name) // prints value of name key in this OBJECT
        console.log(yourAssistent.name) // same as the above line 

        console.log("Completed my work, Bii-bii")
    }
}

// invocking the doWork() method inside the above object
yourAssistent.doWork()