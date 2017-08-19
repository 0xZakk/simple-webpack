const path = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new ExtractText('style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  }
}
