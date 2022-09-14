const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        // To remind me of why using "super" to avoid redundancy.
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.github = github;
    }
    //returing github from input

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";

    }
}
// use for importing Engineer in index
module.exports = Engineer;