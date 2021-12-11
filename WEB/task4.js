console.log('<=========== TASK 4 ===========>');

function square(x) {
    return x * x;
}

function fmap(func, funcResult) {
    return function () {
        return func(funcResult.apply(null, arguments));
    }
}

let gen = sequence(1, 1);
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

function add(a, b) { 
    return a + b; 
}

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
