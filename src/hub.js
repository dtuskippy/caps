'use strict';

const eventPool = require('./eventPool');
require('./vendor/vendorHandler');
require('./driver/driverHandler');

eventPool.on('PICKUP', (payload) => logEvent('PICKUP', payload));
eventPool.on('IN_TRANSIT', (payload) => logEvent('IN_TRANSIT', payload));
eventPool.on('DELIVERED', (payload) => logEvent('DELIVERED', payload));

function logEvent(event, payload) {
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}






