type Fish={swim:()=>void}
type Bird={fly:()=>void}
type Human={
    swim?:()=>void,
    fly?:()=>void
}

function move(animal:Fish|Bird|Human){
    if("swim" in animal){
        //此时animal相当于是Fish|Human
        //需要使用类型断言将其断言为Fish才能调用下面的方法
        return (animal as Fish).swim()
    }
      //此时animal相当于是Bird|Human
      //需要使用类型断言将其断言为Bird才能调用下面的方法

    return (animal as Bird).fly()
}

var fish:Fish={
    swim:function(){
        console.log("Fish is swimming very fast in the sea");
    }
}

let bird:Bird={
    fly:()=>{
        console.log("Bird is swimming very fast in the sea");
    }
}

move(fish)
move(bird)

