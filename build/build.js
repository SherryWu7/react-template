require("../color");
const webpack = require("webpack");
const webpackConf = require("./webpack.prod.conf");

webpack(webpackConf, (err, status) => {
  if (err) throw err;
  console.log("==========================");
  process.stdout.write(
    status.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + "\n\n"
  );
});
