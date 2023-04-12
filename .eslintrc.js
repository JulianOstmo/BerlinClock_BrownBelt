module.exports = {
  extends: [
    'airbnb-base',
    // https://github.com/prettier/eslint-config-prettier
    // by adding this config last, we can overwrite any other styling rules from eslint configs
    'prettier',
  ],
  plugins: ['prettier'],
  env: {
    jest: true,
  },
  rules: {
    'max-len': 'off',
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    camelcase: 0,
  },
};
