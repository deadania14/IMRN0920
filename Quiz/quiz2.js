/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 * 
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 * 
 * Selamat mengerjakan
 */

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/
console.log("-----No. 1-----");
class Score {
    // Code disini
    constructor(sub, p, em) {
        this.subject = sub;
        this.points = p;
        this.email = em;
    }
    avg() {
        if (typeof(this.points) === "object") {
            var jum = 0;
            for (let i = 0; i < this.points.length; i++) {
                jum += this.points[i]
            }
            var average = (jum / this.points.length).toFixed(1);
            return (average);
        } else {
            return (this.points);
        }
    }
}
var scoreDea = new Score("quiz", 10, "dea@gmail.com")
console.log(scoreDea.avg());
var scoreDeo = new Score("quiz", [8, 7, 10], "deoo@gmail.com")
console.log(scoreDeo.avg());

/*=========================================== 
  2. SOAL Create Score (10 Poin + 5 Poin ES6)
  ===========================================
  Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 
  
  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"
  
  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/
console.log("-----No. 2-----");
const data = [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88],
    ["bondra@mail.com", 70, 75, 78],
    ["regi@mail.com", 91, 89, 93]
]

function viewScores(data, subject) {
    //cek, subjeknya index ke berapa
    var indeks = 0;
    for (var i = 1; i < data[0].length; i++) {
        if (data[0][i] === subject) {
            indeks = i;
            break;
        }
    }
    //buat object untuk push ke dalam array yang akan di return 
    var ans = []
    for (var j = 1; j < data.length; j++) {
        var b = {}

        b.email = data[j][0];
        b.subject = data[0][indeks];
        b.points = data[j][indeks];
        ans.push(b)

    }
    console.log(ans);
}

// TEST CASE
viewScores(data, "quiz-1")
viewScores(data, "quiz-2")
viewScores(data, "quiz-3")

/*==========================================
  3. SOAL Recap Score (15 Poin + 5 Poin ES6)
  ==========================================
    Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"
  
    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate
  
    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate
  
    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant
  
    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour
  
*/
console.log("-----No. 3-----");

function recapScores(datas) {
    // code kamu di sini
    // cek predikat score murid
    for (let i = 1; i < datas.length; i++) {
        var email = datas[i][0];
        var nilai = datas[i].slice(1);
        var scoreD = new Score("quiz", nilai, email)
        var rata = scoreD.avg();
        var nomor = i + 1;
        var predikat = "";
        if (rata > 90 && rata < 100) {
            predikat = "honour"
        } else if (rata > 80 && rata < 91) {
            predikat = "graduate"
        } else if (rata > 70 && rata < 81) {
            predikat = "participant"
        }

        console.log(`${nomor}. Email: ${email}`);
        console.log(`Rata-rata: ${rata}`);
        console.log(`Predikat: ${predikat}`);
        console.log();
    }
}

recapScores(data);