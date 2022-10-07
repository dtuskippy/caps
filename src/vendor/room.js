'use strict';

function room(socket, payload) {
    socket.emit('JOIN', payload.store)
}


module.exports = room;



