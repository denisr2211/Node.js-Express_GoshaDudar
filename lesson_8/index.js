// создание локального сервера
// Единый указатель ресурса (Uniform Resource Locator, URL) 
// — строка, однозначно определяющая, где в интернете находится ресурс.

const http = require('http');

const server = http.createServer(function(req, res) {
    console.log("URL страницы: " + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Hello NODE.JS');
});

server.listen(5500, '127.0.0.1');
console.log("Мы отслеживаем порт 5500");