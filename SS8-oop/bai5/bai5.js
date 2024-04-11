"use strict";
class Department {
    constructor(id, name, employee) {
        this.name = name;
        this.id = id;
        this.employee = employee;
    }
    decribe() {
        console.log(this.id);
        console.log(this.name);
    }
}
let department = new Department(12, "ffr", ["a", "b"]);
department.decribe();
