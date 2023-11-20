//联合类型就是说一个变量可以允许他的类似是两个或者以上的类型的并集使用|来做并集
// let aunion:string|boolean|number
// aunion = 'hello'
// console.log(aunion.toUpperCase());
// aunion = -35
// console.log(Math.abs(aunion))
// aunion = false
// aunion = !aunion
// console.log(aunion);

// let var1 : 12|1|122
// var1 =2 //报错，因为这个变量只能有上面3个值
type workingday = 'monday'|'teusday'|'wednesday'|'thursday'|'friday'
let d:workingday = "monday"


//类型别名:先用type定义一个类型，然后就可以定义这种类型的变量
type Person = {
    name:string,
    gender:string,
    age:number,
    email:string
}

let p:Person = {
    name:"Jackie",
    gender:'male',
    age:19,
    email:"Jackiexxx@gmail.com"
}

// console.log(p);

//用类型别名来定义联合类型
type union = string |number|boolean
let u1:union = "hello"
let u2:union = 12
let u3:union = false
// console.log(u1,u2,u3)

//交叉类型
interface F1{
    name:string,
    age:number
}
interface F2{
    gender:string,
    email:string,
    phone:string
}

type MyType = F1 & F2

let john:MyType = {
    name:'John',
    age:36,
    gender:'male',
    email:"john123@gmail.com",
    phone:'1234567'
}

console.log(john);

export {}