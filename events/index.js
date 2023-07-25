const { EventEmitter } = require('events');  // TODO 1

const myEventEmmiter = new EventEmitter(); // TODO 2

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}


myEventEmmiter.on('my-birthday', birthdayEventListener)  // TODO 3

myEventEmmiter.emit('my-birthday', 'Rizky Perdana Nst') // TODO 4