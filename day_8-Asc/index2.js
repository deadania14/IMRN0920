var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise

// books.forEach(e => readBooksPromise(10000, e).then(function(fullfilled) {
//     console.log(fullfilled);
// }).catch(function(sisaWaktu) {
//     console.log(sisaWaktu);
// }))

// async function asyncCall() {
//     let t = 10000
//     for (let i = 0; i < books.length; i++) {
//         t = await readBooksPromise(t, books[i]).then(function(sisaWaktu) {
//                 return sisaWaktu;
//             })
//             .catch(function(sisaWaktu) {
//                 return sisaWaktu;
//             })
//     }
//     console.log("selesai")
// }

// asyncCall();

async function callPromise(time, bookarr) {
    if (bookarr.length === 0) {
        console.log("Tidak ada buku yang bisa dibaca lagi");
    } else {

        time = await readBooksPromise(time, bookarr[0]).then(function(sisaWaktu) {
                return callPromise(sisaWaktu, bookarr.slice(1));
            })
            .catch(function(sisaWaktu) {
                return sisaWaktu;
            })
    }
}

callPromise(10000, books);