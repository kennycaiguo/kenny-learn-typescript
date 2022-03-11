"use strict";
class GenericOp {
}
let mygo = new GenericOp();
mygo.zeroValue = 0;
/* mygo.add=function(x:number,y:number){ //写法1
    return x+y
} */
mygo.add = (x, y) => x + y; //写法2
console.log(mygo.zeroValue);
console.log(mygo.add(44, 54));
let mygo2 = new GenericOp();
mygo2.zeroValue = 'zero';
console.log("====================================================");
mygo2.add = (x, y) => x + y; //写法2
console.log(mygo2.zeroValue);
console.log(mygo2.add('hello', ' pretty girls'));
