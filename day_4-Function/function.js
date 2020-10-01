/*
    NO.1
*/

function teriak() {
    return ("Halo Sanbers!");
}

console.log('-'.repeat(process.stdout.columns))
console.log("NO.1");
console.log(teriak())

/*
    NO.2
*/

function kalikan(a, b) {
    return a * b;
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log('-'.repeat(process.stdout.columns))
console.log("NO.2");
console.log(hasilKali)


/*
    NO.3
    Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"
*/
function introduce(name, age, address, hobby) {
    return ("Nama saya " + name + ", umur saya " + " age tahun," + " alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby)
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log('-'.repeat(process.stdout.columns))
console.log("NO.3");
console.log(perkenalan)