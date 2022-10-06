'use strict';

const Chance = require('chance');
var chance = new Chance();
let eventPool = require('../eventPool');

eventPool.on('NEW_CUSTOMER_ORDER', initiateOrder);
eventPool.on('DELIVERED', confirmOrder);


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

function customerOrder () {
  const payload = {text: 'New Customer Order'};
  eventPool.emit('NEW_CUSTOMER_ORDER', payload);
}


setInterval(() => {
  console.log('---------new order process begins---------');
  customerOrder();
}, 4000);

module.exports = { initiateOrder, confirmOrder };



