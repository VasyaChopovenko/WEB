console.log('<=========== TASK 14 ===========>');

function typeCheck(variable) {
    let type = Object.prototype.toString.call(variable);

    switch (type) {
        case '[object Object]':
            return "Object";

        case '[object Function]':
            return "Function";

        case '[object Date]':
            return "Object";

        case '[object Array]':
            return "Array";

        case '[object String]':
            return "String";

        case '[object Number]':
            return "Number";

        case '[object Boolean]':
            return "Boolean";

        case '[object Null]':
            return "Null";

        case '[object Undefined]':
            return "Undefined";

        default:
            return "Array-like";
    }
}

console.log(typeCheck()); //Undefind
console.log(typeCheck(true));
console.log(typeCheck(null));
console.log(typeCheck(1));
console.log(typeCheck("String"));
console.log(typeCheck(function () { }));
console.log(typeCheck([]));

x();

function x() {
    console.log(typeCheck(arguments));
    return 1;
}
