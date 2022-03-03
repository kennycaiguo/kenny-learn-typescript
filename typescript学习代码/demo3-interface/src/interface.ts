interface Point{
    x:number;
    y:number;
}

function printPoint(pt:Point){
    console.log(`x坐标：${pt.x},y坐标：${pt.y}`);
    
}

printPoint({x:30,y:50})

//扩展接口示例:通过继承
interface Animal{
    name:string
}

interface Bear extends Animal{
    honey:boolean
}

const bear:Bear={
    name:"Willie",
    honey:true
}

function printBear(b:Bear) {
    console.log(`Bear{name:${b.name},honey:${b.honey}}`);
    
}

printBear(bear)

//给现有接口添加字段,注意不要使用关键字
interface MyWindow{
    count:number
}

//可以再定义一次MyWindow
interface MyWindow{
    title:string
}

const mywindow:MyWindow={
    count:1,
    title:"mywindow"
}

function windowInfo(w:MyWindow) {
    console.log(`MyWindow{count:${w.count},title:${w.title}}`);
    
}