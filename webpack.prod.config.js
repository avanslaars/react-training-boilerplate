const path = require("path")
const merge = require("webpack-merge")
const base = require("./webpack.base.config")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

module.exports = merge(base, {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()]
})
