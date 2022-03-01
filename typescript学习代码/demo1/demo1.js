"use strict";
function sayHi(name, date) {
    console.log("Hello ".concat(name, ", today is ").concat(date.toDateString(), ".have a nice day"));
}
sayHi("Mary", new Date());
