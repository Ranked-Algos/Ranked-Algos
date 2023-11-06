const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            ['@babel/preset-react', { targets: 'defaults' }]
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'client'), 'node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: process.env.FRONTEND_PORT || 8080,
        static: {
            directory: path.join(__dirname, '/build'),
            publicPath: '/'
        },
        hot: true,
        proxy: {
            '/db/**': {
                target: 'http://localhost:3000/',
                secure: false,
              },
            //   '/status/**': {
            //     target: 'http://localhost:3000/',
            //     secure: false,
            //   },
            //   '/google/**': {
            //     target: 'http://localhost:3000/',
            //     secure: false,
            //   },
        },
        historyApiFallback: true,
    },
};