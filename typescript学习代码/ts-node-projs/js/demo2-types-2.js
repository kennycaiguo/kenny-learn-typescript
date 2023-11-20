"use strict";
//any 和unknown类型
let obj = {
    name: 'Jack',
    age: 20,
    gender: 'male'
};
// console.log(obj.name)
obj.email = 'Obj123@live.com';
// console.log(obj)
// let n :number = obj
// console.log(n)
// console.log(typeof n)
//
//
// let un:unknown = obj
// // un.name = 'jack' //不能直接操作unknown类型的变量
//
// console.log(un)
// console.log(typeof un)
let unstr = 'HELLO';
if (typeof unstr === "string") {
    console.log(unstr.toLowerCase());
}
// let sm = (unstr as string).toLowerCase()
// console.log(sm)
//
// let unnum:unknown = 100
// let res = (unnum as number) +1
// console.log(res)
let o = { name: 'Jack', age: 19 };
let o2 = o;
o2.name = 'Mary';
console.log(o2);
let a1 = '1';
let b1 = a1;
console.log(b1);
