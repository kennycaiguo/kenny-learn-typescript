function exFunc(s:string):void
function exFunc(s:object):void
function exFunc(s:string|object){ //如果两个重载签名的参数都只有一个，实现签名中参数必须使用联合类型
   if(typeof s=='string'){
      console.log("string:"+s);
      
   }else{
       console.log("object"+s);  
   }
}

exFunc({name:"jack",age:20})
exFunc("Jade")

function someFun(x:string):string
function someFun(x:boolean):boolean
function someFun(x:string|boolean):string|boolean{
    if(typeof x=='string'){
        return 'hello '+x
    }else{
        return x
    }
}

console.log(someFun("Jennifer"));
console.log(someFun(false));

