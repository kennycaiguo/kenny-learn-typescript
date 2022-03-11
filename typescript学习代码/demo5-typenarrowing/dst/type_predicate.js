"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let f = {
        name: "nimo",
        swim: () => {
            console.log(`The fish  is swiming very fast`);
        }
    };
    let b2 = {
        name: "tracy",
        fly: () => {
            console.log(`The bird  is flying`);
        }
    };
    return true ? b2 : f;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1 = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter((pet) => {
    if (pet.name == 'frog') {
        return false;
    }
    return isFish(pet);
});
