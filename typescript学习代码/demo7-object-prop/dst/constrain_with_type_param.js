"use strict";
//在泛型约束中使用类型参数
function getProperties(obj, key) {
    return obj[key];
}
let w = {
    gender: 'Female',
    name: "Dick lover",
    age: 18
};
console.log(getProperties(w, 'gender'));
console.log(getProperties(w, 'age'));
