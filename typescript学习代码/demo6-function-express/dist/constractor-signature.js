"use strict";
//首先定义一个类
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
//使用构造签名定义一个函数
function fn(ctor) {
    return new ctor('girl'); //返回一个构造实例
}
let ret = fn(Ctor); //调用函数创建实例
console.log(ret.s);
