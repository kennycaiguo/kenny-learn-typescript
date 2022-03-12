//参数属性
class Params{
    constructor(public readonly x:number,protected y:number,private z:number){} //这样子定义类的成员类似kotlin的语法，不过一定需要修饰符否则无效
}

let p=new Params(100,200,300) //只有下对外可见
console.log(p); //Params { x: 100, y: 200, z: 300 } //在类的内部全部可见

