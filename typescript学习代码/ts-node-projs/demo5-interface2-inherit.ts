 //接口继承
 interface Person{
    name:string,
    age:number
 }

 interface Musician extends Person{
    instrument:string,
    toString:()=>string
 }

 let mc:Musician = <Musician>{}
 mc.name='Jack'
 mc.age = 40
 mc.instrument = 'Drum'
 mc.toString=function (){
    return `Musician[name:${this.name},age:${this.age},playing:${this.instrument}]`
 }
 // console.log(mc.toString())

 //从一个接口中使用另外一个接口
 interface Info{
    name:string,
    age:number,
    gender:string,
    address:string,
    marriage:boolean
 }

 interface Employee{
    id:number,
    info:Info,
    email?:string
 }

 let xm:Employee = {
    id:1001,
    info:{
        name:'xiaoming',
        age:20,
        gender:'male',
        address:'3 pawsey road,kgn 5',
        marriage:false
    } ,
    email:'xiaoming123@hotmail.com'
 }

 // console.log(xm)
 // console.log(xm.info.name)

 interface Point{
    x:number,
    y:number
 }

 interface GetDistance{
     (pt1:Point,pt2:Point):number
 }

 let getDist:GetDistance = (p1,p2)=>{
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2))
 }

 let pt1 = {x:3,y:3}
 let pt2 = {x:4,y:4}
 console.log(getDist(pt1,pt2))

 type Animal = {
    name:string,
    haircolor:string
 }

 interface Dog extends Animal{

 }

 let dog:Dog = {
    name:'jiwawa',
    haircolor:'black'
 }

 console.log(dog);

export {}
