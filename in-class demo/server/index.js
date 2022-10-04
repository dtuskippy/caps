'use strict';

//create an event server

const { server, Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

//instance of listening server at http://localhost:3002
//will '/caps' in lab
const server = new Server(PORT);

// Create a namespace

const brightness = server.of('/brightness');





//connect to server
//socket (has an ID) and is subset of server...'MESSAGE' event pool....

server.on('connection', (socket) => {
    console.log('Socket connected to event server', socket.id);

    socket.on('MESSAGE', (payload) => {
        console.log('Server MESSAGE event', payload);
        //3 different ways I might emit -- makes sense to do only ONE (will show 3)
        // socket.emit('MESSAGE', payload); // sends to all parties in the socket
        // server.emit('MESSAGE', payload); // sends the message to all parties in the server (not just those subscribed to MESSAGE -- like sending message to everybody in your phone.... -- but e.g. want to send message TO EVERYBODY on a gaming system that you want to shut down system)
        socket.broadcast.emit('MESSAGE', payload); // send to all socket parties in socket EXCEPT the sender
    })

    //RECEIVED event
    socket.on('RECEIVED', (payload) => {
        console.log('Server RECEIVED event', payload);
        socket.broadcast.emit('RECEIVED', payload);
    })

})

brightness.on('connection', (socket) => {
    console.log('Socket connected to the brightness namespace', socket.id);

    //how to join a room -- get a room name (just like a socket id -- gets passed in like magic)
    socket.on('JOIN', (room) => {
        console.log(`You've joined the ${room} room`);
    })


    socket.on('SUNLIGHT', () => {
        logEvent('SUNLIGHT', payload);
        //instead of broadcast.emit above, just in this name space emit
        brightness.emit('SUNLIGHT', payload);
    })
});

function logEvent(event, payload) {
    const date = new Date();
    const time = date.toTimeSTring();
    console.log('EVENT', {event, time, payload});
}



