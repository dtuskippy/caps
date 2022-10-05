'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002');

const Chance = require('chance');
const chance = new Chance();

//
const createHandleMessage = require('./handleMessage');
const handleMessage = createHandleMessage(socket);

socket.on('MESSAGE', handleMessage);

setInterval(() => {
  handleMessage(`Hi, I received your message, ${chance.first()}`);
});
