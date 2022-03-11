//对象的结构
function sum({a,b,c}:{a:number,b:number,c:number}) //使用形参对象的三个参数去接受实参对象的三个值，这样子就可以在函数体中直接使用这三个值
{
    let total=a+b+c
   console.log("total="+total);
   
}
sum({a:10,b:100,c:300})