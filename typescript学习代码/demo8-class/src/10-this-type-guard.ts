//基于类型守卫的this   this is 类型,用作函数的返回值
class FileSystemObject{
   
isFile(): this is FileRep{
    return this instanceof FileRep
  }
  
  isDirectory(): this is Directory{
     return  this instanceof Directory
  }
  
  isNetworked(): this is Networked & this{
     return this.networked
  }
  constructor(public path:string,private networked:boolean){} //参数也可以定义可见性？
}

class FileRep extends FileSystemObject{
  constructor(path:string,public content:string){
     super(path,false)
  }
}

class Directory extends FileSystemObject{
    children:FileSystemObject[]
    constructor(){
      super('',false)
      this.children=[]
    }

}

interface Networked{
   host:string
}

let fso:FileSystemObject=new FileRep('foo/bar.txt','foo')
console.log(fso.isFile()); //true
console.log(fso.isDirectory()); //false

