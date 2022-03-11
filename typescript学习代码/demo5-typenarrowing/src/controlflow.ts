function exam() {
    let x:number|string|boolean
    x=Math.random()<0.5
    //此时x是Boolean类型
    console.log(x);
    if(Math.random()<0.5){
        x="hello girls!!!"
        //此时x是字符串
        console.log(x);
        
    }else{
        x=100 //此时x是number类型
        console.log(x);
        
    }
    return x //x的类型？
}

 x=exam() //x的类型被缩小为number|string
 x="sexy"
 x=100
 