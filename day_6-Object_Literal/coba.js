var A = [
    [2.2, 3.3, 1.3],
    [1.2, 5.3, 2.2],
    [0.3, 2.2, 5.2]
];

var max = A.reduce(function(final, current) {
    for (var i = 0; i < final.length; ++i) {
        if (current[i] > final[i]) {
            final[i] = current[i];
        }
    }
    return final;
});

console.log(max);