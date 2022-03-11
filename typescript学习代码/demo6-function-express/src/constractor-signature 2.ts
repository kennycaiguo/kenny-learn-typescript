interface CallOrConstractor{ //定义一个既可以直接调用，也可以实例化的接口
  new (s:string):Date
  (n?:number):number //调用签名
}

function myfn(date:CallOrConstractor) {
    let d=new date('2021-12-20')
    let n=date(100)
}