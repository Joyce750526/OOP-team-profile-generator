const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // returning school from input
  getSchool() {
    return this.school;
  }
  // override employee role to intern
  getRole() {
    return "Intern";
  }
}
// use for importing Intern in index
module.exports = Intern;
