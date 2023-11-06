const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        './client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client.index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'client'), 'node_modules'],
    },
    mode: 'development',

};