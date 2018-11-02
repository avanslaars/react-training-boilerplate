const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const BundleAnalyzerConfig = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: true
})

module.exports = merge(base, {
  mode: 'production',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [BundleAnalyzerConfig, new CleanWebpackPlugin(['build'])]
})
