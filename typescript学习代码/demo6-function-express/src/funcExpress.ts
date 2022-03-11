function greeter(fn:(a:string)=>void) {
    fn("Hello everyone!!!")
}

function printToConsole(s:string) {
    console.log(s);
    
}

greeter(printToConsole)