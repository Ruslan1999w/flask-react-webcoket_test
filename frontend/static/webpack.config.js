var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  entry: path.join(__dirname, '/js/index.jsx'),

  output: {
    path: path.join(__dirname, './source_file'),
    filename: 'bundle.js',
    publicPath: path.resolve('./source_file')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json',
    }),
  ],

  optimization: {
    minimize: false,
  },
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 800000,
  },
};
