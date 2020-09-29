// should run : before this function run npm install prompt-sync
var prompt = require('prompt-sync')();

function conditionalSwitch() {
    console.log("\nJawaban conditional Switch ");
    var hari = Number(prompt('Tanggal: '));
    // var bulan = prompt('Bulan: ');
    // var tahun = prompt('Tahun: ');
    var bulanEja = "";

    function bulanEjaCheck(a) {
        switch (a) {
            case 1:
                { return "Januari"; break; }
            case 2:
                { return "Februari"; break; }
            case 3:
                { return "Maret"; break; }
            case 4:
                { return "April"; break; }
            case 5:
                { return "Mei"; break; }
            case 6:
                { return "Juni"; break; }
            case 7:
                { return "Juli"; break; }
            case 8:
                { return "Agustus"; break; }
            case 9:
                { return "September"; break; }
            case 10:
                { return "Oktober"; break; }
            case 11:
                { return "November"; break; }
            case 12:
                { return "Desember"; break; }

            default:
                { console.log('Bulan yang kamu masukkan tidak dikenali'); }
        }
    }

    if (hari > 0 && hari < 32) {
        var bulan = Number(prompt('Bulan: '));
        if (bulan > 0 && bulan < 13) {
            var tahun = Number(prompt('Tahun: '));
            if (tahun > 1899 && tahun < 2200) {
                bulanEja = bulanEjaCheck(bulan);
                console.log(hari + ' ' + bulanEja + ' ' + tahun)
            } else {
                console.log("tahun yang kamu masukkan tidak dalam range yang diperbolehkan");
            }
        } else {
            console.log("kami tidak mengenali bulan yang kamu masukkan");
        }
    } else {
        console.log("tidak ada hari dengan input yang kamu berikan")
    }

}

function conditionIf() {
    console.log("\nJawaban conditional IF ");
    var name = prompt('Masukkan Nama:');
    var roles = [1, 2, 3]
    var tugas = "";
    var roleEja = "";
    while (name === '') {
        console.log("Nama harus diisi ya...");
        var name = prompt('Masukkan Nama');

    }
    // greeting the user
    console.log("Halo " + name + ", Pilih peranmu untuk memulai game!");
    // ask to choose a role
    console.log("Daftar peran \n 1. Penyihir \n 2. Guard \n 3. Werewolf");
    var role = Number(prompt('masukkan pilihan 1, 2 atau 3 ?'));
    // console.log(typeof role);
    while (!(roles.includes(role))) {
        console.log("\nRole tidak tersedia. masukkan angka ya");
        console.log("Daftar peran \n 1. Penyihir \n 2. Guard \n 3. Werewolf");
        var role = Number(prompt('masukkan pilihan 1, 2 atau 3 ?'));
    }

    if (role === 1) {
        tugas = "kamu dapat melihat siapa yang menjadi werewolf!";
        roleEja = "Penyihir";
    } else if (role === 2) {
        tugas = "kamu akan membantu melindungi temanmu dari serangan werewolf.";
        roleEja = "Guard";
    } else {
        tugas = "Kamu akan memakan mangsa setiap malam!";
        roleEja = "Werewolf";
    }

    console.log("Selamat datang di Dunia Werewolf, " + name);
    console.log("Halo " + roleEja + " " + name + ", " + tugas);
}

conditionIf();
conditionalSwitch();