const webpack = require("webpack");
const webpackConf = require("./webpack.prod.conf");

webpack(webpackConf, (err, status) => {
  // console.log(err, status);
});
