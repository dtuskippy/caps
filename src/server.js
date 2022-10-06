'use strict';

const express = require('express');



const app = express();
const PORT = process.env.PORT || 3004;

app.get('/', (req, res, next) => {
  res.status(200).send('Hello, welcome to the World of CAPS!');
});


function start(){
  app.listen(PORT, () => console.log('Listening on port', PORT));
}

module.exports = { app, start };
