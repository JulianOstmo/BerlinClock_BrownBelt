const axios = require('axios').default;
const config = require('config');

const { host, username, apiKey, queue, queueManager } = config.get('mq');
const baseURL = `${host}ibmmq/rest/v2/messaging/qmgr/${queueManager}/queue/${queue}`;

const mq = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'text/plain',
    'ibm-mq-rest-csrf-token': '',
  },
  auth: {
    username,
    password: apiKey,
  },
});

module.exports = {
  mq,
};
