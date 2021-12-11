console.log('<=========== TASK 8 ===========>');

function pluck(objects, fieldName) {
    let objectValues = [];
    for (let object of objects) {
        if (object[fieldName]) {
            objectValues.push(object[fieldName]);
        }
    }
    return objectValues;
}

let characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 },
    { 'last': 'fred', 'age': 40 }
];

console.log(pluck(characters, 'name'));