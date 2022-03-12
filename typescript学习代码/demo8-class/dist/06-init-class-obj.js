"use strict";
//初始化顺序,先初始化父类，再初始化子类
class Base {
    constructor() {
        this.name = "base";
        console.log("name: " + this.name);
    }
}
class Derived extends Base {
    constructor() {
        super(); //在子类的构造函数里面必须先调用父类的构造函数
        this.name = "Derived";
        console.log("Name:" + this.name);
    }
}
let d = new Derived(); //name: base
