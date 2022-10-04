'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) =>  {
  setTimeout(() => {
    console.log('DRIVER_HERE!', payload);

  }, 2000);
};





