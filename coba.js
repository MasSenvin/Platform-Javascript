// Membuat input pilihan sesuai jumlah yang dimasukkan
function buatInputPilihan(button) {
    document.getElementById("nama").disabled = true; // Nonaktifkan input nama
    let jumlah = parseInt(document.getElementById('jumlah').value); 
    let container = document.getElementById('pilihan-container');
    container.innerHTML = ''; // Bersihkan container

    // validasi jumlah yang dimasukkan tidak valid
    if (isNaN(jumlah) || jumlah < 1) {
        alert("Masukkan jumlah pilihan yang valid (minimal 1).");
        return;
    }
    document.getElementById("jumlah").disabled = true; // Nonaktifkan input jumlah

    // membuat input pilihan sesuai jumalah yang dimasukkan
    for (let i = 1; i <= jumlah; i++) {
        let inputGroup = document.createElement('div');
        let label = document.createElement('label');
        label.innerText = `Teks Pilihan ${i}:`;
        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Masukkan pilihan ${i}`;
        input.id = `pilihan${i}`;
        inputGroup.append(label, input);
        container.appendChild(inputGroup);
    }

    // memeriksa apakah tombol ok sudah ada
    if (!document.getElementById('ok-button')) {
        let button = document.createElement('button');
        button.innerText = 'OK';
        button.id = 'ok-button';
        button.onclick = function() {
            tampilkanPilihan();
            button.disabled = true;
            document.querySelectorAll('#pilihan-container input').forEach(input => input.disabled = true);
        };
        container.appendChild(button);
    }
    button.disabled = true;
}

// Menampilkan dropdown pilihan
function tampilkanPilihan() {
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let container = document.getElementById('hasil');
    container.innerHTML = '';

    let select = document.createElement('select');
    let pilihanArray = [];

    // mengambil nilai dari setiap input pilihan
    for (let i = 1; i <= jumlah; i++) {
        let pilihan = document.getElementById(`pilihan${i}`).value.trim();
        if (!pilihan) {
            alert(`Pilihan ${i} tidak boleh kosong!`);
            return;
        }
        pilihanArray.push(pilihan);
        let option = document.createElement('option');
        option.value = pilihan;
        option.innerText = pilihan;
        select.appendChild(option);
    }

    let button = document.createElement('button');
    button.innerText = 'Submit';
    button.onclick = function() {
        tampilkanHasil(pilihanArray);
    };

    container.append(select, button);
}

// Menampilkan hasil pilihan
function tampilkanHasil(pilihanArray) {
    let nama = document.getElementById('nama').value.trim();
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let pilihan = document.querySelector('select').value;

    // validasi nama tidak boleh kosong
    if (!nama) {
        alert("Nama tidak boleh kosong!");
        return;
    }

    alert(`Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlah} pilihan dan saya memilih ${pilihan}.`);
    location.reload(); // Refresh halaman
}
