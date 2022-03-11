"use strict";
/* interface Shape{//这种处理不好，如果用户关闭了严格模式，就会出现无法预见的结果
    kind:"circle"|"square",
    radius?:number, //可空，也就是不确定的
    sideLength?:number //可空，也就是不确定的
} */
/* function getArea(shape:Shape) {
    if(shape.kind=='circle') //写法1
    {
        return Math.PI* shape.radius**2
    }else{
        return shape.sideLength**2
    }
} */
function getArea(shape) {
    switch (shape.kind) { //写法2
        case 'circle':
            return Math.PI * shape.radius ** 2;
        //break
        case 'square':
            return shape.sideLength ** 2;
        // break
    }
}
let sqare = {
    kind: 'square',
    sideLength: 100
};
let circle = {
    kind: 'circle',
    radius: 10
};
let res = getArea(sqare);
console.log(res);
console.log("=====================");
let res2 = getArea(circle);
console.log(res2);
