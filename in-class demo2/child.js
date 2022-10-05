'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3002/family');


const client = require()


socket.emit('GETALL');

socket.on('CHORE', (payload) => {
  console.log('I have to do this chore: ', payload.chore);
  socket.emit('RECEIVED', payload);
})
