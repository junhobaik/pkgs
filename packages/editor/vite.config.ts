import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import tailwindcss from 'tailwindcss';
import postcssPrefixSelector from 'postcss-prefix-selector';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        postcssPrefixSelector({
          prefix: '',
          transform(prefix, selector, prefixedSelector) {
            const prefixes = ['#pkg-editor', '#tippy-1'];
            if (selector.startsWith('html') || selector.startsWith('body') || selector.startsWith(':') || selector.startsWith('::')) {
              return selector;
            }

            return prefixes.map((p) => `${p} ${selector}`).join(', ');
          },
        }),
      ],
    },
    modules: {
      scopeBehaviour: 'local',
    },
  },
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
        banner: '"use client";',
      },
    },
  },
});
