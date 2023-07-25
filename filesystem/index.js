const fs = require('fs');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal Membaca berkas');
        return;
    }
    console.log(data);
}

fs.readFile('filesystem/notes.txt', 'UTF-8', fileReadCallback);