/*
编写通用函数的准则
1.尽量使用类型本身，而不是对其进行约束，除非业务的需要
2.尽可能少的使用类型参数
3.如果一个类型参数只出现在一个地方，请重新考虑是否需要它
*/
//rule 1
function getFisrt<T>(arr:T[]) { //推荐，符合规则1
    return arr[0]
}

function getFisrt2<T extends any[]>(arr:T) { //不推荐
    return arr[0]
}

//rule 2
function myFilter<T>(arr:T[],func:(arg:T)=>boolean) { //推荐
    return arr.filter(func)
}

function myFilter2<T,Func extends (arg:T)=>boolean>(arr:T[],func:Func) { //不推荐，因为这样子写程序更难阅读和推理
    return arr.filter(func)
}

//rule3
function Greetto(s:string) { //推荐
    console.log("Hello "+s);
}

function GreetTo<Str extends string>(s:Str) { //没有必要的泛型，不推荐
    console.log("Hello "+s);
    
}

Greetto("girl")
GreetTo('nice girls')