import closure from 'rollup-plugin-google-closure-compiler';
export default {
    input: './src/app.js',
    output: {
        file: './dist/app.min.js',
        sourceMap: true,
        format: 'umd',
        globals:['Vue'],
    },
    plugins: [
        closure({
            languageIn: 'ECMASCRIPT6',
            languageOut: 'ECMASCRIPT5',
            compilationLevel: 'ADVANCED',
            warningLevel: 'DEFAULT'
        })
    ]
}
