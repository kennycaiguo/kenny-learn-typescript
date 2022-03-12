"use strict";
//类之间的关系
class MyPoint1 {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
class MyPoint2 {
    constructor() {
        this.x = 1;
        this.y = 1;
    }
}
let mpt = new MyPoint2(); //可以用MyPoint2去实例化MyPoint1的对象，因为这两个类的解构完全一样
//ts中是事实上继承
class Renlei {
    constructor() {
        this.name = 'People';
        this.age = 0;
    }
}
class Employee {
    constructor() {
        this.name = 'People'; //只不过如果使用extends关键字，父类有的属性就不用写，没有就必须写
        this.age = 0;
        this.salary = 1000;
    }
}
let r = new Employee(); //父类类型变量可以接受子类的实例,但是只能使用父类的属性
console.log(r); //Employee { name: 'People', age: 0, salary: 1000 }
