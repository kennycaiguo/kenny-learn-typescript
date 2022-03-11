"use strict";
//可选参数就是在参数名称后面跟一个?,表示这个参数可以传递，也可以不传递
function strToInt(str) {
    if (typeof str == 'string') { //可选参数必须要进行处理，只有当它有值的时候才可以做某种操作
        return parseInt(str);
    }
}
console.log(strToInt());
console.log(strToInt('100'));
console.log(strToInt('hello'));
