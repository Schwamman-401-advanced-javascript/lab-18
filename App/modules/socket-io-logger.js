const eventHub = require('./eventHub');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

initializeLogger();

function initializeLogger() {
  console.log('Socket logger connected');

  eventHub.on('save', log('file-save'));
  eventHub.on('error', log('file-error'));

  function log(eventType) {
    return payload => {
      let data = JSON.stringify({ payload });
      socket.emit(eventType, data);
    };
  }
}