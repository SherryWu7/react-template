const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const webpackConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), //开发服务运行时的文件根目录
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(baseWebpackConfig, webpackConfig);
