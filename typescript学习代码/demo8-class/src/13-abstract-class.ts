//抽象类及其成员
abstract class BaseClass{
    abstract getName():string;
    printName(){
        console.log("Name:"+this.getName());
        
    }
}

class Child extends BaseClass{
    getName(): string {
        return "Boss"
    }
    
}

let ch=new Child()
console.log(ch.getName());

//抽象类表达式，有时候我们需要一个类的构造函数转为函数的参数
function greet(ctor:new ()=>BaseClass){
    const inst=new ctor()
    inst.printName()
}

greet(Child)