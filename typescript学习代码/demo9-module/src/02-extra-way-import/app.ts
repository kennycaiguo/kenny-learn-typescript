/* import RamNumGenerator,{ PI as pi } from "./math";

function calGirth(r:number){
  return 2*pi*r
}

console.log("Girth of the circle:"+calGirth(10));

class RNG extends RamNumGenerator{
    genRamNum(seed:number) {
       return Math.floor(Math.random()*100*seed)
    }
}

let rng=new RNG()
console.log(rng.genRamNum(1000)); */

import * as math from './math' //导出所有的属性，然后存入math对象中，以后就可以使用math.属性名称来获取

console.log(math.PI);
let rngen=new math.default()
console.log(rngen); //RamNumGenerator {}

