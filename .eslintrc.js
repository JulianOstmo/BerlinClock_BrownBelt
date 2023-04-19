module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    // https://github.com/prettier/eslint-config-prettier
    // by adding this config last, we can overwrite any other styling rules from eslint configs
    'prettier',
  ],
  plugins: ['jest', 'prettier'],
  rules: {
    'max-len': 'off',
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    camelcase: 0,
    'jest/no-standalone-expect': [
      'error',
      {
        additionalTestBlockFunctions: ['Given', 'When', 'Then', 'And'],
      },
    ],
  },
};
