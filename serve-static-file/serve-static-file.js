import http from 'http';
import fs from 'fs';

const __dirname = process.cwd();
console.log('__dirname: ', __dirname);

const server = http.createServer((req, res) => {
    console.log('req.url: ', req.url);
    if (req.url === '/') {
        const readStream = fs.createReadStream(__dirname + '/serve-static-file/example.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    }
    if (req.url === '/json') {
        const readStream = fs.createReadStream(__dirname + '/serve-static-file/example.json');
        res.writeHead(200, { 'Content-Type': 'text/json' });
        readStream.pipe(res);
    }
    if (req.url === '/image') {
        const readStream = fs.createReadStream(__dirname + '/serve-static-file/nodejs.png');
        res.writeHead(200, { 'Content-Type': 'image/png' });
        readStream.pipe(res);
    }
});

server.listen(3000);