"use strict";
//any可以赋值给任何类型，any会禁用所有的类型检查
let obj = {
    x: 0
};
//可以使用any类型的任何属性，包括不存在的属性
//obj.foo() 
//obj()
obj.var = 100;
let n = obj;
//以上代码九十成功编译成js也是会报错的因为obj没有foo方法，obj也不是一个函数所以any这个类型很危险
