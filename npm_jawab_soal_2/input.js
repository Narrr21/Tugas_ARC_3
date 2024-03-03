const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama: ', (nama) => {
    console.log(`Hallo, ${nama}!`);
    rl.close();
});