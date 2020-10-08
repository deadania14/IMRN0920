// di index.js
var readBooks = require('./callback.js')

var books = [
        { name: 'LOTR', timeSpent: 3000 },
        { name: 'Fidas', timeSpent: 2000 },
        { name: 'Kalkulus', timeSpent: 4000 }
    ]
    // Tulis code untuk memanggil
    // function readBooks di sini(salah)
    // books.forEach(e => readBooks(10000, e, (callbackFn) => {
    //     console.log(callbackFn);
    // }))

function baca(time, tbooks) {
    if (tbooks.length === 0) {
        console.log("Tidak ada buku yang bisa dibaca lagi");
    } else {
        readBooks(time, tbooks[0], sisaWaktu => {
            return baca(sisaWaktu, tbooks.slice(1))
        })

    }
}

baca(10000, books)


// DARI TUTOR:
// let t = 10000
// let i = 0;

// function panggil() {
//     readBooks(t, books[i], function(sisawaktu) {
//         t = sisawaktu
//         i++
//         if (i < books.length)
//             panggil()
//     })
// }

// panggil();