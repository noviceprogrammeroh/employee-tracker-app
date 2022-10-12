
class Role {

    constructor(id, title, salary, department_id) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;

    }

    getId(){
        return console.log(`id: ${this.id}`)
    }

    getTitle(){
        return console.log(`id: ${this.title}`)
    }
    getSalary(){
        return console.log(`id: ${this.salary}`)
    }


    getDepartmentId(){
        return console.log(`id: ${this.department_id}`)
    }

}