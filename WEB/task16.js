console.log('<=========== TASK 16 ===========>');

function deepClone(object) {
    let clone = {};

    for (let key in object) {
        if (object[key] instanceof Object)
            clone[key] = deepClone(object[key]);
        else
            clone[key] = object[key];
    }
    return clone;
}

const first = { x: 1, y: { z: 1 } };
const second = deepClone(first);
console.log(second);

const firstArray = [1, 2, 3, 5, {x: 2}, [4, 5]]
const secondArray = deepClone(firstArray);
console.log(secondArray);