//1.只读属性使用readonly关键字
interface Man{
    readonly gender:string //只读属性，只有在初始化对象的时候可以赋值一次然后不能修改
}

let man:Man={
    gender:"male"
}

function testMan(m:Man){
    //m.gender='female' //报错，只读属性不能修改
    console.log(m.gender);
    
}

interface Home{
   readonly resident:{
       name:string,
       age:number
    }
}

function visitForParty(home:Home){ //虽然HOME的resident对象是只读的，但是它的属性却是可以修改的
    home.resident.name="jack"
    home.resident.age=30
    console.log(home);
    
}

let home:Home={
    resident:{
        name:"Jammy",
        age:20
    }
}

visitForParty(home) 

/* home={ //报错，因为home是resident是只读的

} */

//如果想将一个对象的所有属性都设置为只读，必须在这个对象的所有属性前面加readonly
interface Home2{
    readonly resident:{
        readonly name:string,
        readonly age:number
     }
 }
 