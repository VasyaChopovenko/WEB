console.log('<=========== TASK 15 ===========>');

function shallowCopy(object) {
    let clone = new object.constructor;

    for (let key in object) {
        clone[key] = object[key];
    }

    return clone;
}

let a = { x: 1, y: 2, z: [1, 2, 3] };
let b = shallowCopy(a);
console.log(b);
b.x = 10;
console.log("object a.x = " + a.x);
console.log("object b.x = " + b.x);

b.z.push(4);
console.log(a.z);

let c = new Date(2014, 1, 1);
let d = shallowCopy(c);
d.setFullYear(2015);
console.log(c.getFullYear()); // 2014