// class is a template for objects

class Car {
    constructor(nameValue,modelValue) {
        this.name = nameValue; // creating name attribute in a class with passed argument
        this.model = modelValue;
    }
}

// creating objects for the class
let swift = new Car("Swift","2016");
let innova = new Car("Innova","2014");

// logging
console.log("Car 1\n",swift);
console.log("Car 2\n",innova);
