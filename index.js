const config = require('config');
const app = require('./src/index');
const logger = require('./src/utils/logger');

const port = config.get('app.port');

app.listen(port, () => {
  logger.info(`App listening on port:${port}`);
});
