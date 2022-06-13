const fs = require('fs');
// получаем данные потоком (постепенно, а не все сразу)
const myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf-8');
// записываем получаемые данные в новый файл news.txt
const myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function(chunk) {
    console.log("Новые данные получены:\n" + chunk);
    myWriteShort.write(chunk);
});