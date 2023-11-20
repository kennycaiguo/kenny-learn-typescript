"use strict";
function getSum(a, b) {
    return a + b;
}
// console.log(getSum(20,30))
function getBigger(a, b) {
    return a < b ? b : a;
}
console.log(getBigger(30, 50));
function sayHello() {
    console.log('hello ts');
}
sayHello();
//ts中使用...变量名称:数据类型[]的格式来定义可变参数
function sumUp(...nums) {
    let sum = 0;
    nums.forEach(item => {
        sum += item;
    });
    return sum;
}
// console.log(sumUp(10,20,30))
// console.log(sumUp(1.1,2.2,3.3,4.4,5,6,7))
function sayHelloToPeople(...names) {
    for (const name of names) {
        console.log("Hello " + name);
    }
}
// sayHelloToPeople('Jack','Mary','James','Franky','Tracy')
function anyMax(...nums) {
    let max = 0;
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log("max is :" + anyMax(1, 20, 200, 20, 300, 6));
function eatFood(mainfood, sidefood) {
    if (sidefood) {
        console.log(`very good,eating ${mainfood} with ${sidefood}`);
    }
    else {
        console.log(`my god! only eating ${mainfood}?!!`);
    }
}
// eatFood('rice','fish')
// eatFood('potato')
function test(params) {
    return params.x + params.y;
}
// console.log(test({x: 10, y: 20}));
//函数的默认值参数
function defaultparam(a, b = 20) {
    return a + b;
}
// console.log(defaultparam(100))
// console.log(defaultparam(100,200))
function testOptional(x, y = 10, z) {
    if (z) {
        return x + y + z;
    }
    else {
        return x + y;
    }
}
console.log(testOptional(10));
