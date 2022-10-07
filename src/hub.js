'use strict';

const { Server } = require('socket.io');
const PORT = 3001;

const server = new Server(PORT);

const caps = server.of('/caps');


caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace!', socket.id);

  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room`);
    socket.join(room);
  });

  socket.on('PICKUP', (payload) => logEvent('PICKUP', payload));
  socket.on('PICKUP', (payload) => socket.broadcast.emit('PICKUP', payload));
  socket.on('IN_TRANSIT', (payload) => logEvent('IN_TRANSIT', payload));
  socket.on('IN_TRANSIT', (payload) => socket.broadcast.emit('IN_TRANSIT', payload));
  socket.on('DELIVERED', (payload) => logEvent('DELIVERED', payload));
  socket.on('DELIVERED', (payload) => socket.broadcast.emit('DELIVERED', payload));

});

function logEvent(event, payload) {
  const date = new Date();
  const time = date.toTimeString();
  console.log('EVENT', {event, time, payload});
}
