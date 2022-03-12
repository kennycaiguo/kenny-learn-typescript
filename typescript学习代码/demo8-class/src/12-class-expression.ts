//类表达式其实就是将一个匿名类赋给一个变量，然后这个变量及可以当作类来使用
let Person=class{
    constructor(public name:string,public age:number){}
    introduce(){
        console.log(`Hi,my name is ${this.name},I am ${this.age} years old`);
        
    }
}

let per=new Person("Jack",18)
console.log(per);
