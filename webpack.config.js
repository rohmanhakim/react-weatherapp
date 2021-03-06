const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader:"babel-loader"},
      {test: /\.css$/, loader:"style-loader!css-loader"},
      {test: /\.(jpg|png)$/, loader: "url-loader?limit=25000"}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
