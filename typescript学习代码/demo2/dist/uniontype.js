"use strict";
//ts允许使用联合类型，即一个变量可能是这几种类型
let id = 1; //id可以是字符串或者数字，所以可以赋值为1
id = "2"; //因为是联合类型，可以修改为字符串
function reconId(id) {
    if (typeof id === 'string') {
        console.log("your id type is string");
    }
    else if (typeof id === 'number') {
        console.log("your id type is number");
    }
    else if (typeof id === 'object') {
        console.log("you id type is object");
    }
}
reconId(10);
reconId('300');
reconId({ first: 100, second: "200" });
function showWelcome(name) {
    if (Array.isArray(name)) {
        console.log("hello " + name.join(" and "));
    }
    else {
        console.log("hello " + name);
    }
}
showWelcome(["jack", "mary", "jade"]);
showWelcome("xiaoming");
function getFirst3(num) {
    return num.slice(0, 3); //如果是联合类型中的类型有共同方法，可以写一个通用方法
}
console.log(getFirst3('hello'));
console.log(getFirst3([10, 20, 40, 50, 60]));
