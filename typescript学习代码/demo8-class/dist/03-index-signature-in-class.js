"use strict";
//类里面是索引签名
class TheClass {
    check(s) {
        return this[s];
    }
}
let theClass = new TheClass();
console.log(theClass.check('hello'));
