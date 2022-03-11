"use strict";
function exFunc(s) {
    if (typeof s == 'string') {
        console.log("string:" + s);
    }
    else {
        console.log("object" + s);
    }
}
exFunc({ name: "jack", age: 20 });
exFunc("Jade");
function someFun(x) {
    if (typeof x == 'string') {
        return 'hello ' + x;
    }
    else {
        return x;
    }
}
console.log(someFun("Jennifer"));
console.log(someFun(false));
