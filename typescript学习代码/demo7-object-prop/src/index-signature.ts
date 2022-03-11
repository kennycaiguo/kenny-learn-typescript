//索引签名
interface StringArray{
    [index:number]:string //这就是索引签名，索引是number类型，返回的是数组的元素类型
}

let myStrArr:StringArray=['hello','world',"of girls"]
console.log(myStrArr[2]);


interface CustomObj{
    [props:string]:number
}

let customObj:CustomObj={
    x:100,
    y:80,
    z:120,
    score:90
}

interface Animal{
    name:string
}



interface Dog extends Animal{
   breed:string

}

interface Nok{
    [index:string]:number|string //在实例化对象的时候，可以有n多个这样子的属性
    length:number,
    name:string
}

let nok:Nok={
    age:10, //符合 [index:string]:number|string
    height:120,
    weight:330,
    length:6,
    name:'Tom',
    gender:'male'
}