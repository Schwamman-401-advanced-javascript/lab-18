/* eslint-disable no-empty */
'use strict';

const socketIoClient = require('socket.io-client');

const URL = process.env.URL || 'http://localHost:3000';

let logCount = 1;
let errorCount = 1;

const client = socketIoClient.connect(URL);
console.log(`Connected to ${URL}`);

client.on('file-save', data => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch(error) {}
  
  console.log(`Saved Log ${logCount}:`, parsedData);
  logCount++;  
});

client.on('file-error', data => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch(error) {}

  console.log(`Error ${errorCount}:`, parsedData);
  errorCount++;
});
