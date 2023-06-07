const config = require('config');
const app = require('./src/index');

const port = config.get('app.port');

app.listen(port, () => {
  console.info(`App listening on port:${port}`);
});
