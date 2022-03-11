"use strict";
function longest(a, b) {
    return a.length > b.length ? a : b;
}
let a1 = {
    length: 100
};
let b1 = {
    length: 180
};
let res = longest(a1, b1);
console.log("the longest one is :" + res.length);
let longerArr = longest([1, 2, 3, 4, 5], [1, 2, 3, 4]); //凡是由length属性的对象都是可以传进来的
console.log(longerArr); //[ 1, 2, 3, 4, 5 ]
let longerStr = longest("hello", "hello girl");
console.log(longerStr); //"hello girl"
