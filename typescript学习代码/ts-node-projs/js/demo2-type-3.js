"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["UNKNOWN"] = 2] = "UNKNOWN";
})(Gender || (Gender = {}));
let person = {
    name: 'xiaoming',
    gender: Gender.Male
};
console.log(person);
