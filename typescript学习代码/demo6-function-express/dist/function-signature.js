"use strict";
function doTask(fn) {
    console.log(fn.description + " returned " + fn(100));
}
function func(args) {
    console.log(args);
    return true;
}
func.description = 'hello';
doTask(func);
