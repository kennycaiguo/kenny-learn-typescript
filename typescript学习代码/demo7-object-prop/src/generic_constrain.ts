//泛型约束
interface LengthWise{
    length:number
}

function lengthLogging<T extends LengthWise>(arg:T):T{
  console.log(arg.length);
  console.log(arg);
  return arg
}

lengthLogging('hello') //可以传递任何具有length属性的对象
lengthLogging([1,2,3])

let obj={
    name:"test obj",
    length:100
}

lengthLogging(obj)