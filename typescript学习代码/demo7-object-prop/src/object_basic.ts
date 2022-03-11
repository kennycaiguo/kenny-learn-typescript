/* function Saludar(person:{name:string,age:number}){ //写法1
    console.log(`Hello ${person.name},you are now ${person.age} years old!!!`);
    
} */

//Saludar({name:"Jennifer",age:19})

/* interface Person{ 
    name:string,
    age:number
}

function Saludar(person:Person){ //写法2，需要先定义一个接口类型
    console.log(`Hello ${person.name},you are now ${person.age} years old!!!`);
    
}

Saludar({name:"Jessca",age:18}) */

type Person={
    name:string,
    age:number
}

function Saludar(person:Person){ //写法2，需要先定义一个接口类型
    console.log(`Hello ${person.name},you are now ${person.age} years old!!!`);
    
}

Saludar({name:"Britney",age:18})