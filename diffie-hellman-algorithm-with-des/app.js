const algoritmaSatu = require('./dhAlgorithm');
const algoritmaDua = require('./dhAlgorithm');
const crypto = require('crypto');
const des = require('./des');


console.log('dha 1')
const algoritma1 = algoritmaSatu.dhaPertama();
console.log(algoritma1,'\n\n');
console.log('dha 2')
const algoritma2 = algoritmaDua.dhaKedua()
console.log(algoritma2, '\n\n');

// fungsi untuk pilih algoritma diffie-hellman
function pilihdha(_ygDipilih) {
    var temp = _ygDipilih;
    if (_ygDipilih === algoritma1) {
        var buff1 = crypto.randomBytes(algoritma1);
        temp = buff1.toString('hex').slice(10);
        return temp;
    }
    if (_ygDipilih === algoritma2) {
        for (let i = 0; i < 2; i++) {
            temp += algoritma2;
        }
        return temp.slice(4);
    }
}
// masukan algoritma, algoritma1 atau algoritma2
const kunciK = pilihdha(algoritma2)


// Kriptografi Simetri DES
const KEY = kunciK;
const buff2 = crypto.randomBytes(8);
const IV = buff2.toString('hex').slice(8);
// var IV = [0x12, 0x34, 0x56, 0x78, 0x90, 0xAB, 0xCD, 0xEF];
var message = "i love you like ocean love water";

console.log("~~~~~IMPLEMENTASI KRIPTOGRAFI SIMETRI DARI KUNCI SESI RAHASIA YANG TELAH DI BANGKITKAN~~~~~")
const en = des.encryptDes(message,KEY,IV);
console.log("-------------------------------------------------------------------------------------------")
console.log("|")
console.log("| Encryption: " + en);
const de = des.decryptDes(en,KEY,IV);
console.log("| Decryption：" + de);
console.log("|")
console.log("-------------------------------------------------------------------------------------------")
