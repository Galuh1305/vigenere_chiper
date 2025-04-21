// Fungsi untuk mengenkripsi teks menggunakan Vigenère cipher
function encrypt() {
    // Ambil nilai dari textarea dan kata kunci, ubah menjadi huruf kapital
    const plaintext = document.getElementById("plaintext").value.toUpperCase();
    const keyword = document.getElementById("keyword").value.toUpperCase();
    let result = ""; // Variabel untuk menyimpan hasil enkripsi
    let keywordIndex = 0; // Indeks untuk melacak posisi dalam kata kunci

    // Iterasi melalui setiap karakter dalam plaintext
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i]; // Ambil karakter saat ini

        // Periksa apakah karakter adalah huruf A-Z
        if (char >= 'A' && char <= 'Z') {
            // Hitung posisi karakter dalam alfabet (0-25)
            const p = char.charCodeAt(0) - 'A'.charCodeAt(0);
            // Hitung posisi karakter kata kunci yang sesuai
            const k = keyword[keywordIndex % keyword.length].charCodeAt(0) - 'A'.charCodeAt(0);
            // Hitung karakter terenkripsi
            const encryptedChar = String.fromCharCode(((p + k) % 26) + 'A'.charCodeAt(0));
            result += encryptedChar; // Tambahkan karakter terenkripsi ke hasil
            keywordIndex++; // Pindah ke karakter berikutnya dalam kata kunci
        } else {
            result += char; // Jika bukan huruf, tambahkan karakter asli
        }
    }

    // Tampilkan hasil enkripsi di elemen dengan ID 'result'
    document.getElementById("result").innerText = result;
}

// Fungsi untuk mendekripsi teks menggunakan Vigenère cipher
function decrypt() {
    // Ambil nilai dari textarea dan kata kunci, ubah menjadi huruf kapital
    const ciphertext = document.getElementById("plaintext").value.toUpperCase();
    const keyword = document.getElementById("keyword").value.toUpperCase();
    let result = ""; // Variabel untuk menyimpan hasil dekripsi
    let keywordIndex = 0; // Indeks untuk melacak posisi dalam kata kunci

    // Iterasi melalui setiap karakter dalam ciphertext
    for (let i = 0; i < ciphertext.length; i++) {
        const char = ciphertext[i]; // Ambil karakter saat ini

        // Periksa apakah karakter adalah huruf A-Z
        if (char >= 'A' && char <= 'Z') {
            // Hitung posisi karakter dalam alfabet (0-25)
            const c = char.charCodeAt(0) - 'A'.charCodeAt(0);
            // Hitung posisi karakter kata kunci yang sesuai
            const k = keyword[keywordIndex % keyword.length].charCodeAt(0) - 'A'.charCodeAt(0);
            // Hitung karakter terdekripsi
            const decryptedChar = String.fromCharCode(((c - k + 26) % 26) + 'A'.charCodeAt(0));
            result += decryptedChar; // Tambahkan karakter terdekripsi ke hasil
            keywordIndex++; // Pindah ke karakter berikutnya dalam kata kunci
        } else {
            result += char; // Jika bukan huruf, tambahkan karakter asli
        }
    }

    // Tampilkan hasil dekripsi di elemen dengan ID 'result'
    document.getElementById("result").innerText = result;
}