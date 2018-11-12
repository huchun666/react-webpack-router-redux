const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = {
    entry: {
        app: path.resolve(__dirname, '..', 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src/index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '..', 'src')
        }
    }
}

module.exports = baseConfig