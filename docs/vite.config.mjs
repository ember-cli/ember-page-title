import { defineConfig } from 'vite';
import { extensions, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { emberSsg } from 'vite-ember-ssr/vite-plugin';

export default defineConfig({
  plugins: [
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
    emberSsg({
      // weierdness: '', because we renamed
      // "docs" to "/" in the router
      routes: [''],
      ssrEntry: 'app/app-ssr.js',
      rehydrate: true,
    }),
  ],
  ssr: {
    noExternal: [/./],
  },
});
