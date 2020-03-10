const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageJson = require('./package.json');

module.exports = {
    mode: 'production',
    entry: {
        index: path.join(__dirname, 'src/index.js'),
    },

    externals: {
        react: 'react',
        reactDOM: 'react-dom'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: packageJson.name,
        libraryTarget: 'umd',
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

    optimization: {
        runtimeChunk: { name: 'manifest' }
    },

    plugins: [
        // Clean dist folder
        new CleanWebpackPlugin(['dist/*.*']),
    ]
};
