const { mq } = require('../helpers/mq.helper');
const logger = require('../utils/logger');

const persistent = { 'ibm-mq-md-persistence': 'persistent' };

const readMessage = async (messageId) => {
  if (!messageId) {
    throw new Error('messageId required');
  }

  const { data: message, status } = await mq.get('/message', {
    headers: { messageId },
  });
  logger.info(`[MQ Service] Read message: ${messageId}`, { status, message });

  return message;
};

const getMessages = async () => {
  const { data, status } = await mq.get('/messagelist');
  const { messages } = data;
  logger.info('[MQ Service] Get messages', {
    status,
    queueLength: messages.length,
  });

  return messages;
};

const publishMessage = async (message) => {
  if (!message) {
    throw new Error('message required');
  }

  const { status } = await mq.post('/message', message, {
    headers: persistent,
  });
  logger.info('[MQ Service] Publish message', { status, message });
};

const deleteMessage = async (messageId) => {
  if (!messageId) {
    throw new Error('messageId required');
  }

  const { data: message, status } = await mq.delete('/message', {
    headers: { messageId },
  });
  logger.info(`[MQ Service] Delete message: ${messageId}`, { status, message });
};

module.exports = {
  deleteMessage,
  getMessages,
  publishMessage,
  readMessage,
};
