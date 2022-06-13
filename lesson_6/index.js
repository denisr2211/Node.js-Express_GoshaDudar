let fs = require('fs');

let file_readed = fs.readFileSync('text.txt', 'utf8');
let message = "Привет Node.js\n" + file_readed;
fs.writeFileSync('some_new_file.txt', message);
