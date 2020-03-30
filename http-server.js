import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/favicon.ico') {
        res.write('')
    }else{
        res.write('Hello HTTP')
    }
    res.end();
});

server.listen(3000);