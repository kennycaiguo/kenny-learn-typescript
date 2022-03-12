"use strict";
//类表达式其实就是将一个匿名类赋给一个变量，然后这个变量及可以当作类来使用
let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi,my name is ${this.name},I am ${this.age} years old`);
    }
};
let per = new Person("Jack", 18);
console.log(per);
