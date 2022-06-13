let fs = require('fs');

// fs.unlink('file.txt', function() {});  // удаляем файл

// fs.mkdirSync('new-one');  // создаем папку синхронно
// fs.rmdirSync('new-one');  // удаляем папку синхронно


// ассинхронное создание папки, потом файла и запись в этот файл текста
// fs.mkdir('new-one', function() {
//     fs.writeFile('./new-one/some_new.txt', 'Hello people!', function() {     
//         console.log("Все сработало");
//     });
// });


// асинхронное удаление сначала файла в папке, а потом и папки
fs.unlink('./new-one/some_new.txt', function() {
    fs.rmdir('new-one', function() {});
});


