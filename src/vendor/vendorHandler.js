'use strict';

const Chance = require('chance');
var chance = new Chance();

const room = require('./room');

function initiatePickup(socket) {
    console.log('-----Order ready and awaiting pickup-----');
    let payload = {
        store: chance.company(),
        orderId: chance.integer({ min: 100000, max: 999999 }),
        customer: chance.first() + ' ' + chance.last(),
        address: chance.address()
    };

     room(socket, payload)
     socket.emit('PICKUP', payload);

};

module.exports = initiatePickup;



