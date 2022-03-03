"use strict";
function printPoint(pt) {
    console.log(`x坐标：${pt.x},y坐标：${pt.y}`);
}
printPoint({ x: 30, y: 50 });
const bear = {
    name: "Willie",
    honey: true
};
function printBear(b) {
    console.log(`Bear{name:${b.name},honey:${b.honey}}`);
}
printBear(bear);
const mywindow = {
    count: 1,
    title: "mywindow"
};
function windowInfo(w) {
    console.log(`MyWindow{count:${w.count},title:${w.title}}`);
}

windowInfo(mywindow)