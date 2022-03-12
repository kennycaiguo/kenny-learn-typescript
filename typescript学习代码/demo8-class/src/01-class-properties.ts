/* class MyClass{
  name:string="hello";
  public doJob:()=>void=function() {
      console.log("doing some job");
      
  };

}

let mc:MyClass=new MyClass()
mc.name="Pretty girl"
mc.doJob() */

class Point{
    x:number=0;
    y:number=0;
  
    constructor(x:number,y:number){ //只能有一个构造函数
        this.x=x;
        this.y=y;
    }
   toString:(this:Point)=>string=function(this:Point){
       return `Point[x=${this.x},y=${this.y}]`
   }
}

class Point2{
    x:number=0;
    y:number=0;
  
    constructor(x:number,y:number){ //只能有一个构造函数
        this.x=x;
        this.y=y;
    }
   toString(this:Point){
       return `Point[x=${this.x},y=${this.y}]`
   }
}

let pt:Point2 = new Point(5,6)
console.log(pt.toString());

