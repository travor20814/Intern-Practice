// @flow

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV !== 'production' ? 'eval' : false,
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: `'${NODE_ENV || 'development'}'`,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    hot: true,
    contentBase: [
      path.resolve(__dirname, 'static'),
    ],
    publicPath: '/',
    compress: true,
    port: 5491,
    filename: 'bundle.js',
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  resolve: {
    mainFields: [
      'browser',
      'main',
      'module',
    ],
    extensions: [
      '.jsx',
      '.js',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(jpe?g|png|gif|svg|mp4|mjpeg|zip|obj)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: '[hash].[ext]',
          },
        }],
        include: [
          /static/,
        ],
      },
    ],
  },
};
