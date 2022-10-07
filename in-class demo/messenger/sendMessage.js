'use strict';

//curried functoin to handle dependency injection
//basically, this needs a socket, and we want to pass in some text

module.exports = (socket) => (text) => {
  console.log('Sending Message: ', text);
  socket.emit('MESSAGE', { text });
};

// example of what this function call might look like
// sendMessage(socket)('some text');
