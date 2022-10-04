'use strict';

const Chance = require('chance');
var chance = new Chance();
let eventPool = require('../eventPool');



function initiateOrder(payload) {
  setTimeout(() => {

    console.log('VENDOR_HERE!', payload);
    let orderPayload = {
        store: chance.company(),
        orderId: chance.integer({ min: 100000, max: 999999 }),
        customer: chance.first() + ' ' + chance.last(),
        address: chance.address()
         };

     eventPool.emit('PICKUP', orderPayload);

  }, 1000)
};

function confirmOrder(payload) {
    setTimeout(() => {
      console.log('Thank you, ', payload.customer);
    }, 500)
  };

module.exports = { initiateOrder, confirmOrder };
