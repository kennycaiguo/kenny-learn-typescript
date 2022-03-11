"use strict";
let man = {
    gender: "male"
};
function testMan(m) {
    //m.gender='female' //报错，只读属性不能修改
    console.log(m.gender);
}
function visitForParty(home) {
    home.resident.name = "jack";
    home.resident.age = 30;
    console.log(home);
}
let home = {
    resident: {
        name: "Jammy",
        age: 20
    }
};
visitForParty(home);
