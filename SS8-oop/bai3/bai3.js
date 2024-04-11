"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
}
let employee = new Employee("ngoc", "A", "030893585");
employee.printInfo();
