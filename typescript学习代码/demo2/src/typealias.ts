//在ts中允许使用类型别名，方法是使用type关键字
type Point={ //定义了一个Point类型，它属于对象
    x:number,
    y:number
}

type ID = number|string //定义一个名叫ID的联合类型

//使用自定义的Point类型

function printPoint(pt:Point){
    console.log(`点的x坐标：${pt.x},点的y坐标：${pt.y}`);
    
}

printPoint({x:100,y:200})