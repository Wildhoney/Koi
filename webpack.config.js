const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/default.js',
    output: {
        path: __dirname + '/public/assets',
        filename: 'koi.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!autoprefixer?browsers=last 2 version!sass?outputStyle=compact')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('koi.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
