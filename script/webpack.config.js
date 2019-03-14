const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './app/index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(c|le)ss$/,
        use:['vue-style-loader', 'css-loader', 'less-loader']
      }
    ]
  },

  'devServer': {
    open: true,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),

    new VueLoaderPlugin(),

    new webpack.HotModuleReplacementPlugin()
  ]
}


