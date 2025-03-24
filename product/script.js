// Fungsi untuk memformat angka ke format Rupiah (contoh: 10000 => "10,000")
function formatRupiah(angka) {
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function generateJSON() {
    const namaList = document.getElementById("namaInput").value.trim().split("\n");
    const hargaList = document.getElementById("hargaInput").value.trim().split("\n");
    const barcodeList = document.getElementById("barcodeInput").value.trim().split("\n");

    let jsonData = {};
    let outputString = "{\n";

    for (let i = 0; i < namaList.length; i++) {
        const nama = namaList[i]?.trim();
        const harga = parseInt(hargaList[i]?.trim() || "0", 10);
        const barcode = barcodeList[i]?.trim();

        if (nama && harga && barcode) {
            jsonData[nama] = {
                price: formatRupiah(harga), // Harga diformat ke Rupiah
                barcode: barcode
            };

            // Menambahkan hasil yang diformat dalam bentuk JSON
            outputString += `  "${nama}": { "price": "${formatRupiah(harga)}", "barcode": "${barcode}" },\n`;
        }
    }

    // Menghapus koma di akhir dan menutup kurung kurawal JSON
    outputString = outputString.replace(/,\s*$/, "") + "\n}";
    document.getElementById("output").textContent = outputString;
}

function copyJSON() {
    const output = document.getElementById("output").textContent;
    if (!output) return alert("JSON masih kosong!");

    navigator.clipboard.writeText(output).then(() => {
        alert("JSON berhasil disalin ke clipboard!");
    }).catch(err => {
        console.error("Gagal menyalin JSON", err);
    });
}
