const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'sourcemap',
  devServer: {
    contentBase: './build',
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        secure: false
      }
    }
  }
})
