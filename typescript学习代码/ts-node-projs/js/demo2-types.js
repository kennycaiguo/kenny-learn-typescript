"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//any类型，可以接受任何类型的值
let a = {
    name: 'a',
    type: 'char'
};
// console.log(a)
//string类型
let str = 'hello ts';
//bool
let isreal = true;
//数组类型
let arr = [1, 2, 3, 4, 5];
// let arr:Array<number> = [1,2,3,4,5]
// arr.forEach(item=>{
//     console.log(item)
// })
//元组类型
let tup; //声明一个元组，并且指定它第一个值必须是number类型，第二个值必须是string类型，如果你搞反了，它报错
tup = [100, 200];
function printFreeDay(weekDays) {
    weekDays.forEach(item => {
        if (item === 'sun' || item === 'sat') {
            console.log(item + ': is not working day');
        }
    });
}
let weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// printFreeDay(weekDays)
// let stu: {name:string,age:number} ={
//     name:'Jessie',
//     age:18
// }
class Student {
    // constructor() {
    // }
    //注意在ts中构造函数一定是constructor而且没有重载，只有一种写法，要么有参数，要么没有参数
    constructor(n, a, g) {
        this.name = '';
        this.age = 0;
        this.gender = '';
        this.name = n;
        this.age = a;
        this.gender = g;
    }
}
let stu = new Student('Jade', 19, 'female');
stu.email = 'Jade1234@gmail.com';
// let stu = new Student()
// stu.name = 'Jack'
// stu.age = 30
// stu.gender= 'male'
console.log(stu);
