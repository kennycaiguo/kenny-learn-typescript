//extends子句用于类继承
class BaseAnimal{
    legs:number=0;
    eat(food:string):void{
        console.log(`eating ${food}`);   
    }

    sound():void{
        console.log("sound!!");    
    }
}

interface Flyable{
    fly():void
}

class Dog extends BaseAnimal implements Flyable{ //可以既继承基类，又实现接口
    legs=4;
    sound(){
        console.log("wang wang wang!!!");
        
    }
    fly(){
        console.log("dog can't fly!!!");
        
    }
}

let dog:Dog=new Dog()
console.log(dog);

dog.eat('bone')
dog.fly()
dog.sound()