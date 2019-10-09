'use strict';

const socketIO = require('socket.io');
const uuid = require('uuid');

const PORT = process.env.PORT || 3000;
const server = socketIO(PORT);
console.log(`I know that you came to party baby, baby, baby, baby on ${PORT}`);

server.on('connection', socket => {
  console.log(`New Connection: ${socket.id}`);

  socket.emit(`Connected to server at http://localhost:${PORT}`);

  socket.on('file-save', data => {
    server.emit('file-save', data);
  })
  socket.on('file-error', data => {
    server.emit('file-error', data);
  })
});

