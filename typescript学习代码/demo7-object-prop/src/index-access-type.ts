//索引访问类型
type Humen={
    name:string,
    age:number,
    alive:boolean
}

type Name=Humen["name"] //此时Name的类型是string
let name1:Name="jack"
console.log(typeof name1); //string

interface People{
    name:string,
    age:number,
    alive:boolean
}

type Type = People['name'|'age'] //也就是string|number联合类型

let t1:Type=100
let t2:Type='hello girl'


type Type2=People[keyof People] //也就是string|number|boolean联合类型
let tp1:Type2 = 200
let tp2:Type2 ='nice girl'
let tp3:Type2 = false

type AliveOrName='alive'|'name'
type Type3=People[AliveOrName] //也就是boolean|string联合类型

let ty1:Type3=true
let ty2:Type3='Jack'

let PersonArr=[
    {name:"Jackline",age:18},
    {name:"Jackson",age:22},
    {name:"Brandy",age:19}
]

type MyPerson=typeof PersonArr[number]

let mp:MyPerson={name:"Tracy",age:17}
type Age =typeof PersonArr[number]['age'] //number类型
let age:Age=23

type key='age'
type Age2=People[key]