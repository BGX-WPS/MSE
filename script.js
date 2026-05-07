// Ambil elemen-elemen DOM yang dibutuhkan
const btnInput = document.getElementById('btn-input');
const btnLaporan = document.getElementById('btn-laporan');
const btnMaster = document.getElementById('btn-master');
const content = document.getElementById('content');

// Fungsi untuk menampilkan halaman Input Produksi
function showInputProduksi() {
    content.innerHTML = `
        <div class="form-container">
            <h2><i class="fas fa-keyboard"></i> Input Data Produksi</h2>
            <label for="namaProduk">Nama Produk:</label>
            <input type="text" id="namaProduk" name="namaProduk" placeholder="Contoh: Sepatu A">

            <label for="jumlahProduksi">Jumlah Produksi (Unit):</label>
            <input type="number" id="jumlahProduksi" name="jumlahProduksi" placeholder="Contoh: 150">

            <label for="tanggalProduksi">Tanggal Produksi:</label>
            <input type="date" id="tanggalProduksi" name="tanggalProduksi">

            <label for="keterangan">Keterangan Tambahan:</label>
            <textarea id="keterangan" name="keterangan" placeholder="Opsional: Catatan khusus"></textarea>

            <button id="simpanProduksiBtn">Simpan Data</button>
        </div>
    `;

    // Tambahkan event listener untuk tombol simpan setelah form dibuat
    document.getElementById('simpanProduksiBtn').addEventListener('click', handleSimpanProduksi);
}

// Fungsi untuk menampilkan halaman Filter Laporan
function showFilterLaporan() {
    content.innerHTML = `
        <div class="report-section">
            <h2><i class="fas fa-chart-bar"></i> Filter Laporan Produksi</h2>
            <p>Fitur filter laporan akan ditampilkan di sini.</p>
            <p>Anda bisa menambahkan form filter tanggal, produk, dll.</p>
            {/* Contoh elemen filter bisa ditambahkan di sini */}
            <label for="filterTanggalMulai">Tanggal Mulai:</label>
            <input type="date" id="filterTanggalMulai" name="filterTanggalMulai">

            <label for="filterTanggalAkhir">Tanggal Akhir:</label>
            <input type="date" id="filterTanggalAkhir" name="filterTanggalAkhir">

            <button>Tampilkan Laporan</button>
        </div>
    `;
}

// Fungsi untuk menampilkan halaman Kelola Master
function showKelolaMaster() {
    content.innerHTML = `
        <div class="master-section">
            <h2><i class="fas fa-cog"></i> Kelola Master Data</h2>
            <p>Halaman ini digunakan untuk mengelola data master seperti pekerja, mesin, atau bahan baku.</p>
            <p>Fitur login dan manajemen data akan diimplementasikan di sini.</p>
        </div>
    `;
}

// Fungsi untuk menangani penyimpanan data produksi (placeholder)
function handleSimpanProduksi() {
    const namaProduk = document.getElementById('namaProduk').value;
    const jumlahProduksi = document.getElementById('jumlahProduksi').value;
    const tanggalProduksi = document.getElementById('tanggalProduksi').value;
    const keterangan = document.getElementById('keterangan').value;

    // Validasi sederhana
    if (!namaProduk || !jumlahProduksi || !tanggalProduksi) {
        alert('Mohon lengkapi Nama Produk, Jumlah Produksi, dan Tanggal Produksi.');
        return;
    }

    // --- BAGIAN INTEGRASI GOOGLE SHEETS ---
    // Di sini Anda akan menambahkan kode untuk mengirim data ke Google Apps Script
    // Contoh menggunakan fetch API (memerlukan Google Apps Script yang sudah di-deploy)
    /*
    const scriptURL = 'URL_GOOGLE_APPS_SCRIPT_ANDA'; // Ganti dengan URL deploy script Anda
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({
            namaProduk: namaProduk,
            jumlahProduksi: jumlahProduksi,
            tanggalProduksi: tanggalProduksi,
            keterangan: keterangan
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Data berhasil disimpan!');
            // Kosongkan form setelah berhasil disimpan
            document.getElementById('namaProduk').value = '';
            document.getElementById('jumlahProduksi').value = '';
            document.getElementById('tanggalProduksi').value = '';
            document.getElementById('keterangan').value = '';
        } else {
            alert('Gagal menyimpan data. Silakan coba lagi.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat menyimpan data.');
    });
    */

    // Untuk saat ini, kita tampilkan alert saja sebagai placeholder
    alert(`Data akan disimpan:\nNama: ${namaProduk}\nJumlah: ${jumlahProduksi}\nTanggal: ${tanggalProduksi}\nKeterangan: ${keterangan || '-'}`);

    // Opsional: Kosongkan form setelah "disimpan"
    // document.getElementById('namaProduk').value = '';
    // document.getElementById('jumlahProduksi').value = '';
    // document.getElementById('tanggalProduksi').value = '';
    // document.getElementById('keterangan').value = '';
}


// Tambahkan event listener ke tombol navigasi
btnInput.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah link default '#'
    showInputProduksi();
});

btnLaporan.addEventListener('click', (e) => {
    e.preventDefault();
    showFilterLaporan();
});

btnMaster.addEventListener('click', (e) => {
    e.preventDefault();
    showKelolaMaster();
});

// Panggil fungsi untuk menampilkan konten awal (opsional, jika ingin langsung tampilkan form)
// showInputProduksi();