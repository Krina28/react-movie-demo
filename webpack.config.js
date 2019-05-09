const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "../src/index.js",
//   filename: "./index.html"
// });

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, './src'),
      Common: path.resolve(__dirname, './src/common'),
      Components: path.resolve(__dirname, './src/components'),
      Assets: path.resolve(__dirname, './src/assets'),
      Utils: path.resolve(__dirname, './src/util')
    },
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      use: {
        loader: "babel-loader"
      },
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  //plugins: [htmlPlugin],
  devServer: {
    historyApiFallback: true,
  }
};
