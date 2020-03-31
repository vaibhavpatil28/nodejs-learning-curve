import fs from 'fs';

// TODO : read file.

const readFileHandler = (err, file)=>{
    if (err) {
        console.error(err)
    }else{
        console.info('File data :', file);
    }
}
fs.readFile('example.txt','utf8', readFileHandler);