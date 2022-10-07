'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const initiatePickup = require('./vendorHandler');

socket.on('DELIVERED', (payload) => {
    console.log('Thank you, ', payload.customer);
    socket.disconnect();
  })

setInterval(() => {
    console.log('---------New order process begins---------');
    initiatePickup(socket);
  }, 4000);

