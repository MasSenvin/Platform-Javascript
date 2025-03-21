function buatInputPilihan(button) {
    document.getElementById("nama").disabled = true;
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let container = document.getElementById('pilihan-container');
    container.innerHTML = '';

    if (isNaN(jumlah) || jumlah < 1) {
        alert("Masukkan jumlah pilihan yang valid (minimal 1).");
        return;
    }
    document.getElementById("jumlah").disabled = true;

    for (let i = 1; i <= jumlah; i++) {
        let inputGroup = document.createElement('div');
        inputGroup.classList.add('input-group');

        let label = document.createElement('label');
        label.innerText = `Teks Pilihan ${i}:`;

        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Masukkan pilihan ${i}`;
        input.id = `pilihan${i}`;

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);
        container.appendChild(inputGroup);
        
    }
    

    let existingButton = document.getElementById('ok-button');
    if (!existingButton) {
        let button = document.createElement('button');
        button.innerText = 'OK';
        button.id = 'ok-button';
        button.onclick = function() {
            try {
                tampilkanPilihan();
            } catch (error) {
                alert(error.message);
            }
        };
        container.appendChild(button);
    }
    button.disabled = true;
    input.disabled = true;
}

function tampilkanPilihan() {
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let container = document.getElementById('hasil');
    container.innerHTML = '';

    let select = document.createElement('select');
    let pilihanArray = [];

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

    container.appendChild(select);
    container.appendChild(button);
}

function tampilkanHasil(pilihanArray) {
    let nama = document.getElementById('nama').value.trim();
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let pilihan = document.querySelector('select').value;

    if (!nama) {
        alert("Nama tidak boleh kosong!");
        return;
    }

    alert(`Hallo, nama saya ${nama}, saya mempunyai sejumlah ${jumlah} pilihan dan saya memilih ${pilihan}.`);
    location.reload();
}