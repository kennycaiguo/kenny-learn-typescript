//条件类型
interface Animal{
    live():void
}

interface Dog extends Animal{
    woof():void
}

type Ex1=Dog extends Animal? number:string //number
type Ex2=RegExp extends Animal? number:string //string

interface IdLabel{
    id:number
}

interface NameLabel{
    name:string
}

/* function createLabel(id:number):IdLabel
function createLabel(name:string):NameLabel
function createLabel(arg:number|string):IdLabel|NameLabel{
    if(typeof arg=='number'){
       let label:IdLabel={
           id:arg
       }
       return label
    }else{
       let label:NameLabel={
           name:arg
       }
       return label
    }
}
 */

type IdOrName<T extends number|string> =T extends number?IdLabel:NameLabel
function createLabel<T extends number|string>(idOrname:T):IdOrName<T>{
    throw ''
}

let l1=createLabel('typescript') //NameLabel
let l2=createLabel(100)//IdLabel
let l3=createLabel(Math.random()>0.5?'hello':45) //NameLabel|IdLabel