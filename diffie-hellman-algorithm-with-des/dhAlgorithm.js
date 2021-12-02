exports.dhaPertama = () => {
    function power(m, n, p) {
        if (n == 1) { return m; }
        else { return Math.pow(m, n) % p; }
    }

    const p = 23;
    const g = 9;
    const a = 4;
    const b = 3;

    // console.log("The value of p: " + p);
    // console.log("The value of g: " + g);

    // Kunci yang dihasilkan Alice 
    console.log("Kunci private a dari Alice: " + a);
    const x = power(g, a, p); //6
    // Kunci yang dihasilkan Bob
    console.log("Kunci private b dari Bob  : " + b);
    const y = power(g, b, p); //16

    // Menghasilkan kunci rahasia (K) setelah pertukaran kunci 
    const ka = power(y, a, p); // Kunci K Alice
    const kb = power(x, b, p); // Kunci K Bob
    console.log(`Kunci K Alice  : ${ka}`); //9
    console.log(`Kunci K Bob    : ${kb}`); //9

    // Cek kalau kuncinya sama dan return
    const kunci = ka === kb;
    console.log(`Generated kunci sukses : ${kunci}`);
    return ka, kb;
}

exports.dhaKedua = () => {
    // Destructure createDiffieHellman method from crypto
    const { createDiffieHellman } = require('crypto');

    const alice = createDiffieHellman(23);              // Generate Alice's keys
    const alicePrime = alice.getPrime();                // Generate Alice's prime
    const aliceGenerator = alice.getGenerator()         // Generate Alice's generator
    const aliceKey = alice.generateKeys('base64');      // Generate Alice's private key
    const bob = createDiffieHellman( alicePrime, aliceGenerator );
    const bobKey = bob.generateKeys('base64');
    console.log("Kunci private Alice: " + aliceKey);
    console.log("Kunci private Bob  : " + bobKey);

    // Pertukaran kunci dan generate kunci rahasia (K)
    const aliceSecret = alice.computeSecret(bobKey, 'base64', 'base64'); // Kunci K Alice
    const bobSecret = bob.computeSecret(aliceKey, 'base64', 'base64'); // Kunci K Bob
    console.log(`Kunci K Alice  : ${aliceSecret.toString('utf8')}`);
    console.log(`Kunci K Bob    : ${bobSecret}`);

    // Cek kalau kuncinya sama dan return
    const kunci = aliceSecret === bobSecret
    console.log(`Generated kunci sukses : ${kunci}`);
    return aliceSecret, bobSecret;
}
