import closure from 'rollup-plugin-google-closure-compiler';
import alias from 'rollup-plugin-alias';

export default {
  input: './src/app.js',
  output: {
    file: './dist/app.min.js',
    sourceMap: true,
    format: 'umd',
  },
  sourceMap: true,
  plugins: [
    closure({
      languageIn: 'ECMASCRIPT6',
      languageOut: 'ECMASCRIPT5',
      compilationLevel: 'ADVANCED',
      warningLevel: 'DEFAULT',
      externs: "./src/externs.js"
    })
  ]
}
