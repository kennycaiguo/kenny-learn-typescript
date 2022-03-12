"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const math = __importStar(require("./math")); //导出所有的属性，然后存入math对象中，以后就可以使用math.属性名称来获取
console.log(math.PI);
let rngen = new math.default();
console.log(rngen); //RamNumGenerator {}
