'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {

    console.log('VENDOR_HERE!', payload);
    let orderPayload = {
        store: 'Kaufland',
        orderId: 36161756,
        customer: 'Gizmo Domingo',
        address: '445 Mt. Nebu'
     };

     eventPool.emit('PICKUP', orderPayload);


    //  if(payload.brightness > 50){
    //    eventPool.emit('DILATION', 'close');
    //    eventPool.emit('SHIELD_EYES', 'use hand to shield eyes from brightness')
    //  } else {
    //    eventPool.emit('DILATION', 'open');
    //  }
  }, 2000)
};
