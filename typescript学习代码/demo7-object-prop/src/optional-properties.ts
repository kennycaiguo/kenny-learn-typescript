type Shape={

}

interface PaintOptions{
  shape:Shape,
  xPos?:number,
  yPos?:number
}

/* function paintShape(opts:PaintOptions){
  let xPos=opts.xPos
  let yPos=opts.yPos
  console.log(`x: ${xPos},y:${yPos}`);
  
} */

/* function paintShape(opts:PaintOptions){ //过滤undefined的写法1
    let xPos=opts.xPos==undefined?0:opts.xPos
    let yPos=opts.yPos==undefined?0:opts.yPos
    console.log(`x: ${xPos},y:${yPos}`);
    
  } */

function paintShape({shape,xPos=0,yPos=0}:PaintOptions){ //过滤undefined的写法2,使用解构表达式，并且传递默认值，注意解构表达式花括号里面
                                                         //不能使用类型注释
    
    console.log(`x: ${xPos},y:${yPos}`);
    
  }  

let shape:Shape={}
paintShape({shape})
paintShape({shape,xPos:100})
paintShape({shape,yPos:100})
paintShape({shape,xPos:100,yPos:100})