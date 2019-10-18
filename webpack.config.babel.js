const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src/index.js'),
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: packageJson.name,
        libraryTarget: 'umd',
    },

    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 500
    },

    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                'react-app',
                            ],
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader',
            },
        ]
    },

    plugins: [
        // Clean dist folder
        new CleanWebpackPlugin(['dist/*.*']),

        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        //https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
};
