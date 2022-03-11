"use strict";
function lengthLogging(arg) {
    console.log(arg.length);
    console.log(arg);
    return arg;
}
lengthLogging('hello'); //可以传递任何具有length属性的对象
lengthLogging([1, 2, 3]);
let obj = {
    name: "test obj",
    length: 100
};
lengthLogging(obj);
