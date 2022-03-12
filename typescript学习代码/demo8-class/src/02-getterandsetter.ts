//getter和setter
class MyObj{
    _length = 0;
    get length(){
        return this._length
    }

    set length(value){
        this._length=value
    }
}

let myobj=new MyObj()
myobj.length=100 //getter和setter作为为属性来用
console.log(myobj.length);

