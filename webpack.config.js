const path = require("path");
const html = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'webpack-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
        ]
      }
    ]
  },
  plugins: [
    new html({ title: 'template', template: path.join(__dirname, 'client', 'public', 'index.html')}),
  ],
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 3000,
    open: true,
    proxy: {
      "/": "http://localhost:8080"
    }
  }
};