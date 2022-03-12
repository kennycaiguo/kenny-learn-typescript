//类之间的关系
class MyPoint1{
    x=0;
    y=0;
}

class MyPoint2{
    x=1;
    y=1;
}

let mpt:MyPoint1=new MyPoint2() //可以用MyPoint2去实例化MyPoint1的对象，因为这两个类的解构完全一样

//ts中是事实上继承
class Renlei{
   name:string='People'
   age:number=0
}

class Employee{  //虽然这个类没有明确使用extends来继承Renlei这个类，但是它拥有这个类的所有属性，而且有一些额外的属性，它是事实上的子类
   name:string='People'  //只不过如果使用extends关键字，父类有的属性就不用写，没有就必须写
   age:number=0
   salary:number=1000
}

let r:Renlei=new Employee() //父类类型变量可以接受子类的实例,但是只能使用父类的属性
console.log(r); //Employee { name: 'People', age: 0, salary: 1000 }



