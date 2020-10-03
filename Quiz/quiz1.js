function myApp() {
    var total = 5;
    var output = "";
    for (var i = 1; i <= total; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + ' ';

        }
        console.log(output);;
        output = "";
    }
}
myApp();

function balikString(a) {
    var string = ""
    for (let i = a.length - 1; i >= 0; i--) {
        string += a[i];
    }
    return string;
}

console.log(balikString("abcde")) // edcba 
console.log(balikString("rusak")) // kasur 
console.log(balikString("racecar")) // racecar 
console.log(balikString("haji")) // ijah


function DescendingTen(a) {

    if (a === undefined) {
        return "-1"
    } else {
        var str = "";
        for (var i = a; i > (a - 10); i--) {
            // console.log(i);
            str += i + " "
        }
        return (str);
    }

}
// console.log(DescendingTen(10)) //akan menampilkan 10 9 8 7 6 5 4 3 2 1 
// console.log(DescendingTen(20)) //akan menampilkan 20 19 18 17 16 15 14 13 12 11 
//Hint: Deretan angka yang menjadi output adalah dalam tipe data String, bukan Number. 
// TEST CASES Descending Ten 

console.log(DescendingTen(100)) // 100 99 98 97 96 95 94 93 92 91 
console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1 
console.log(DescendingTen()) // -1

function palindrome(a) {
    var string = ""
    for (let i = a.length - 1; i >= 0; i--) {
        string += a[i];
    }
    if (a === string) {
        return true;
    } else {
        return false;
    }
}
// TEST CASES Palindrome 
console.log(palindrome("kasur rusak")) // true 
console.log(palindrome("haji ijah")) // true 
console.log(palindrome("nabasan")) // false 
console.log(palindrome("nababan")) // true 
console.log(palindrome("jakarta")) // false

console.log();

function ularTangga() {

    var arr = [];
    var arrb = [];

    var n = 100;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i % 2 == 0) {
                arrb.push(n)
            } else {
                arrb.unshift(n)
            }
            n--;
        }
        arr.push(arrb)
        arrb = []
    }

    return arr;
}
// TEST CASE Ular Tangga 
console.log(ularTangga())