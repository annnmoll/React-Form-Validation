import resolve from '@rollup/plugin-node-resolve';  // Correct plugin import
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',  // Entry point of your library
  output: [
    {
      file: 'dist/bundle.cjs.js',  // CommonJS module
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',  // ES Module
      format: 'esm',
    },
  ],
  plugins: [resolve(), commonjs()],
};
