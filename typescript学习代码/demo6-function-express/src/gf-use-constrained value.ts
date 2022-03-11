function minimumLength<T extends {length:number}>(o:T,minimumLength:number):T {
    return o.length>minimumLength? o:({length:minimumLength} as T)
}

//写法2
function minimumLength2<T extends {length:number}>(o:T,minimumLength:number):T {
   if(o.length>minimumLength)
   {
       return o
   }else{
       return {length:minimumLength} as T
   }
}

let len=minimumLength([1,2,3],4)
console.log(len);

let len2=minimumLength2([1,2,3],2)
console.log(len2);
