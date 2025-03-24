function generateJSON() {
    const namaList = document.getElementById("namaInput").value.trim().split("\n");
    const hargaList = document.getElementById("hargaInput").value.trim().split("\n");
    const barcodeList = document.getElementById("barcodeInput").value.trim().split("\n");

    let jsonData = {};

    for (let i = 0; i < namaList.length; i++) {
        let nama = namaList[i]?.trim();
        let harga = parseInt(hargaList[i]?.trim() || "0", 10);
        let barcode = barcodeList[i]?.trim() || "";

        if (nama && harga && barcode) {
            jsonData[nama] = {
                "price": harga,
                "barcode": barcode
            };
        }
    }

    document.getElementById("output").textContent = JSON.stringify(jsonData, null, 2);
}

function copyJSON() {
    const output = document.getElementById("output").textContent;
    if (!output) return alert("JSON masih kosong!");

    navigator.clipboard.writeText(output).then(() => {
        alert("JSON berhasil disalin!");
    }).catch(err => {
        console.error("Gagal menyalin JSON", err);
    });
}
