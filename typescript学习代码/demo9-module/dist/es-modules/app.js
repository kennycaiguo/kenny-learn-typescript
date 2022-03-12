"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//es模块语法
const hello_1 = __importDefault(require("./hello")); //在ts中应该import ts文件,如果使用export default需要给它一个名称
//如果一个模块里面的成员是用export单独导出的，需要使用解构表达式来导入，名字必须和导出模块里面的名字一样
const maths_1 = require("./maths");
(0, hello_1.default)();
function calArea(r) {
    return maths_1.Pi * r * r;
}
console.log(calArea(10));
console.log("squareroot of 2=" + maths_1.squareroot);
let abs = (0, maths_1.absVal)(maths_1.PHI);
console.log(abs);
