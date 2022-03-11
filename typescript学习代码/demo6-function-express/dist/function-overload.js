"use strict";
function makeDate(m, y, d) {
    if (y != undefined && d != undefined) {
        return new Date(m, y, d);
    }
    else {
        return new Date(m);
    }
}
console.log(makeDate(10, 2021, 8).toDateString());
console.log(makeDate(198876546644332).toDateString());
