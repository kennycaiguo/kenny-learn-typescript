type Color={
    color:string
}

type Circle={
    radius:number
}

type ColoredCircle=Color & Circle //可以使用两个类型交叉产生一个新类型

function printCirlce(circle:Color & Circle){ //将一个变量声明为也可以将两个类型交叉后的类型
  // console.log(circle.color);
  // console.log(circle.radius);
   console.log(circle);
   
}

printCirlce({color:"blue",radius:100})