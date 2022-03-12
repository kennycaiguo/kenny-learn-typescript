//类的静态成员,只能用类名.属性或者类名.方法名()来调用，类的实例不能访问
class ThatClass{
    
    static x=100;
    static outputX(){
        console.log(this.x);    
    };
}

console.log(ThatClass.x); //使用类的静态属性
ThatClass.outputX()//调用类的静态方法

/* let tc:ThatClass=new ThatClass()
console.log(tc.outputX()); //类的实例不能访问类的静态成员
 */

class Foo{
    static #count=0
    get count(){
        return Foo.#count
    }

    set count(value){
        Foo.#count=value
    }
    /* static { 为什么这里会被认为是类的外部？
        try{
            const inst={
               length:10
            }
            Foo.#count +=inst.length
        }catch{}
       
    } */
} 