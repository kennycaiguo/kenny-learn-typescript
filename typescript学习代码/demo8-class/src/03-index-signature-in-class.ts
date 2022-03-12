//类里面是索引签名
class TheClass{
    [s:string]:boolean |((s:string)=>boolean)

    check(s:string){
        return this[s] as boolean
    }
}

let theClass:TheClass=new TheClass()
console.log(theClass.check('hello'));

