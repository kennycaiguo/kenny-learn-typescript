//this类型
class Caja{
    name="";
    setName(value:string){
       this.name=value
       return this
    }
}


let cj=new Caja()
console.log(cj.setName("pompom girls"));//this是Caja类的实例
console.log("==============================================");
class BigCaja extends Caja{
   clear(){
       this.name=''
   }
}

let bc=new BigCaja()
console.log(bc.setName("big ass girls"));


class BaseBox{
    content=""
    IsTheSameContent(other:this){ //this转为类型
        return other.content==this.content
    }
}

let b1=new BaseBox()
let b2=new BaseBox()
console.log(b1.IsTheSameContent(b2)); //true
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

class NewBox extends BaseBox{
    newContent="new ?"
}

let base=new BaseBox()

let sonbox=new NewBox()
//这里如果使用sonbox.IsTheSameContent(base))就会报错，因为这里需要NewBox类型对象，传递Box对象是不兼容的
console.log(base.IsTheSameContent(sonbox));
