const isEnv = (env) => process.env.NODE_ENV === env;

const isTest = isEnv('test');
const isLocal = isEnv('development');

module.exports = {
  isTest,
  isLocal,
};
