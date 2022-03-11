"use strict";
function conbine(arr1, arr2) {
    return arr1.concat(arr2);
}
const arr = conbine([1, 2], [3, 4]); //这样子调用只能传递一种类型
console.log(arr);
//如果想传递两种类，必须手动指明
const r = conbine([1, 2], ['hello']); //注意，这样子的写法只有在调用是时候有效，声明时不可以怎么写，这样做也是不推荐的
console.log(r); //[ 1, 2, 'hello' ]
