function identity<T>(arg:T):T{
    return arg
}

let id:<T>(arg:T)=>T=identity
let id2:{<T>(arg:T):T} =identity

interface GenericIdentityFn{
    <T>(arg:T):T
}

let id3:GenericIdentityFn=identity

interface GenericIdentityFnuc<T>{ //这样子也是可以的
    (arg:T):T
}

let id4:GenericIdentityFnuc<string>=identity