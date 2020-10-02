function noSatu() {
    console.log("-----No. 1-----");

    function range(startNum, finishNum) {
        var ans = [];
        if (finishNum === undefined || startNum === undefined || (startNum === undefined && finishNum === undefined)) {
            return -1;
        } else {

            // return (new Array(finishNum - startNum + 1)).fill(undefined).map((_, i) => i + startNum);
            // return Array.from({ length: finishNum - startNum + 1 }, (_, i) => i);


            if (finishNum > startNum) {
                for (let i = startNum; i <= finishNum; i++) {
                    ans.push(i);
                }
                return ans;
            } else {
                var nans = [];
                for (let i = finishNum; i <= startNum; i++) {
                    nans.push(i);
                }
                var narr = []
                    // var narr = ans.sort((a, b) => b - a).map(n => (n));
                    // var narr = ans.reverse()
                for (let j = nans.length; j > 0; j--) {
                    narr.push(nans[j - 1]);
                }
                return narr;
            }
        }
    }

    console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(1)) // -1
    console.log(range(11, 18)) // [11, 12, 13, 14, 15, 16, 17, 18]
    console.log(range(54, 50)) // [54, 53, 52, 51, 50]
    console.log(range()) // -1
}

function noDua() {
    console.log("-----No. 2-----");

    function rangeWithStep(start, end, step) {
        var answer = [];
        if (end === undefined || start === undefined || (start === undefined && end === undefined)) {
            return -1;
        } else {

            // return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
            // return Array.from({ length: end - start + 1 }, (_, i) => i);
            // console.log(start);

            if (end > start) {

                for (let n = start; n <= end; n = n + step) {
                    answer.push(n);
                }

                return answer;
            } else {
                var nans = [];
                for (let i = end; i <= start; i = i + step) {
                    nans.push(i);
                }
                var narr = []
                    // var narr = ans.sort((a, b) => b - a).map(n => (n));
                    // var narr = ans.reverse()
                for (let j = nans.length; j > 0; j = j - 1) {
                    narr.push(nans[j - 1]);
                }
                return narr;
            }
        }
    }

    console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
    console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
    console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
    console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

}

function noLima() {
    console.log("-----No. 5-----");
    // No 5

    function balikKata(a) {
        var string = ""
        for (let i = a.length - 1; i >= 0; i--) {
            string += a[i];
        }
        return string;
    }

    console.log(balikKata("Kasur Rusak")) // kasuR rusaK
    console.log(balikKata("SanberCode")) // edoCrebnaS
    console.log(balikKata("Haji Ijah")) // hajI ijaH
    console.log(balikKata("racecar")) // racecar
    console.log(balikKata("I am Sanbers")) // srebnaS ma I
}

function noTiga() {
    console.log("-----No. 3-----");

    function sum(start, end, step) {
        // ATURAN: Jika parameter ke-3 tidak diisi maka stepnya adalah 1.
        var jum = 0;

        if (start === undefined) {
            jum = 0
            return jum;
        } else if (end === undefined) {
            jum = start
            return jum;
        } else {
            if (step === undefined) {
                step = 1
            }
            if (end > start) {
                for (let n = start; n <= end; n = n + step) {
                    jum = jum + n
                }
                return jum;
            } else if (start > end) {
                for (let i = end; i <= start; i = i + step) {
                    jum = jum + i
                }
                return jum;
            }
        }
    }
    console.log(sum(1, 10)) // 55
    console.log(sum(5, 50, 2)) // 621
    console.log(sum(15, 10)) // 75
    console.log(sum(20, 10, 2)) // 90
    console.log(sum(1)) // 1
    console.log(sum()) // 0
}

function dataHandling(input) {
    console.log("-----No. 4-----");
    if (input.length === 0) {
        return
    } else {
        var string = "";
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input[i].length; j++) {
                if (j === 0) {
                    console.log("Nomor ID: " + input[i][j])
                } else if (j === 1) {
                    console.log("Nama Lengkap: " + input[i][j])
                } else if (j === 2) {
                    process.stdout.write("TTL :" + input[i][j])
                } else if (j === 3) {
                    console.log(" " + input[i][j])
                } else if (j === 4) {
                    console.log("Hobi :" + input[i][j])
                }


            }
            console.log();
        }
    }
}

function dataHandling2(array) {
    console.log("-----No. 6-----");

    function bulanEjaCheck(a) {
        switch (a) {
            case 1:
                { return "Januari"; break; }
            case 2:
                { return "Februari"; break; }
            case 3:
                { return "Maret"; break; }
            case 4:
                { return "April"; break; }
            case 5:
                { return "Mei"; break; }
            case 6:
                { return "Juni"; break; }
            case 7:
                { return "Juli"; break; }
            case 8:
                { return "Agustus"; break; }
            case 9:
                { return "September"; break; }
            case 10:
                { return "Oktober"; break; }
            case 11:
                { return "November"; break; }
            case 12:
                { return "Desember"; break; }

            default:
                {
                    console.log('Bulan yang kamu masukkan tidak dikenali');
                }
        }
    }
    var date = array[3]
    var ndate = date.split('/');
    var jdate = ndate.join('-');

    array.splice(4, 1);
    array.splice(4, 0, "Pria", "SMA Internasional Metro");
    array.splice(1, 1, "Roman Alamsyah Elsharawy");
    array.splice(2, 1, "Provinsi Bandar Lampung");

    console.log(array);
    console.log(bulanEjaCheck(Number(ndate[1])));
    console.log(ndate.sort(function(a, b) { return b - a }));
    console.log(jdate);
    console.log(array[1].slice(0, 15));
}


var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

var test = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
]


/**
 * Nomor ID:  0001
 Nama Lengkap:  Roman Alamsyah
 TTL:  Bandar Lampung 21/05/1989
 Hobi:  Membaca
 */

noSatu();
noDua();
noTiga()
dataHandling(test);
noLima();
dataHandling2(input);