"use strict";
//对象的结构
function sum({ a, b, c }) {
    let total = a + b + c;
    console.log("total=" + total);
}
sum({ a: 10, b: 100, c: 300 });
