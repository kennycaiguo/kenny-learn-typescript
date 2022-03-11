"use strict";
function greeter(fn) {
    fn("Hello everyone!!!");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
