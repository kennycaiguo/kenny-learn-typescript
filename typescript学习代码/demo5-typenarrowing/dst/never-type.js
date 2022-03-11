"use strict";
function getArea2(shape) {
    switch (shape.kind) { //写法2
        case 'circle':
            return Math.PI * shape.radius ** 2;
        //break
        case 'square':
            return shape.sideLength ** 2;
        // break
        case 'triangle':
            return;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
