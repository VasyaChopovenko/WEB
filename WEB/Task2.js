console.log('<=========== TASK 2 ===========>');

function take(callback, numberOfTimes) {
    let result = [];
    for (let i = 0; i < numberOfTimes; i++) {
        result.push(callback());
    }
    return result;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]