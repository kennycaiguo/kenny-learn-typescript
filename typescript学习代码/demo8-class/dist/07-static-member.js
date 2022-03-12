"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Foo_count;
//类的静态成员,只能用类名.属性或者类名.方法名()来调用，类的实例不能访问
class ThatClass {
    static outputX() {
        console.log(this.x);
    }
    ;
}
ThatClass.x = 100;
console.log(ThatClass.x); //使用类的静态属性
ThatClass.outputX(); //调用类的静态方法
/* let tc:ThatClass=new ThatClass()
console.log(tc.outputX()); //类的实例不能访问类的静态成员
 */
class Foo {
    get count() {
        return __classPrivateFieldGet(Foo, _a, "f", _Foo_count);
    }
    set count(value) {
        __classPrivateFieldSet(Foo, _a, value, "f", _Foo_count);
    }
}
_a = Foo;
_Foo_count = { value: 0 };
