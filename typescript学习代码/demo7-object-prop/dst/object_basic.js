"use strict";
/* function Saludar(person:{name:string,age:number}){ //写法1
    console.log(`Hello ${person.name},you are now ${person.age} years old!!!`);
    
} */
function Saludar(person) {
    console.log(`Hello ${person.name},you are now ${person.age} years old!!!`);
}
Saludar({ name: "Britney", age: 18 });
