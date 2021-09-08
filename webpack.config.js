const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      util: require.resolve('util/'),
    },
  },
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000/',
      '/movies': 'http://localhost:3000/',
      '/shows': 'http://localhost:3000/',
      '/home': 'http://localhost:3000/',
      '/signin': 'http://localhost:3000/',
      '/user': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin({})].filter(Boolean),
  devtool: 'source-map',
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
      NODE_ENV: JSON.stringify(dotenv.config().parsed),
      API_KEY: JSON.stringify(dotenv.config().parsed),
      // it will automatically pick up key values from .env file
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"',
    //   },
    // }),
    // ...
  ],
};
