/**push: menambah 1 nilai ke array ke index paling belakang
pop: menghapus 1 nilai dari array index paling belakang
unshift: menambah 1 nilai ke array index paling depan (index 0)
shift: menghapus 1 nilai dari array index paling depan (index 0)
join: menggabungkan seluruh element array menjadi sebuah string dan mengambil parameter sebagai simbol penyambung antar elemen
sort: mengurutkan elemen di dalam array sesuai alphabet
slice: mengambil beberapa lapis data
splice: mengubah nilai array dengan menghapus dan/atau menambah nilai baru ke array
split: memecah string dan mengembalikan array sesuai dengan separator / pemisah yang didefinisikan
*/

var feeling = ["dag", "dig"]
feeling.push("dug") // menambahkan nilai "dug" ke index paling belakang
feelling.pop() // menghapus nilai pada elemen terakhir array


var numbers = [0, 1, 2]
numbers.push(3)
console.log(numbers) // [0, 1, 2, 3]
    // Bisa juga memasukkan lebih dari satu nilai menggunakan metode push
numbers.push(4, 5)
console.log(numbers) // [0, 1, 2, 3, 4, 5] 

var numbers = [0, 1, 2, 3, 4, 5]
numbers.pop()
console.log(numbers) // [0, 1, 2, 3, 4] 

var numbers = [0, 1, 2, 3]
numbers.unshift(-1)
console.log(numbers) // [-1, 0, 1, 2, 3]

var numbers = [0, 1, 2, 3]
numbers.shift()
console.log(numbers) // [1, 2, 3] 

var numbers = [0, 1, 2, 3]
numbers.shift()
console.log(numbers) // [1, 2, 3] 

var numbers = [12, 1, 3]
numbers.sort()
console.log(numbers) // [1, 12, 3] 

var numbers = [12, 1, 3]
    // Mengurutkan secara Ascending
numbers.sort(function(value1, value2) { return value1 - value2 });
console.log(numbers) // [1, 3, 12]

// Mengurutkan secara Descending
numbers.sort(function(value1, value2) { return value2 - value1 });
console.log(numbers) // [12, 3, 1] 

var angka = [0, 1, 2, 3]
var irisan1 = angka.slice(1, 3)
console.log(irisan1) //[1, 2, 3]
var irisan2 = angka.slice(0, 2)
console.log(irisan2) //[0, 1, 2] 

var angka = [0, 1, 2, 3]
var irisan3 = angka.slice(2)
console.log(irisan3) // [2, 3]


/**
 * Jika diperhatikan, metode slice tidak mengubah Array yang awal dan hasil irisan array dapat kita tampung kembali ke variable yang baru. Oleh karena itu metode Slice juga berfungsi untuk membuat salinan atau “shallow copy” dari sebuah array. Cara membuat shallow copy dengan metode slice yaitu dengan tanpa memberikan parameter apapun pada metode slice.
 */
var angka = [0, 1, 2, 3]
var salinAngka = angka.slice()
console.log(salingAngka) // [0, 1, 2, 3]

// array.splice([IndexMulai], [JumlahNilaiYangDihapus], [NilaiYangDitambahkan1], [NilaiYangDitambahkan2], ...);

var fruits = ["banana", "orange", "grape"]
fruits.splice(1, 0, "watermelon")
console.log(fruits) // [ "banana", "watermelon", "orange", "grape"]


var fruits = ["banana", "orange", "grape"]
fruits.splice(0, 2)
console.log(fruits) // ["grape"]

var biodata = "name:john,doe"
var name = biodata.split(":")
console.log(name) // [ "name", "john,doe"]

var title = ["my", "first", "experience", "as", "programmer"]
var slug = title.join("-")
console.log(slug) // "my-first-experience-as-programmer"

// MULTIDIMENTIONAL ARRAY

var arrayMulti = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    // Maka sebagai gambaran, indeks dari array tersebut adalah 
    /*
        [
            [(0,0), (0,1), (0,2)],
            [(1,0), (1,1), (1,2)],
            [(2,0), (2,1), (2,2)]
        ] 
    */
console.log(arrayMulti[0][0]) // 1 
console.log(arrayMulti[1][0]) // 4
console.log(arrayMulti[2][1]) // 8