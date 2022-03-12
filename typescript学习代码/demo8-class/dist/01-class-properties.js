"use strict";
/* class MyClass{
  name:string="hello";
  public doJob:()=>void=function() {
      console.log("doing some job");
      
  };

}

let mc:MyClass=new MyClass()
mc.name="Pretty girl"
mc.doJob() */
class Point {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.toString = function () {
            return `Point[x=${this.x},y=${this.y}]`;
        };
        this.x = x;
        this.y = y;
    }
}
class Point2 {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    toString() {
        return `Point[x=${this.x},y=${this.y}]`;
    }
}
let pt = new Point(5, 6);
console.log(pt.toString());
