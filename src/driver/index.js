'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const driverHandlerMessage = require('./driverHandler');
const driverHandler = driverHandlerMessage(socket);

socket.on('PICKUP', driverHandler);
