"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get width1() {
        return this.width;
    }
    set width1(width) {
        this.width = width;
    }
    get height1() {
        return this.height;
    }
    set height1(height) {
        this.height = height;
    }
    chuvi() {
        console.log((this.height + this.width) * 2);
    }
    dientich() {
        console.log(this.width * this.height);
    }
}
let retangle = new Rectangle(4, 5);
console.log(retangle.height1, retangle.width1);
retangle.chuvi();
retangle.dientich();
retangle.width1 = 7;
retangle.height1 = 8;
console.log(retangle.height1, retangle.width1);
retangle.chuvi();
retangle.dientich();
