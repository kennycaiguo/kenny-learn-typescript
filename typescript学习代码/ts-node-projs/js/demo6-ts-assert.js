"use strict";
//ts中的断言主要有3种
//类型断言，有2种写法
//1.as
let str = 'Hello sexy';
// let len:number = str.length
let len = str.length;
// console.log(len)
//2.<类型>值这种写法也有可能是泛型
let s = 'hi ,baby';
let bigs = s.toUpperCase();
function isFish(animal) {
    return typeof animal.swim === 'function';
}
let nimo = {
    name: 'Nimo',
    swim() {
        console.log('I am swimming very fast');
    }
};
// console.log("Is nimo fish? "+isFish(nimo))
function fun(value) {
    const str = value; // 如果没有any转换就会有错误 value 可能为 undefined 和 null
    const str1 = value; //ok
    const length = value.length; // 如果没有any转换就会有错误 value 可能为 undefined 和 null
    const length1 = value.length; //ok
    // let str2 :any = value
}
