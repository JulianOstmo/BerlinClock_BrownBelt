const {
  deleteMessage,
  getMessages,
  publishMessage,
  readMessage,
} = require('../../../src/services/mq.service');
const { mq } = require('../../../src/helpers/mq.helper');
const logger = require('../../../src/utils/logger');

jest.mock('../../../src/helpers/mq.helper');
jest.mock('../../../src/utils/logger');

describe('GIVEN the MQ Service', () => {
  const messageId = '123abc456efg';

  describe('WHEN the readMessage function is called', () => {
    const message = 'test message';
    const status = 200;

    beforeEach(() => {
      mq.get.mockResolvedValue({ data: message, status });
    });

    it('THEN a single message should be returned', async () => {
      expect(await readMessage(messageId)).toEqual(message);
    });

    it('THEN the message ID, message and response status should be logged', async () => {
      await readMessage(messageId);
      expect(logger.info.mock.calls[0][0]).toContain(messageId);
      expect(logger.info.mock.calls[0][1]).toEqual({ status, message });
    });

    it('THEN a GET request should have been made to the MQ REST API', async () => {
      await readMessage(messageId);
      expect(mq.get).toHaveBeenCalled();
    });

    it('THEN it should throw if the messageId has not been passed', async () => {
      await expect(readMessage()).rejects.toThrow();
    });
  });

  describe('WHEN the getMessages function is called', () => {
    const messages = [{ format: 'MQSTR', messageId }];
    const status = 200;

    beforeEach(() => {
      mq.get.mockResolvedValue({ data: { messages }, status });
    });

    it('THEN an array of messages should be returned', async () => {
      expect(await getMessages()).toEqual(messages);
    });

    it('THEN the queue length and response status should be logged', async () => {
      const queueLength = messages.length;
      await getMessages();
      expect(logger.info.mock.calls[0]).toContainEqual({ status, queueLength });
    });

    it('THEN a GET request should have been made to the MQ REST API', async () => {
      await getMessages();
      expect(mq.get).toHaveBeenCalled();
    });
  });

  describe('WHEN the publishMessage function is called', () => {
    const message = 'test message';
    const status = 200;

    beforeEach(() => {
      mq.post.mockResolvedValue({ status });
    });

    it('THEN it should successfully resolve', async () => {
      await expect(publishMessage(message)).resolves.not.toThrow();
    });

    it('THEN the message and response status should be logged', async () => {
      await publishMessage(message);
      expect(logger.info.mock.calls[0]).toContainEqual({ status, message });
    });

    it('THEN a POST request that includes a message should have been made to the MQ REST API', async () => {
      await publishMessage(message);
      expect(mq.post.mock.calls[0]).toContain(message);
    });

    it('THEN the message being sent should be marked as "persistent"', async () => {
      await publishMessage(message);
      expect(mq.post.mock.calls[0]).toContainEqual({
        headers: { 'ibm-mq-md-persistence': 'persistent' },
      });
    });

    it('THEN it should throw if the a message has not been passed', async () => {
      await expect(publishMessage()).rejects.toThrow();
    });
  });

  describe('WHEN the deleteMessage function is called', () => {
    const message = 'test message';
    const status = 200;

    beforeEach(() => {
      mq.delete.mockResolvedValue({ data: message, status });
    });

    it('THEN it should successfully resolve', async () => {
      await expect(deleteMessage(messageId)).resolves.not.toThrow();
    });

    it('THEN the message ID, message and response status should be logged', async () => {
      await deleteMessage(messageId);
      expect(logger.info.mock.calls[0][0]).toContain(messageId);
      expect(logger.info.mock.calls[0][1]).toEqual({ status, message });
    });

    it('THEN a DELETE request that includes a message ID should have been made to the MQ REST API', async () => {
      await deleteMessage(messageId);
      expect(mq.delete.mock.calls[0]).toContainEqual({
        headers: expect.objectContaining({ messageId }),
      });
    });

    it('THEN it should throw if the messageId has not been passed', async () => {
      await expect(deleteMessage()).rejects.toThrow();
    });
  });
});
