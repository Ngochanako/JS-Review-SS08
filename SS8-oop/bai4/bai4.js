"use strict";
class Vehicle {
    constructor(name, year, id) {
        this.name = name;
        this.year = year;
        this.id = id;
    }
    //getter
    get year1() {
        return this.year;
    }
}
let vehicle = new Vehicle("ngoc", 2017, 9);
console.log(vehicle.year1);
console.log(vehicle.name);
console.log(vehicle.id);
