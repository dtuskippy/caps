'use strict';

const eventPool = require('./eventPool');
const { initiateOrder, confirmOrder } = require('./vendor/vendorHandler');
const { inTransit, pickup, delivered } = require('./event/eventHandler');
const driverHandler = require('./driver/driverHandler');


eventPool.on('NEW_CUSTOMER_ORDER', initiateOrder);
eventPool.on('PICKUP', pickup);
eventPool.on('PICKUP', driverHandler);
eventPool.on('IN_TRANSIT', inTransit);
eventPool.on('DELIVERED', delivered);
eventPool.on('DELIVERED', confirmOrder);




function customerOrder () {
  const payload = {text: 'New Customer Order'};
  eventPool.emit('NEW_CUSTOMER_ORDER', payload);
}

setInterval(() => {
  console.log('---------new order process begins---------');
  customerOrder();
}, 4000);




