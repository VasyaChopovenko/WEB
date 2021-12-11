console.log('<=========== TASK 10 ===========>');

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(
    {
        x: 1,
        y: "2",
        m: {
            x: [1, 2, 4]
        }
    })
);