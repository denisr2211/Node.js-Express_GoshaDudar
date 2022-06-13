const fs = require('fs');

// Подключение к локальному серверу
const http = require('http');

const server = http.createServer(function (req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, {
        // 'Content-Type': 'text/html; charset=utf-8'  // вывод html в браузере
        'Content-Type': 'application/json; charset=utf-8'  // // вывод JSON в браузере
    });
    const obj = {
        model: 'Audi',
        speed: '235',
        wheels: 4
    };
    res.end(JSON.stringify(obj));
    // const myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    // myReadShort.pipe(res);  // pipe позволяет прогружать и отображать данные постепенно (частями) в браузере
});

server.listen(5500, '127.0.0.1');
console.log("Мы отслеживаем порт 5500");