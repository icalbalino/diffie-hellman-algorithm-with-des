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

## Workflow Algoritma 

## DES