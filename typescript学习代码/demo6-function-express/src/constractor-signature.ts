//首先定义一个类
class Ctor{
    s:string
    constructor(s:string){
        this.s=s
    }
  
}

//定义构造签名
type SomeContractor={
    new (s:string):Ctor
}

//使用构造签名定义一个函数
function fn(ctor:SomeContractor) {
   return new ctor('girl') //返回一个构造实例
}

let ret=fn(Ctor) //调用函数创建实例
console.log(ret.s);
