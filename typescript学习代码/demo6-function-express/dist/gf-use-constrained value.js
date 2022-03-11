"use strict";
function minimumLength(o, minimumLength) {
    return o.length > minimumLength ? o : { length: minimumLength };
}
//写法2
function minimumLength2(o, minimumLength) {
    if (o.length > minimumLength) {
        return o;
    }
    else {
        return { length: minimumLength };
    }
}
let len = minimumLength([1, 2, 3], 4);
console.log(len);
let len2 = minimumLength2([1, 2, 3], 2);
console.log(len2);
