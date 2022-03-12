//接口的继承，implement子句
interface Soundable{
    sound():void //接口中的方法不能有实现，只需要一个函数签名
}

class Speaker implements Soundable{ //利用类来实现接口
    sound():void{
        console.log("babababa.....");
        
    }
}

let speaker:Speaker=new Speaker()

speaker.sound()

interface Checkable{
    check(name:string):boolean
}

class NameChecker implements Checkable{
    check(name:string):boolean{
       return name!=''
    }
}


interface IA{
    x:number,
    y?:number
}

class A implements IA{ //实现有可选属性的接口只需要实现他必须有的属性就可以了
    x=100
}