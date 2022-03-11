//在泛型中使用类类型
class BeeKeeper{
    hasMask:boolean=true;
}

class ZooKeeper{
    nameTag:string='Michael';
}
function create<T>(c:{new ():T}):T{ //这是一个工厂函数，专门用来创建类的实例
  return new c()
}

class Animal{
    legsCount:number=4;
}

class Bee extends Animal{
    keeper:BeeKeeper=new BeeKeeper()
}

class Lion extends Animal{
    keeper:ZooKeeper=new ZooKeeper()
}

function createInstance<A extends Animal>(a:new()=>A):A{
   return new a()
}

console.log(createInstance(Lion).keeper.nameTag);
console.log(createInstance(Bee).keeper.hasMask);
