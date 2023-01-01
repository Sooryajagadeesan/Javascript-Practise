// defining a class and exporting it to be available for using in other files


class User {
    // constructor function
    constructor(firstName,lastName, email, skills) {
        this.name = (firstName + " " + lastName).trim();
        this.email = email;
        this.skills = skills;
    }

    // a getter method
    getSkills() {
        return this.skills;
    }

    // a greeting method
    greet() {
        return `Warm Welcome, ${this.name}`;
    }
}

// export the class,

module.exports = User;