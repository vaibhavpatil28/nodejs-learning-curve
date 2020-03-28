import fs  from 'fs';

const data = fs.readFileSync('text.txt');
console.log('data', data.toString());
console.log('file reading end!!!');