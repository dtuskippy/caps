'use strict';

let eventPool = require('../eventPool');

eventPool.on('PICKUP', driverHandler);


function driverHandler(payload){
  setTimeout(() => {
    console.log('DRIVER -- picked up: ', payload.orderId);
  }, 250);
  setTimeout(() => {
    eventPool.emit('IN_TRANSIT', payload);
  }, 250);
  setTimeout(() => {
    console.log('DRIVER -- delivered: ', payload.orderId);
    eventPool.emit('DELIVERED', payload);
  }, 1000);
}

module.exports = driverHandler;











