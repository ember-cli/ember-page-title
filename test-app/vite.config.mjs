import { defineConfig } from 'vite';
import { extensions, ember, hbs, classicEmberSupport } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    ...(process.env.ENABLE_COMPAT_BUILD ? [classicEmberSupport()] : []),
    hbs(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});
