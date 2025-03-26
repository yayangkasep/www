function generateJSON() {
    const namaList = document.getElementById("namaInput").value.trim().split("\n");
    const alamatList = document.getElementById("alamatInput").value.trim().split("\n");
    const teleponList = document.getElementById("teleponInput").value.trim().split("\n");
    const cashierList = document.getElementById("cashierInput").value.trim().split("\n");
    const codeList = document.getElementById("codeInput").value.trim().split("\n");

    let jsonData = {};

    for (let i = 0; i < codeList.length; i++) {
        let code = codeList[i].trim();
        if (code) { 
            jsonData[code] = {
                "nama": namaList[i]?.trim() || "",
                "alamat": alamatList[i]?.trim() || "",
                "telepon": teleponList[i]?.trim() || "",
                "cashier": cashierList[i]?.trim() || "",
                "code": code
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
