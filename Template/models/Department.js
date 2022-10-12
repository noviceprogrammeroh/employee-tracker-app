class Department {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    getId(){
        return console.log(`id: ${this.id}`)
    }

    getName(){
        return console.log(`id: ${this.name}`)
    }
  
}

module.exports = Department;