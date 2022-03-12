"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absVal = exports.RamNumGenerator = exports.PHI = exports.squareroot = exports.Pi = void 0;
exports.Pi = 3.14; //导出变量
exports.squareroot = 1.414; //导出变量
exports.PHI = 1.61; //导出常量
class RamNumGenerator {
}
exports.RamNumGenerator = RamNumGenerator;
function absVal(val) {
    return val >= 0 ? val : -val;
}
exports.absVal = absVal;
