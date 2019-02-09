#!/usr/bin/env node
/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
const resolve = require('resolve');
const util = require('util');
const fs = require('fs');

const package = require('./package.json');
const packageName = package.name;
const version = package.version;
const basedir = path.join(__dirname);
const babelRc = JSON.parse(fs.readFileSync(path.join(basedir, '.babelrc'), 'utf8'));

// Use the real node __dirname and __filename in order to get Yarn's source
// files on the user's system. See constants.js
const nodeOptions = {
  __filename: false,
  __dirname: false,
};

//
// Legacy build
//

module.exports = {
  // devtool: 'inline-source-map',
  entry: path.join(basedir, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules[\\\/](?!inquirer)/,
        use: [
          {
            loader:'babel-loader',
            options: babelRc.env['pre-node5'],
          }
        ],
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /rx\.lite\.aggregates\.js/,
        use: 'imports-loader?define=>false'
      },
    ],
  },
  output: {
    filename: `${packageName}-${version}.js`,
    path: path.join(basedir, 'dist'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
      exclude: /lockfile/
    }),
  ],
  target: 'node',
  node: nodeOptions,
};
