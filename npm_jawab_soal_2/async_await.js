function getData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Data berhasil diambil');
        }, 2000); // simulasi loading, diset 2 detik
    });
}

async function main(){
    console.log("loading....");
    try {
        const hasil = await getData();
        console.log(hasil);
        console.log('Data berhasil diload');
    } catch (jenisError) {
        console.error("ada error terjadi", jenisError)
    }
}

main();
