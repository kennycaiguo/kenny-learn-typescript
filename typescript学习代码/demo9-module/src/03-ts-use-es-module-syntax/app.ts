// import {Cat,Dog} from "./animal"
// import type {Cat,Dog} from "./animal" //这样子导入的话，那些被导出的对象必须是类型，否则报错
// import {createCatName} from "./animal"
import {createCatName, Cat, Dog} from "./animal"

type Animals=Cat|Dog

