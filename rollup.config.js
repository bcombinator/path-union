import buble from 'rollup-plugin-buble'
export default {
  entry: 'index.js',
  dest: 'dist/path-union.js',
  plugins: [ buble() ],
  format: 'cjs'
};
