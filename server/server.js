const express = require('express');
const { Server, Socket } = require('socket.io');
const app = express();

const http = app.listen(8080, () => {
  console.log('server listening on 8080...');
});

const clients = {};

const io = new Server(http);

io.on('connection', (client) => {
  // io.emit('server', `${client.id} just joined`);
  
  client.on('name', (data) => {
    client.broadcast.emit('joinShout', `${data} joined the chat`);
  });

  client.on('userMessage', (data) => {
    console.log('usermsg', data);
    client.broadcast.emit('relayUserMsg', `${data.from}: ${data.content}`);
  })

  client.on('disconnect', () => {
    console.log('client left');
  })
});