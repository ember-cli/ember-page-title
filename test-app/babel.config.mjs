import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildMacros } from '@embroider/macros/babel';

const macros = buildMacros();

const isCompatBuild = !!process.env.ENABLE_COMPAT_BUILD;

export default {
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        allExtensions: true,
        onlyRemoveTypeImports: true,
        allowDeclareFields: true,
      },
    ],
    [
      'babel-plugin-ember-template-compilation',
      {
        enableLegacyModules: [
          'ember-cli-htmlbars',
          'ember-cli-htmlbars-inline-precompile',
          'htmlbars-inline-precompile',
        ],
        transforms: [...macros.templateMacros],
      },
    ],
    [
      'module:decorator-transforms',
      {
        runtime: {
          import: fileURLToPath(
            import.meta.resolve('decorator-transforms/runtime-esm'),
          ),
        },
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: dirname(fileURLToPath(import.meta.url)),
        useESModules: true,
        regenerator: false,
      },
    ],
    ...macros.babelMacros,
    ...(isCompatBuild
      ? [
          [
            'babel-plugin-debug-macros',
            {
              flags: [{ source: '@glimmer/env', flags: { DEBUG: true } }],
            },
          ],
        ]
      : []),
  ],

  overrides: isCompatBuild
    ? [
        {
          test: (filename) =>
            filename !== undefined && !filename.includes('/ember-source/'),
          plugins: [
            'babel-plugin-ember-polyfill-get-and-set-owner-from-ember-owner',
          ],
        },
      ]
    : [],

  generatorOpts: {
    compact: false,
  },
};
