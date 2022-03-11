interface Circle{
    kind:'circle',
    radius:number
}

interface Square{
    kind:'square',
    sideLength:number
}

interface Triangle{
    kind:'triangle',
    sideLength:number
}

type Shape2=Circle|Square|Triangle

function getArea2(shape:Shape2) { 
    switch(shape.kind){ //写法2
        case 'circle':
            return Math.PI* shape.radius**2
            //break
        case 'square':
            return shape.sideLength**2
           // break
        case 'triangle':
            return   
        default:
            const _exhaustiveCheck:never=shape
            return _exhaustiveCheck
    }
}