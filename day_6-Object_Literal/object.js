var d = new Date();
var n = d.getFullYear();
// console.log(n);

function arrayToObject(arr) {
    // Code di sini 
    var obj = {};
    var ans = {};
    for (var i = 0; i < arr.length; i++) {
        obj["firstName"] = arr[i][0];
        obj["lastName"] = arr[i][1];
        obj["gender"] = arr[i][2];
        if (arr[i][3] === undefined || (n - arr[i][3]) < 0) {
            obj["age"] = "Invalid Birth Year";
        } else {
            obj["age"] = n - arr[i][3];
        }
        process.stdout.write((i + 1) + ". " + arr[i][0] + " " + arr[i][1] + ": ")
        console.log(obj);
    }
}

// Driver Code
var people = [
    ["Bruce", "Banner", "male", 1975],
    ["Natasha", "Romanoff", "female"]
]
var people2 = [
    ["Tony", "Stark", "male", 1980],
    ["Pepper", "Pots", "female", 2023]
]

console.log("-----------------No. 1-----------------");
arrayToObject(people);
arrayToObject(people2);

function checkCart(crd, items, krg) {
    var n = Object.keys(items).length;
    var options = []
    var cart = krg
    var credit = crd;
    //mencek apakah ada pilihan barang yang harganya dibawah atau sama dengan credit
    for (var i = 0; i < n; i++) {
        if (credit >= (items[i]).harga) {
            options.push((items[i]));
        }
    }
    //jika tidak ada pilihan, maka cartnya langsung di return
    if (options.length === 0) {
        return cart;
    }
    //memeriksa harga paling mahal dalam opsi
    var max = options[0].harga;
    var index = 0;
    for (var j = 1; j < options.length; j++) {
        var val = options[j].harga;
        max = (val > max) ? val : max
    }
    //cek, barang mana yang harganya tertera
    for (var k = 1; k < options.length; k++) {
        if (options[k].harga === max) {
            index = k;
        }
    }
    //masukkan opsi dengan index yang sesuai ke dalam cart
    cart.push(options[index])
    var kembalian = credit - max;
    return checkCart(kembalian, options, cart)
}

function shoppingTime(idMember, credit) {
    //cek apakah member atau bukan
    if (idMember === undefined || idMember === "") {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else {
        var items = {
                0: {
                    nama: "Sepatu Stacattu",
                    harga: 1500000,
                },
                1: {
                    nama: "Baju Zoro",
                    harga: 500000,
                },
                2: {
                    nama: "Baju H&N",
                    harga: 250000,
                },
                3: {
                    nama: "Sweater Uniklooh",
                    harga: 175000,
                },
                4: {
                    nama: "Casing Handphone",
                    harga: 50000,
                },
            }
            //mencek berapa jumlah item dalam array
        var n = Object.keys(items).length;
        var options = []
            //memasukan opsi pilihan barang yang sesuai dengan credit
        for (var i = 0; i < n; i++) {
            if (credit >= (items[i]).harga) {
                options.push((items[i]));
            }
        }
        //uang tidak cukup bila tidak ada yang bisa dibeli
        if (options.length === 0) {
            return "Mohon maaf, uang tidak cukup";
        } else {

            // return "lanjut";
            var cart = [];
            //mendapatkan keranjang dengan kesesuaian barang
            var keranjang = checkCart(credit, items, cart);

            //barang tidak boleh dibeli lebih dari 1 masing2 item
            keranjang = [...new Set(keranjang)];
            // console.log(keranjang);
            // console.log(keranjang[0].nama);
            var listPurchased = [];
            // console.log(keranjang.length);

            //mencari kembalian
            var change = credit;
            for (var y = 0; y < keranjang.length; y++) {
                change = change - keranjang[y].harga;
                listPurchased.push(keranjang[y].nama);
            }
            // console.log(listPurchased);
            // console.log(change);
            var ans = {};
            ans["memberId"] = idMember;
            ans["money"] = credit;
            ans["listPurchased"] = listPurchased;
            ans["changeMoney"] = change;
            return ans;
        }

    }
}
console.log("-----------------No. 2-----------------");
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja



function checkTarif(start, end) {

    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    // var p = arr;
    var s = false;
    var tarif = 0;
    for (var m = 0; m < rute.length; m++) {
        if (start === rute[m]) {
            s = true;
            tarif += 2000;
        } else if (end === rute[m]) {
            break;
        } else if (s === true) {
            tarif += 2000;
        }
    }
    return tarif;
}

function naikAngkot(arr) {
    var ans = [];
    for (var e = 0; e < arr.length; e++) {
        var b = {};
        b["penumpang"] = arr[e][0];
        b["naikDari"] = arr[e][1];
        b["tujuan"] = arr[e][2];
        b["bayar"] = checkTarif(arr[e][1], arr[e][2]);
        ans.push(b);
    }
    return ans;

}

console.log("-----------------No. 3-----------------");
//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]