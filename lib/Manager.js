const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // this.name = name;
    // this.id = id;
    // this.email = email;
    this.officeNumber = officeNumber;
  }
  //Override employee role to manager
  getRole() {
    return "Manager";
  }
}
// use for importing Manager in index
module.exports = Manager;
