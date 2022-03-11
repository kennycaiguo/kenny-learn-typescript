"use strict";
function createLabel(idOrname) {
    throw '';
}
let l1 = createLabel('typescript'); //NameLabel
let l2 = createLabel(100); //IdLabel
let l3 = createLabel(Math.random() > 0.5 ? 'hello' : 45); //NameLabel|IdLabel
