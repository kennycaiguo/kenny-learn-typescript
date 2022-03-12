//初始化顺序,先初始化父类，再初始化子类
class Base{
    name="base"
    constructor(){
        console.log("name: "+this.name);
        
    }
}

class Derived extends Base{
    name="Derived"
    constructor(){
        super()  //在子类的构造函数里面必须先调用父类的构造函数
        console.log("Name:"+this.name);
        
    }
}

let d:Derived=new Derived() //name: base
