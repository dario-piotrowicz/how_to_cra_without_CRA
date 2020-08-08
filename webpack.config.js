const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './public',
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new TSLintPlugin({
      files: ['./src/**/*.ts'],
    }),
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /\//,
          handler: 'StaleWhileRevalidate',
        },
      ],
    }),
    new FilterWarningsPlugin({
      exclude: /.*GenerateSW has been called multiple times.*/,
    }),
  ],
};
