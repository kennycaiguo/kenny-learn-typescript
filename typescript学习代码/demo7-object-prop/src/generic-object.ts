//泛型对象
interface Box<T>{
    contents:T
}

let strBox:Box<string>={
    contents:"contents"
}

let numBox:Box<number>={
    contents:1000
}

let bBox:Box<boolean>={
    contents:true
}

function setBoxContents(box:Box<string>,contents:string){
    box.contents=contents
}

//在类型别名中也可以使用泛型
type Caja<T>={
    contenido:T
}
 
let strCaja:Caja<string>={
   contenido:"hello"
}

let numCaja:Caja<number>={
    contenido:100
}

type OrNull<T>=T|null //还可以这么用

type OneOrMany<T>=T|T[] //可以是一个类型或者是一个类型数组

type OneOrManyOrNull<T>=OrNull<OneOrMany<T>> //类型嵌套

type OneOrManyOrNull2<T>=OrNull<T> & OneOrMany<T> //泛型类型交叉

type OneOrManyOrNullString=OneOrManyOrNull<string>
