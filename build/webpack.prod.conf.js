const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const webpackConfig = {
  mode: "production",
};

module.exports = merge(baseWebpackConfig, webpackConfig);
