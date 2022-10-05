'use strict';



const { io } = require('socket.io-client');
//reference to socket server -- if '/caps', use it obviously for labs
const socket = io('http://localhost:3002');
const handleReceived = require('/handleReceived');

const Chance = require('chance');
const chance = new Chance();

//
const createSendMessage = require('./sendMessage');
const sendMessage = createSendMessage(socket);

socket.on('RECEIVED', handleReceived);

setInterval(() => {
  sendMessage(`Hi ${chance.first()}`);
});


