// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Tulis code untuk memanggil function readBooks di sini
books.forEach(e => readBooks(10000, e, (callbackFn) => {
    console.log(callbackFn);
}))