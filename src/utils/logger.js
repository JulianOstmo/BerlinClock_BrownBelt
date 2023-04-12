/* istanbul ignore file */
const winston = require('winston');
const config = require('config');
const util = require('util');
const { isTest, isLocal } = require('./constants');

const getLogMetadata = () => ({
  transform(info) {
    const args = info[Symbol.for('splat')];
    const formattedMsg = { ...info };
    formattedMsg.message += args ? ` ${util.format(args)}` : '';
    return formattedMsg;
  },
});

const getColouredFormat = () =>
  winston.format.combine(
    winston.format.timestamp(),
    getLogMetadata(),
    winston.format.printf((msg) =>
      winston.format
        .colorize()
        .colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`),
    ),
  );

const getJsonFormat = () =>
  winston.format.combine(winston.format.timestamp(), winston.format.json());

const getWinstonConfig = (logLevel, format) => ({
  level: logLevel,
  handleExceptions: true,
  silent: isTest,
  format,
});

const createConsoleTransport = (format) => {
  const level = config.get('logger.level');
  const winstonConfig = getWinstonConfig(level, format);
  return new winston.transports.Console(winstonConfig);
};

const format = isLocal || isTest ? getColouredFormat() : getJsonFormat();

const transformer = () => {
  const logger = winston.createLogger({
    transports: [createConsoleTransport(format)],
    exitOnError: false,
  });

  logger.stream = {
    write(message) {
      logger.debug(message);
    },
  };
  return logger;
};

module.exports = transformer();
