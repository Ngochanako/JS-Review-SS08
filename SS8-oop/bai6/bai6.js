"use strict";
class Song {
    constructor(name, id, length) {
        this.name = name;
        this.id = id;
        this.length = length;
    }
    get name1() {
        return this.name;
    }
    get length1() {
        return this.length;
    }
    set name1(name) {
        this.name = name;
    }
    set length1(length) {
        this.length = length;
    }
}
let song = new Song("fff", 5, 9);
console.log(song.name1);
song.name1 = "êfhuf";
console.log(song.name1);
