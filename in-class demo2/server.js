//server is same as hub, basically

'use strict';

const uuid = require('uuid').v4; // instead of chance
const io = require('socket.io')(3002); //curry the port to it....

//create a queue (will use object, could use an array)

const queue = {
  chores: {},
}

const family = io.of('/family');

family.on('connection', socket => {
  console.log('joined the /family namespace', socket.id);
  socket.on('NEW_CHORE', payload => {
    let id = uuid();
    queue.chores[id] = payload;
    socket.emit('ADDED');
    family.emit('CHORE', {id, payload});
  });
});
// ends up wrapping these in the family above localStorage...family..

socket.on('GETALL', (payload) => {
  Object.keys(queue.chores).forEach(id => {
    console.log('queued chore accessed', {id, chore: queue.chores[id]});
    socket.emit('CHORE', {id, chore: queue.chores[id]});
  }); //return array of all the keys
});

socket.on('RECEIVED', (payload) => { //payload will be a message
  delete queue.chores[payload.id];
});

