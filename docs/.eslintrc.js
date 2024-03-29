'use strict';

module.exports = {
  root: true,
  overrides: [
    {
      files: ['{app,tests}/**/*.{js,ts}'],
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
      files: [
        './*.{cjs,js}',
        './blueprints/*/index.js',
        './config/**/*.{cjs,js}',
      ],
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
      // Test files:
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
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
