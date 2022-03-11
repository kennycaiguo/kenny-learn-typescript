"use strict";
/*
编写通用函数的准则
1.尽量使用类型本身，而不是对其进行约束，除非业务的需要
2.尽可能少的使用类型参数
3.如果一个类型参数只出现在一个地方，请重新考虑是否需要它
*/
//rule 1
function getFisrt(arr) {
    return arr[0];
}
function getFisrt2(arr) {
    return arr[0];
}
//rule 2
function myFilter(arr, func) {
    return arr.filter(func);
}
function myFilter2(arr, func) {
    return arr.filter(func);
}
//rule3
function Greetto(s) {
    console.log("Hello " + s);
}
function GreetTo(s) {
    console.log("Hello " + s);
}
Greetto("girl");
GreetTo('nice girls');
