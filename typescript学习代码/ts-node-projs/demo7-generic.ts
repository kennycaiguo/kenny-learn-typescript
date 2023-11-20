//泛型函数
function test<T>(a:T):void {
    console.log(typeof a)
}

// test<string>("hello")

//泛型接口
interface Animal<T,U>{
    name:T,
    age:U
}

let dog :Animal<string, number>={
    name:'goofy',
    age:5
}

// console.log(dog)

//泛型类
class Point<T>{
    x:T
    y:T
    z:T

    constructor(x:T,y:T,z:T) {
        this.x = x
        this.y = y
        this.z = z
    }
}

let pt:Point<number> = new Point<number>(1.1,2.2,3.3)
// console.log(pt)

//\给泛型添加默认值
interface IPerson<T=string,K=number>{
    name:T,
    age:K
}

let per:IPerson = {
    name:'Brandy',
    age:30
}
console.log(per)