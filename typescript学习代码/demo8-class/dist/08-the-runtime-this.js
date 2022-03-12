"use strict";
//类运行时中的this
class MyClass {
    constructor() {
        this.name = "MyClass";
    }
    getName() {
        return this.name;
    }
}
let mc = new MyClass();
let obj = {
    name: "Object",
    getName: mc.getName
};
console.log(obj.getName()); //Object,因为此时的this就是obj
console.log("=====================================");
//使用箭头函数可以使得这个name始终是类的name
class HisClass {
    constructor() {
        this.name = "HisClass";
        this.getName = () => {
            return this.name;
        };
    }
}
let hc = new HisClass();
let o = {
    name: "Object2",
    getName: hc.getName
};
console.log(o.getName()); //HisClass
console.log("##############################################");
class HerClass {
    constructor() {
        this.name = "HerClass";
    }
    getName() {
        return this.name;
    }
}
let c = new HerClass();
let o2 = {
    name: "Object3",
    getName: c.getName
};
console.log(o2.getName()); //Object3
