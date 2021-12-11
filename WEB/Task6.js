console.log('<=========== TASK 6 ===========>');

function partialAny(func, ...args) {
    var args = Array.from(args);
    return function () {
        var arrInside = Array.from(arguments);
        var j = 0;
        for (i = 0; i < args.length; i++) {
            if (args[i] == undefined && j < arrInside.length) {
                args = args.fill(arrInside[j], i, i + 1);
                j++;
            };
        };
        return func.apply(this, args);
    };
};


function test(a, b, c, d) {
    return "a=" + a + ", b=" + b + ", c=" + c + ", d=" + d;
}

var test1_3 = partialAny(test, 1, undefined, 3, undefined);
console.log(test1_3(22, 4));