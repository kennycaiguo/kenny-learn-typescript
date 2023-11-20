"use strict";
// interface IPerson {
//     firstName: string,
//     lastName: string,
//     sayHi: () => string
// }
//
// var customer: IPerson = {
//     firstName: "Tom",
//     lastName: "Hanks",
//     sayHi: (): string => {
//         return "Hi there"
//     }
// }
// console.log("Customer 对象 ")
// console.log(customer.firstName)
// console.log(customer.lastName)
// console.log(customer.sayHi())
// var employee: IPerson = {
//     firstName: "Jim", lastName: "Blakes", sayHi: (): string => {
//         return "Hello!!!"
//     }
// }
// console.log("Employee 对象 ")
// console.log(employee.firstName)
// console.log(employee.lastName)
Object.defineProperty(exports, "__esModule", { value: true });
let op1 = {
    program: 'vscode',
    commandline: '.code'
};
console.log(op1.commandline);
op1 = {
    program: 'ps',
    commandline: ['hello', 'php']
};
console.log(op1.commandline);
op1 = {
    program: 'pycharm',
    commandline: () => { return 'hello python'; }
};
let jane = {
    name: 'Jane',
    gender: 'female',
    age: 30,
    privacy: 'have a pass unforgetable'
};
// console.log(jane)
let janna = {
    name: 'Janna',
    gender: 'female',
    age: 28,
    email: 'Janna123@gmail.com',
    privacy: 'nothing'
};
let fun = (a, b) => {
    console.log("function is running");
    console.log(a);
    console.log(b);
    console.log("finished");
};
fun('hello', 100);
