"use strict";
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]
const args = [8, 5]; //这个用来处理在没有扩展参数的函数里面使用...的报错问题
const angle = Math.atan2(...args);
console.log(angle);
