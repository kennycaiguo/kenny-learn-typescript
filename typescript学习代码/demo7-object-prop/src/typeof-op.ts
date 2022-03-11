//typeof操作符
let s='hello' //自动类型推断：s的类型是string
type S=typeof s //将s的类型赋值给一个新的类型，这个类型也是string

let c:S='girl lover' //c的类型是string

//ReturnType<T>的用法
type Predicate=(x:unknown)=>boolean
type K = ReturnType<Predicate>

function f(){
    return {
      x:3,
      y:100
    }
}

type P = ReturnType<typeof f> //注意：typeof 操作符后面可以跟一个函数名称，但是不能带括号，也就是type后面不能跟函数调用