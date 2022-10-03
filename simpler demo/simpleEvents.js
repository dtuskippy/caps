'use strict';
//purely disconnected....just doing the coding
const Event = require('events');


//event singleton -- have a single context of event is important

const eventPool = new Event();

//create client list -- in lab, will be stand-alone files
//function could have a payload parameter

function ryansPhone () {
  console.log('sending message'); //this is proof of life (nobody subscribing)
  //takes 2 arguments: event name as string, payload
  const payload = {text: 'You\'ve Tot this!!!'};
  eventPool.emit('SEND_MESSAGE', payload);
}

function elainesPhone(payload) {
  setTimeout(() => {
    console.log('Message received by Elaine:::', payload);
  }, 1000);
  
  //Elain could also emit an event to event pool 
  //CRUD or REST operations
  //more complex processing
}

function brandonPsPhone(payload) {
  setTimeout(() => {
    console.log('Message received by Bradon P:::', payload);
  }, 500);
  
}

//client subscribe with .on(), taking 2 args: event name as string, 2nd is callback
//gets complicated -- can do array with a map....
eventPool.on('SEND_MESSAGE', elainesPhone)
eventPool.on('SEND_MESSAGE', brandonPsPhone)

//fires code every so often -- setInterval native JS...not only with Event....
setInterval(() => {
  ryansPhone();
}, 2000)


