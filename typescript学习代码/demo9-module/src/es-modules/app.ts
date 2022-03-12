//es模块语法
import hello from "./hello" //在ts中应该import ts文件,如果使用export default需要给它一个名称
//如果一个模块里面的成员是用export单独导出的，需要使用解构表达式来导入，名字必须和导出模块里面的名字一样
import {Pi,PHI,squareroot,absVal} from "./maths" 

hello()

function calArea(r:number){
    return Pi*r*r
}

console.log(calArea(10));
console.log("squareroot of 2="+squareroot);

let abs=absVal(PHI)
console.log(abs);
