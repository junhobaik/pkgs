import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: false,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
  banner: { js: '"use client";' },
});
