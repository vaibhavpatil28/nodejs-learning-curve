import fs from 'fs';

// TODO : create file.

const writeFileHandler = (err)=>{
    if (err) {
        console.error(err)
    }else{
        console.info('File successfully created !!!')
    }
}
fs.writeFile('example.txt', 'This is an example', writeFileHandler)