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

interface Human{
    name:string,
    age:number,
    gender:string,
    eat:()=>void,
    run:()=>void,
    sayHi:()=>string
}
//
// let jade:Human = {
//     name:'Jade',
//     age:18,
//     gender:'female',
//     eat:()=>{console.log('eating rice')},
//     run:function(){console.log(`${this.name} is running`)},
//     sayHi:function (){
//         return `hi i am ${this.name}`
//     }
// }
//
// console.log(jade.sayHi());
// jade.run()

interface runOptions{
    program:string;
    commandline:string[]|string|(()=>string);
}

let op1:runOptions = {
    program:'vscode',
    commandline:'.code'
}
console.log(op1.commandline)

op1= {
    program:'ps',
    commandline:['hello','php']
}
console.log(op1.commandline)

op1 = {
    program:'pycharm',
    commandline:()=>{return 'hello python'}
}

// console.log(op1)

//带有可选属性的接口
interface Student{
    name:string,
    gender:string,
    age:number,
    readonly privacy:string,
    email?:string
}

let jane :Student ={
    name:'Jane',
    gender:'female',
    age:30,
    privacy:'have a pass unforgetable'
}
// console.log(jane)

let janna :Student ={
    name:'Janna',
    gender:'female',
    age:28,
    email:'Janna123@gmail.com',
    privacy:'nothing'
}

// console.log(janna)
// janna.privacy = '' //报错，因为你尝试修改一个只读属性

//使用接口来约束函数
interface MyFun{
    (a:string,b:number):void
}

let fun:MyFun=(a,b)=>{
    console.log("function is running")
    console.log(a)
    console.log(b)
    console.log("finished")
}
fun('hello',100)

export {}