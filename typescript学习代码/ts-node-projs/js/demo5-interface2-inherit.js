"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mc = {};
mc.name = 'Jack';
mc.age = 40;
mc.instrument = 'Drum';
mc.toString = function () {
    return `Musician[name:${this.name},age:${this.age},playing:${this.instrument}]`;
};
let xm = {
    id: 1001,
    info: {
        name: 'xiaoming',
        age: 20,
        gender: 'male',
        address: '3 pawsey road,kgn 5',
        marriage: false
    },
    email: 'xiaoming123@hotmail.com'
};
let getDist = (p1, p2) => {
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
};
let pt1 = { x: 3, y: 3 };
let pt2 = { x: 4, y: 4 };
console.log(getDist(pt1, pt2));
let dog = {
    name: 'jiwawa',
    haircolor: 'black'
};
console.log(dog);
