type Point={
    x:number,
    y:number
}

type Keys =keyof Point

/* let x:Keys='x'
let y:Keys='y' */

let point:Point={
    x:100,
    y:100
}

type Mapish={
    [k:string]:number //注意：字符串类型的索引签名的类型是number|string 联合类型
}

type M =keyof Mapish

const m1=100
const m2='hello'