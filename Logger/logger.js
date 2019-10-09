'use strict';

const socketIoClient = require('socket.io-client');

const URL = process.env.URL || 'http://localHost:3000';

let logCount = 1;
let errorCount = 1;

const client = socketIoClient.connect(URL);
console.log(`Connected to ${URL}`);

client.on('data', data => {
  let json = JSON.parse(data);
  if (json.eventType === 'file-save') {
    console.log(`Log ${logCount}:`, json);
    logCount++;
  } else if (json.eventType === 'file-error') {
    console.log(`Error ${errorCount}:`, json);
    errorCount++;
  }
  
});
