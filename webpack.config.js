module.exports = {
    entry: './src/koi.js',
    target: 'electron',
    output: {
        path: __dirname + '/app',
        filename: 'main.js'
    },
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
