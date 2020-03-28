import fs from 'fs';

fs.readFile('text.txt',(err, data)=>{
    if (err) {
        console.log('err', err);
        return;
    }
    console.log('data', data.toString());
} );
console.log('file reading end!!!');