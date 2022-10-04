'use strict';

const eventPool = require('./eventPool');
const driverHandler = require('./driver/driverHandler');
const vendorHandler = require('./vendor/vendorHandler');


eventPool.on('NEW_CUSTOMER_ORDER', vendorHandler);
eventPool.on('PICKUP', driverHandler);
// eventPool.on('DILATION', pupilHandler);
// eventPool.on('SHIELD_EYES', handHandler);

function customerOrder () {
  const payload = {text: 'New Customer Order'};
  eventPool.emit('NEW_CUSTOMER_ORDER', payload);
}

setInterval(() => {
  console.log('---------new order process begins---------');
  customerOrder();
}, 4000);




// Vendor
// -emit: I want to alert the system when I have a package to be picked up.
// -on: As a vendor, I want to be notified when my package has been delivered.

// Driver
// -on: I want to be notified when there is a package to be delivered.
// -emit: I want to alert the system when a package has been delivered.
// -emit:  I want to alert the system when I have picked up a package and it is in transit.



// Events
// (1) package to be picked up
// vendor.emit
// driver.on
// (2) package delivered
// driver.emit
// vendor.on
// (3) picked up and in transit
