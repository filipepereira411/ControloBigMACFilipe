const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;

const server = http.createServer((req, res) => {
    // Força o Node.js a entregar o 'gestmefilipe.html' quando o utilizador aceder à raiz '/'
    let urlPath = req.url === '/' ? 'gestmefilipe.html' : req.url;
    let filePath = path.join(__dirname, urlPath);
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    if (extname === '.js') contentType = 'text/javascript';
    if (extname === '.css') contentType = 'text/css';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Ficheiro não encontrado no servidor local.', 'utf-8');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Servidor Node.js ativo! Aceda a: http://localhost:${PORT}`);
});
