'use strict';

module.exports = {
  root: true,

  overrides: [
    {
      files: ['src/**/*.{js,ts}'],
      parser: '@typescript-eslint/parser',
      plugins: ['ember'],
      extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
        'plugin:prettier/recommended',
      ],
      env: {
        browser: true,
      },
    },
    // node files
    {
      files: ['./*.cjs', './addon-main.js'],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
    },
  ],
};
