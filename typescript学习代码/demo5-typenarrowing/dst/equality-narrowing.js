"use strict";
function example(x, y) {
    if (x === y) { //在这里只有x和y的类型相同，它们才有可能全等
        console.log(x.toUpperCase() + "," + y.toLowerCase());
    }
    else {
        console.log(`x=${x},y=${y}`);
    }
}
example(100, true);
function printAll2(strs) {
    if (strs != null) {
        if (typeof strs == 'object') //注意，null也是object类型，后面返回true，
         {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs == 'string') {
            console.log(strs);
        }
        else {
            console.log("null");
        }
    }
}
printAll2(null);
function multiplyValue(c, factor) {
    if (c.value != null) {
        c.value *= factor;
        console.log("result is:" + c.value);
    }
}
multiplyValue({ value: undefined }, 6);
