// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const packageJson = require('./package.json')

module.exports = {
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'src/index.tsx'),
  },

  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: packageJson.name,
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
        },
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
    ],
  },

  plugins: [
    // Clean dist folder
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
}
