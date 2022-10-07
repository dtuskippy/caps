'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/brightness');

socket.emit('JOIN', 'sun');

setInterval(() =>
)
//started doing the random brightness like from yesterday.....above -- sick of typing

socket.emit('SUNLIGHT', { brightness })
