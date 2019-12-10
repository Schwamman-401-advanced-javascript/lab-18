'use strict';

const Q = require('@nmq/q/client');
const eventHub = require('./eventHub');

initializeLogger();

function initializeLogger() {
  console.log('Logger Connected!');

  eventHub.on('save', log('update'));
  eventHub.on('get', log('read'));
  eventHub.on('error', log('error'));

  function log(eventType) {
    return payload => {
      Q.publish('database', eventType, payload);
    };
  }

}