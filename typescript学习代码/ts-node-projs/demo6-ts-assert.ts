//ts中的断言主要有3种
//类型断言，有2种写法
//1.as
let str:any='Hello sexy'
// let len:number = str.length
let len:number = (str as string).length
// console.log(len)
//2.<类型>值这种写法也有可能是泛型

let s:string|null|undefined = 'hi ,baby'
let bigs = <string>s.toUpperCase()
// console.log(bigs)

//实例2，将一个联合类型断言为其中一个类型
interface Cat{
    name:string,
    catch_mouse():void
}

interface Fish{
    name:string,
    swim():void
}

function isFish(animal:Cat|Fish) {
    return typeof (animal as Fish).swim === 'function';

}

let nimo:Fish = {
    name:'Nimo',
    swim() {
        console.log('I am swimming very fast')
    }
}

// console.log("Is nimo fish? "+isFish(nimo))
function fun(value: string | undefined | null) {
    const str: string = value as any; // 如果没有any转换就会有错误 value 可能为 undefined 和 null
    const str1: string = value!; //ok
    const length = (<any>value).length; // 如果没有any转换就会有错误 value 可能为 undefined 和 null
    const length1: number = value!.length; //ok
    // let str2 :any = value
}


