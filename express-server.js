import express from 'express';
import path from 'path';

const app = express();
const __dirname = process.cwd();
app.get('/', (req, res) => {
    res.send({ message: 'Hello Express' })
});
app.get('/index.*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/favicon.*', (req, res) => {
    res.sendFile(path.join(__dirname, req.path));
});

app.listen(3000);