"use strict";
function move(animal) {
    if ("swim" in animal) {
        //此时animal相当于是Fish|Human
        //需要使用类型断言将其断言为Fish才能调用下面的方法
        return animal.swim();
    }
    //此时animal相当于是Bird|Human
    //需要使用类型断言将其断言为Bird才能调用下面的方法
    return animal.fly();
}
var fish = {
    swim: function () {
        console.log("Fish is swimming very fast in the sea");
    }
};
let bird = {
    fly: () => {
        console.log("Bird is swimming very fast in the sea");
    }
};
move(fish);
move(bird);
