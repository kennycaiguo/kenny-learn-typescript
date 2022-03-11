//分布式条件类型
type ToArray<T>=T extends any?T[]:never

type StrArrOrNumArr=ToArray<string|number> //string[]|number[]联合类型,分布式的

let strArr:StrArrOrNumArr=['hello','girls'] //这里是不可以混合的，是string[]或者number[]
let numArr:StrArrOrNumArr=[100,200]

//非分布式的
type ToArrayNoDist<T>=[T] extends [any]?T[]:never //(string|number)[]，非分布式的

type StrOrNumArrNoDist=ToArrayNoDist<string|number>
let sonan:StrOrNumArrNoDist=['hello',100] //数字和字符串可以任意混合
let son:StrOrNumArrNoDist=['hi','girl'] 
let son2:StrOrNumArrNoDist=[2.9,3.3]
