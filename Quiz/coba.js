// // /*const data = [
// //     ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
// //     ["abduh@mail.com", 78, 89, 90],
// //     ["khairun@mail.com", 95, 85, 88],
// //     ["bondra@mail.com", 70, 75, 78],
// //     ["regi@mail.com", 91, 89, 93]
// // ]

// // var key = ""
// // console.log(data[0].length);

// // var ans = []
// // for (var i = 1; i < data[0].length; i++) {
// //     var b = {}
// //     b[data[0][0]] = data[i][0];
// //     b[data[0][1]] = data[i][1];
// //     b[data[0][2]] = data[i][2];
// //     b[data[0][3]] = data[i][3];
// //     ans.push(b)

// // }

// // console.log(ans);
// // */

// // const data = [
// //     ["email", "quiz-1", "quiz-2", "quiz-3"],
// //     ["abduh@mail.com", 78, 89, 90],
// //     ["khairun@mail.com", 95, 85, 88],
// //     ["bondra@mail.com", 70, 75, 78],
// //     ["regi@mail.com", 91, 89, 93]
// // ]

// // function viewScores(data, subject) {
// //     //cek, subjeknya index ke berapa
// //     var indeks = 0;
// //     for (var i = 1; i < data[0].length; i++) {
// //         if (data[0][i] === subject) {
// //             indeks = i;
// //             break;
// //         }
// //     }
// //     //buat object untuk push ke dalam array yang akan di return 
// //     var ans = []
// //     for (var j = 1; j < data.length; j++) {
// //         var b = {}

// //         b.email = data[j][0];
// //         b.subject = data[0][indeks];
// //         b.points = data[j][indeks];
// //         ans.push(b)

// //     }
// //     console.log(ans);
// // }

// // // TEST CASE
// // viewScores(data, "quiz-1")
// // viewScores(data, "quiz-2")
// // viewScores(data, "quiz-3")

// // class Score {
// //     // Code disini
// //     constructor(sub, p, em) {
// //         this.subject = sub;
// //         this.points = p;
// //         this.email = em;
// //     }
// //     avg() {
// //         if (typeof(this.points) === "object") {
// //             var jum = 0;
// //             for (let i = 0; i < this.points.length; i++) {
// //                 jum += this.points[i]
// //             }
// //             var average = jum / this.points.length;
// //             console.log(Math.ceil(average));
// //         } else {
// //             console.log(this.points);
// //         }
// //     }
// // }
// // var scoreDea = new Score("quiz", 10, "dea@gmail.com")
// // scoreDea.avg()
// // var scoreDeo = new Score("quiz", [8, 7, 10], "deoo@gmail.com")
// // scoreDeo.avg()

// // var a = 5;
// // var b = [5, 6, 7];
// // if (typeof(b) === "object") {
// //     console.log("ini object");
// // }

// // console.log(typeof(b));

// const data = [
//         ["abduh@mail.com", 78, 89, 90],
//         ["khairun@mail.com", 95, 85, 88],
//         ["bondra@mail.com", 70, 75, 78],
//         ["regi@mail.com", 91, 89, 93]
//     ]
//     // 1. Email: abduh@mail.com
//     // Rata-rata: 85.7
//     // Predikat: graduate

// // nilai > 70 "participant"
// // nilai > 80 "graduate"
// // nilai > 90 "honour"
// class Score {
//     // Code disini
//     constructor(sub, p, em) {
//         this.subject = sub;
//         this.points = p;
//         this.email = em;
//     }
//     avg() {
//         if (typeof(this.points) === "object") {
//             var jum = 0;
//             for (let i = 0; i < this.points.length; i++) {
//                 jum += this.points[i]
//             }
//             var average = jum / this.points.length;
//             return (Math.ceil(average));
//         } else {
//             return (this.points);
//         }
//     }
// }

// function recapScores(datas) {
//     // code kamu di sini
//     // cek predikat score murid
//     for (let i = 1; i < datas.length; i++) {
//         var email = datas[i][0];
//         var nilai = datas[i].slice(1);
//         var scoreD = new Score("quiz", nilai, email)
//         var rata = scoreD.avg();
//         var nomor = i + 1;
//         var predikat = "";
//         if (rata > 90 && rata < 100) {
//             predikat = "honour"
//         } else if (rata > 80 && rata < 91) {
//             predikat = "graduate"
//         } else if (rata > 70 && rata < 81) {
//             predikat = "participant"
//         }

//         console.log(`${nomor}. Email: ${email}`);
//         console.log(`Rata-rata: ${rata}`);
//         console.log(`Predikat: ${predikat}`);
//         console.log();
//     }
// }

// recapScores(data);
// // console.log(data[0].length);

// var number = 85.66666666666667;
// console.log(number.toFixed(1));

// if(5+2 === 7 && 4>5 || "Hi"==="Hi"){
//     console.log("true");
// }else {
//     console.log("false");
// }

// let sum = 0 
// for (const i= 2; i <= 6;i++){
//     sum +=i;
// }
// console.log(sum);

// const propKey = "field 12";
// const person = {
//     [propKey]:"Abduh"
// }
// console.log(person["field 12"]);

const daftarHobi = ['Olahraga', 'Makan', 'Ngoding'];
let hobiFavorit;
for(const hobi of daftarHobi){
    hobiFavorit = hobi;
}
console.log(hobiFavorit);