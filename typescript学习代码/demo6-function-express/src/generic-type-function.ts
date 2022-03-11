//定义一个泛型函数
function getFirstElement<T>(arr:T[]) :T|undefined{
    return arr[0]
}

const s=getFirstElement(['hello','world','of girls'])
console.log(s);
const a=getFirstElement([100,200,300])
console.log(a);
const udf=getFirstElement([])
console.log(udf);

function mymap<I,O>(arr:I[],func:(arg:I)=>O):O[] {
    return arr.map(func)
}

const parsed=mymap([10,20,30],function (arg:number) {
    return arg*2
})

console.log(parsed);

const ints=mymap(['1','2','3'],(n)=>parseInt(n))
//const ints=mymap(['1','2','3'],(n)=>{return parseInt(n)}) //加了花括号，需要return语句否则得到undefined
console.log(ints);
