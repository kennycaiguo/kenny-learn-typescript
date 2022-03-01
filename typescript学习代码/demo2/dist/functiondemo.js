"use strict";
//函数的声明方式，其中如果使严格模式，必须指明参数类型，返回值类型其实可省
function greeting(name) {
    console.log(`hello ${name},how are u today`);
}
//ts中函数是可以使用可空参数的，需要在可空参数名称后面加严格？
function showName(name) {
    var _a;
    // console.log(`Hi my name is ${name.first} ${name.last}`);
    console.log((_a = name.last) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
}
showName({ first: "Jack", last: "Lee" });
