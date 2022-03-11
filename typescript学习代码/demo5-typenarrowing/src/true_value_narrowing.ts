function printAll(strs:string|string[]|null){
    if(strs && typeof strs=='object') //注意，null也是object类型，后面返回true，
    {
        for (const s of strs) {
            console.log(s);
        }
    }else if(typeof strs=='string'){
        console.log(strs);
        
    } else{
        console.log("null");
        
    }
}

printAll(["jack",'mary',"jason"])

function multiplyAll(values: number[]|undefined,factor: number){
   if(!values){
       return values
   }else{
       return values.map((x)=>{
          return x*factor
       })
   }
}

//console.log(multiplyAll(undefined,3));
console.log(multiplyAll([3,4],2)); //[ 6, 8 ]

