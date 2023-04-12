require('dotenv').config();

module.exports = {
  app: {
    port: 3443,
  },
  logger: {
    level: 'info',
  },
  mq: {
    host: 'https://web-test-mq-manager-ceb3.qm2.us-south.mq.appdomain.cloud/',
    username: process.env.MQ_USERNAME,
    apiKey: process.env.API_KEY,
    queue: 'DEV.QUEUE.1',
    queueManager: 'test_mq_manager',
  },
};
