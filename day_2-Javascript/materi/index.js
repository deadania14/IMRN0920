// create a variable and print to console
// run this file with node index.js
var sayHello = "Hello world";
console.log(sayHello)

//try different types (string, number, boolean)
var name = "John" // Tipe
var angka1 = 12
var todayIsFriday = false

console.log(name) // "John"
console.log(angka1) // 12
console.log(todayIsFriday) // false

// hindari pendeklarasian tak bernilai
// var items
// console.log(items) // Undefined

/* Operator Aritmatika Operator yang melibatkan operasi matematika seperti tambah, kurang, kali, bagi.
Tambah (+)
Kurang (–)
Kali (*)
Bagi (/)
Modulus (%)

Operator Perbandingan
Equal Operator (==)
Not Equal ( != )
Strict Equal ( === ) Selain membandingkan dua nilai nya, strict equal juga membandingkan tipe datanya apakah sama atau tidak
Strict not Equal ( !== ) Kebalikan dari strict equal.
Kurang dari & Lebih Dari ( <, >, <=, >=)


Operator Kondisional, Operator yang mengkombinasikan dua nilai kebenaran . Terdapat operator AND (&&) dan OR (||)
OR ( || )
AND ( && )
*/

var angka = 11
console.log(angka != "11") // false, padahal "11" adalah string
console.log(angka !== "11") // true, karena tipe datanya berbeda
console.log(angka !== 11) // false