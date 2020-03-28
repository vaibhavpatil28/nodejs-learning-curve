import fs from 'fs';
import events from 'events';

const myEvents = new events.EventEmitter();

fs.readFile('text.txt', (err, data) =>{
    console.log('File data : ', data.toString());
    myEvents.emit('readFile', data);    
});

myEvents.on('readFile', (data)=>{
    console.log('Emitted data : ', data);
});
