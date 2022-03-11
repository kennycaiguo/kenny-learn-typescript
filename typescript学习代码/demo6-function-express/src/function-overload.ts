//函数重载需要两个以上的函数签名
/*
  ts中函数重载的做法
  1.定义至少两个函数签名，参数不一样
  2.定义一个实现签名，该签名必须同时匹配这两个重载签名，否则报错
*/
function makeDate(timestamp:number):Date
function makeDate(m:number,y:number,d:number):Date
function makeDate(m:number,y?:number,d?:number):Date { //y和d是可选的所以这个实现签名可以匹配以上两个重载签名
    if(y!=undefined && d!=undefined){
        return new Date(m,y,d)
    } else{
        return new Date(m)
    }
}

console.log(makeDate(10,2021,8).toDateString());
console.log(makeDate(198876546644332).toDateString());
