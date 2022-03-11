
function longest<T extends {length:number}>(a:T,b:T) { //尖括号里面的extends是条件限制，表明参数必须继承自一个由length属性的对象
    return a.length>b.length?a:b
}

interface Obj{
    length:number
}

let a1:Obj={
    length:100
}

let b1:Obj={
    length:180
}

let res=longest(a1,b1)

console.log("the longest one is :"+res.length);

let longerArr=longest([1,2,3,4,5],[1,2,3,4]) //凡是由length属性的对象都是可以传进来的
console.log(longerArr);//[ 1, 2, 3, 4, 5 ]

let longerStr=longest("hello","hello girl")
console.log(longerStr); //"hello girl"
