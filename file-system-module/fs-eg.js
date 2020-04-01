import fs from 'fs';

// fs.rename('example.txt', 'example1.txt', (err) =>{
//     if (err) {
//         console.error(err);
//     }else{
//         console.log('Successfuly renamed the file');
//     }
// });

// fs.appendFile('example1.txt', 'Some data.', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Successfuly appended data to the file');
//     }
// });

fs.unlink('example1.txt', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Successfuly deleted the file');
    }
});