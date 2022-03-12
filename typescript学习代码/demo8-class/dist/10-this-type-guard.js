"use strict";
//基于类型守卫的this   this is 类型,用作函数的返回值
class FileSystemObject {
    constructor(path, networked) {
        this.path = path;
        this.networked = networked;
    } //参数也可以定义可见性？
    isFile() {
        return this instanceof FileRep;
    }
    isDirectory() {
        return this instanceof Directory;
    }
    isNetworked() {
        return this.networked;
    }
}
class FileRep extends FileSystemObject {
    constructor(path, content) {
        super(path, false);
        this.content = content;
    }
}
class Directory extends FileSystemObject {
    constructor() {
        super('', false);
        this.children = [];
    }
}
let fso = new FileRep('foo/bar.txt', 'foo');
console.log(fso.isFile()); //true
console.log(fso.isDirectory()); //false
