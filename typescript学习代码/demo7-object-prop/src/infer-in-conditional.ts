type GetReturnType<T>=T extends (...args:never[])=>infer Return ? Return :never

//type Num=number
type Num=GetReturnType<()=>number>
let num:Num=20

type Str=GetReturnType<(x:string)=>string> //是string类型
let str:Str='hello girls'

type Bools=GetReturnType<(a:boolean,b:boolean)=>boolean[]>
let bools:Bools=[true,true]