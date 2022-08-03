const express = require('express');
const { Server } = require('socket.io');
const app = express();

const http = app.listen(8080, () => {
  console.log('server listening on 8080...');
});

const io = new Server(http);

io.on('connection', (client) => {
  console.log('client connected');

  client.on('disconnect', () => {
    console.log('client left');
  })
});