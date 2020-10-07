var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise

books.forEach(e => readBooksPromise(10000, e).then(function(fullfilled) {
    console.log(fullfilled);
}).catch(function(error) {
    console.log(error);
}))