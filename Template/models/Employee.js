class Employee {

    constructor(id, firstName, lastName, roleId, managerId)  {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }

    getId(){
        return console.log(`id: ${this.id}`)
    }

    getfirstName(){
        return console.log(`id: ${this.firstName}`)
    }
    getLastName(){
        return console.log(`id: ${this.lastName}`)
    }

    getRoleId(){
        return console.log(`id: ${this.roleId}`)
    }

    getManagerId(){
        return console.log(`id: ${this.managerId}`)
    }


}
module.exports = Employee;