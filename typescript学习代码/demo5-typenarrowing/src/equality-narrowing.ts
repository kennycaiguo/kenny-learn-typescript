function example(x:string|number,y:string|boolean){
    if(x===y){ //在这里只有x和y的类型相同，它们才有可能全等
        console.log( x.toUpperCase()+","+y.toLowerCase());
    }else{
        console.log(`x=${x},y=${y}`);
        
    }
}

example(100,true)

function printAll2(strs:string|string[]|null){
    if(strs!=null){
        if(typeof strs=='object') //注意，null也是object类型，后面返回true，
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
    
}

printAll2(null)

interface Container{
    value:number|null|undefined
}

function multiplyValue(c:Container,factor:number)
{
   if(c.value!=null){ 
    c.value *=factor
       console.log("result is:"+c.value);
       
   }
}

multiplyValue({value:undefined},6)