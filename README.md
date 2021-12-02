# diffie-hellman-algorithm-with-des

author **_Ical Balino_**

## Protokol Pertukaran Kunci Diffie-Hellman
1. **Protokol 11**
    - Alice memilih bilangan bulat acak yang besar `x` dan mengirim hasil perhitungan berikut kepada Bob: `X = g^x mod n`
    - Bob memilih bilangan bulat acak yang besar `y` dan mengirim hasil perhitungan berikut kepada Alice: `Y = g^y mod n`
    - Alice menghitung `K = Y^x mod n`
    - Bob menghitung `K = X^y mod n`

    **OR**

2. **Protokol 12**
    - Alice memilih bilangan bulat acak yang besar `x` dan menghitung: `K = g^x mod n`
    - Bob memilih bilangan bulat acak yang besar `y` dan mengirim hasil perhitungan berikut kepada Alice: `Y = g^y mod n`
    - Alice mengirim hasil perhitungan berikut kepada Bob: `X = Y^x mod n`
    - Bob menghitung `z = y^-1` (balikan `y` dalam modulus `n`), `K' = X^z mod n`

## Inisialisasi
--> Bilangan Prima `n = 23` <br>
--> Akar Primitif `n` adalah `g = 9` <br>
--> Kunci private Alice `(x)`, kunci publik `(X, g, n)` <br>
--> Kunci private Bob `(y)`, kunci publik `(Y, g, n)` <br>
--> Pangakat **logaritma diskrit** `(x atau y)` dari `(X atau Y)` untuk basis `g (mod n)` <br>
--> Misalkan Alice memilih pangkat logaritma diskrit `x = 4` dan Bob memilih pangkat logaritma diskrit `y = 3` <br>
--> Alice menghitung `X = g^x mod n` <br>
--> `X = 9^4 mod 23` <br>
--> Bob menghitung `Y = g^y mod n` <br>
--> `Y = 9^3 mod 23` <br>
--> Alice mengirim hasil `X` ke Bob dan Bob mengirim hasil `Y` ke Alice <br>
--> Alice dan Bob menghitung kunci `K`, hasilnya `k = 9`

Jika Alice dan Bob sudah mempunyai kunci sesi yang sama, yaitu `K = k`. Kunci ini siap digunakan untuk melakukan komunikasi dengan **Kriptografi Simetri**.

## Setup
```

    // kode program menggunakan nodeJS (v14.15.3)

    npm install

    node app.js

```

## Workflow utilitas Algoritma
### 1. Program algoritma Diffie-Hellman
`dhAlgorithm.js` merupakan module program untuk Diffie-Hellman Algorithm.

```

    exports.dhaPertama = () => {...}
    exports.dhaKedua = () => {...}

```

Terdapat dua algoritma Diffie-Hellman yang mempunyai hasil keluaran yang berbeda, algoritma `dhaPertama` mengembalikan `Number` dan algoritma `dhaKedua` mengembalikan `String`. Silahkan gunakan salah satu algoritma sesuai kebutuhan. Algoritma `dhaKedua` menggunakan library/package `crypto` dari `javaScript` untuk destructure `createDiffieHellman` method dan generate keys secara otomatis.

### 2. Main program
`app.js` merupakan main program untuk view `dhAlgorithm.js` dan `des.js`

### 3. DES
`des.js` merupakan module untuk kriptografi simetri **DES (Data Encription Standard)**. Kode program digunakan untuk implementasi kunci sesi rahasia yang telah dibangkitkan dari algoritma pertukaran kunci Diffie-Hellman dan siap digunakan untuk melakukan komunikasi (encryption and decryption) perpesanan.

Menggunakan library/package `crypto` dari `javaScript` yang merupakan standard kriptografi untuk `modules crypto javaScript`.

```

    const crypto = require('crypto');

    exports.encryptDes = function(enData,KEY,IV){...}
    exports.decryptDes = function(deData,KEY,IV){...}

```
