/**
 * UNCOMMENT FUNCTION YOU WANT TO TEST
 */
function loopWhileUp() {
    console.log("LOOPING PERTAMA")
    var i = 0;
    while (i < 21) {
        (function(i) {
            setTimeout(function() {
                console.log(i + "- I love coding");
            }, 1000 * (i / 2));
        })(i += 2);
    }

}

function loopWhileDown() {
    console.log("LOOPING KEDUA")
    var i = 22;
    while (i > 2) {
        (function(i) {
            setTimeout(function() {
                console.log(i + "- I will become a mobile developer")
            }, 1000 * (22 - i) / 2)
        })(i -= 2)
    }
}

function loopWithFor() {
    console.log("no 2 loop with for")
    for (var i = 1; i < 21; i++) {
        if (i % 2 === 1 && i % 3 === 0) {
            console.log(i + "- I Love Coding ")
        } else if (i % 2 === 1) {
            console.log(i + "- Santai ")
        } else {
            console.log(i + "- Berkualitas ")
        }
    }
}

function createRectangle() {
    console.log("No. 3 membuat persegi panjang")
    var j = 0;
    while (j < 4) {
        for (var i = 1; i < 8; i++) {
            process.stdout.write("#")
        }
        console.log('');
        j++;
    }
}

function createStairs() {
    console.log("No. 4 membuat tangga")

    for (var j = 1; j < 8; j++) {

        for (var i = 1; i <= j; i++) {
            process.stdout.write("#")
        }
        console.log("")
    }
}

function papanCatur() {
    console.log("No. 5 membuat papan catur")
    var j = 1;
    while (j < 9) {
        for (var i = 1; i < 9; i++) {
            if (j % 2 === 1) {
                if (i % 2 === 0) {
                    process.stdout.write("#")
                } else {
                    process.stdout.write(" ")
                }
            } else {
                if (i % 2 === 0) {
                    process.stdout.write(" ")
                } else {
                    process.stdout.write("#")
                }
            }

        }
        console.log('');
        j++;
    }
}
//uncomment function you want to test
loopWhileUp();
// loopWhileDown();
// loopWithFor();
// createRectangle();
// createStairs();
// papanCatur();