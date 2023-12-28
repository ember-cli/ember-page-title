'use strict';

module.exports = {
  root: true,

  overrides: [
    {
      files: ['src/**/*.{js,ts}'],
      parser: '@typescript-eslint/parser',
      plugins: ['ember', '@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:ember/recommended',
        'plugin:prettier/recommended',
      ],
      env: {
        browser: true,
      },
      rules: {
        // temp, remove these in #275
        '@typescript-eslint/ban-ts-comment': 'off',
        'prefer-rest-params': 'off',
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
    {
      files: ['package.json'],
      plugins: ['jsonc'],
      parser: 'jsonc-eslint-parser',
      extends: ['plugin:jsonc/recommended-with-json', 'plugin:jsonc/prettier'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern:
              '^(?:scripts|devDependencies|peerDependencies|optionalDependencies)$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
};
