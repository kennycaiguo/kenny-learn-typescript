"use strict";
//泛型函数
function test(a) {
    console.log(typeof a);
}
let dog = {
    name: 'goofy',
    age: 5
};
// console.log(dog)
//泛型类
class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
let pt = new Point(1.1, 2.2, 3.3);
let per = {
    name: 'Brandy',
    age: 30
};
console.log(per);
