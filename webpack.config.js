// DEPENDENCIES
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

// WEBPACK PLUGINS
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

// PATHS
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = './dist';
var APP_PATH = path.resolve(ROOT_PATH, 'src');

// LOADERS
var cssPrefix = 'css?-mergeRules&importLoaders=2&modules';
var cssExtractLoader = {
  test: /\.(css|scss)$/,
  loader: ExtractTextPlugin.extract('style', cssPrefix + '!postcss!sass')
};
var imgLoader = {
  test: /\.(png|svg)$/,
  include: path.resolve(APP_PATH, 'assets'),
  loader: 'url-loader?limit=100000'
};
var babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    plugins: ['transform-runtime', 'transform-object-rest-spread'],
    presets: ['es2015']
  }
};

// CONFIG
var config = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    sourceMapFilename: "[file].map.json",
  },
  resolve: {
    root: APP_PATH,
    alias: {},
    extensions: ['', '.js', '.scss', '.css']
  },
  module: {
    preLoaders: [babelLoader],
    loaders: [cssExtractLoader, imgLoader]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true}),
    new ExtractTextPlugin('request.css'),
    new HtmlWebpackPlugin({
      template: APP_PATH + '/index.html',
      inject: 'body',
    })
  ],
  postcss: [
    autoprefixer({
      browsers: [
        'last 2 version',
        'iOS >= 8',
        'Safari >= 8'
      ]
    })
  ]
};

module.exports = config;
