console.log('<=========== TASK 7 ===========>');

function bind(func, context) {
    return function () {
        func.call(context, ...arguments);
    }
}

window.x = 1;
let ctx = { x: 2 };

function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
testThis(100); // x=1, a=100

let boundFunction = bind(testThis, ctx);
boundFunction(100); // x=2, a= 100