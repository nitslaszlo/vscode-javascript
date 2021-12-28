/* eslint-disable no-undef */
module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single'],
  },
};
