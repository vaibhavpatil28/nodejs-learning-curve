import EventEmitter from 'events';

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() { return this._name}
}

const vaibhav = new Person('vaibhav');
const ajinkya = new Person('ajinkya');

vaibhav.on('name', (info) => {
    console.log('My name is:', vaibhav.name);
    console.log('info: ', info);
});
ajinkya.on('name', (info) => {
    console.log('My name is:', ajinkya.name);
    console.log('info: ', info);
});
const info = {age:28}
vaibhav.emit('name', info);
ajinkya.emit('name', info);