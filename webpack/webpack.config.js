const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production', // production
  entry: './src/principal.js',
  output:{
    filename: 'principal.js',// arquivo gerado
    path: __dirname + '/public'
  },
  devServer: {
    contentBase:"./public",
    port: 9000
  },
  optimization:{
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:"estilo.css"
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/, // regex101.com para testar
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader', // Adiciona CSS dentro da DOM injetando a tag <style>
        'css-loader', // interpreta @import, url ()
        'sass-loader',
      ]
    },{
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  }
}