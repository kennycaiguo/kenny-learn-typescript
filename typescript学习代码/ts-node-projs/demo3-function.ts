function getSum(a:number,b:number):number {
    return a+b
}

// console.log(getSum(20,30))

function getBigger(a:number,b:number):number {
    return a<b ? b:a
}

console.log(getBigger(30,50))
function sayHello():void {
    console.log('hello ts')
}

sayHello()
//ts中使用...变量名称:数据类型[]的格式来定义可变参数
function sumUp(...nums:number[]):number {
    let sum = 0
    nums.forEach(item=>{
        sum+=item
    })
    return  sum
}

// console.log(sumUp(10,20,30))
// console.log(sumUp(1.1,2.2,3.3,4.4,5,6,7))

function sayHelloToPeople(...names:string[]) {
    for (const name of names) {
        console.log("Hello " + name)
    }
}

// sayHelloToPeople('Jack','Mary','James','Franky','Tracy')

function anyMax(...nums:number[]):number {
    let max = 0
    for (const num of nums) {
       if (num > max) {
           max = num
       }
    }
    return max
}

console.log("max is :"+ anyMax(1,20,200,20,300,6))

function eatFood(mainfood:string,sidefood?:string) {
    if(sidefood){
        console.log(`very good,eating ${mainfood} with ${sidefood}`)
    } else{
        console.log(`my god! only eating ${mainfood}?!!`)
    }
}

// eatFood('rice','fish')
// eatFood('potato')

function test(params:{x:number,y:number}):number {
    return params.x + params.y
}

// console.log(test({x: 10, y: 20}));

//函数的默认值参数
function defaultparam(a:number,b:number=20):number {
    return a+b
}

// console.log(defaultparam(100))
// console.log(defaultparam(100,200))

function testOptional(x:number,y:number=10,z?:number) {
        if(z){
            return x+y+z
        }else{
            return x+y
        }
}

console.log(testOptional(10))