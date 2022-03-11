type DescribaleFunction={
   description: string
   (arg:number): boolean
}

function doTask(fn:DescribaleFunction) {
    console.log(fn.description+ " returned "+fn(100));
    
}

function  func(args:number) {
    console.log(args);
    return true
}

func.description='hello'
doTask(func)