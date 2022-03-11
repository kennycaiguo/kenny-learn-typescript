"use strict";
//所谓的参数展开其实就是可变长参数
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
console.log(multiply(10, 10, 20, 30, 5));
