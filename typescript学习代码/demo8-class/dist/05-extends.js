"use strict";
//extends子句用于类继承
class BaseAnimal {
    constructor() {
        this.legs = 0;
    }
    eat(food) {
        console.log(`eating ${food}`);
    }
    sound() {
        console.log("sound!!");
    }
}
class Dog extends BaseAnimal {
    constructor() {
        super(...arguments);
        this.legs = 4;
    }
    sound() {
        console.log("wang wang wang!!!");
    }
    fly() {
        console.log("dog can't fly!!!");
    }
}
let dog = new Dog();
console.log(dog);
dog.eat('bone');
dog.fly();
dog.sound();
